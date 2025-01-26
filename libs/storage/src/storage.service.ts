import { Inject, Injectable } from '@nestjs/common';
import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  GetObjectCommand,
  S3Client,
  UploadPartCommand,
} from '@aws-sdk/client-s3';
import {
  STORAGE_MODULE_OPTIONS,
  StorageModuleOptions,
} from '@app/common/services/storage/storage.options';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { CreateUploadInput } from '@app/common/services/storage/inputs/create-upload-input';
import { v4 } from 'uuid';
import { UploadInitializationOutput } from '@app/common/services/storage/outputs/create-upload-output';
import { CreatePresignedUrlOutput } from '@app/common/services/storage/outputs/create-presigned-url-output';
import { CompleteUploadInput } from '@app/common/services/storage/inputs/complete-upload-input';
import { CompleteUploadOutput } from '@app/common/services/storage/outputs/complete-upload-output';
import { AbortUploadInput } from '@app/common/services/storage/inputs/abort-upload.input';
import { SignedImageInput } from '@app/common/services/storage/inputs/get-signed-image-input';
import { SignedImageOutput } from '@app/common/services/storage/outputs/get-signed-input-output';

@Injectable()
export class StorageService {
  private readonly s3Client: S3Client;
  private readonly bucketName: string;
  private readonly maxFileSize: number;

  constructor(
    @Inject(STORAGE_MODULE_OPTIONS)
    private readonly storageOptions: StorageModuleOptions,
  ) {
    this.s3Client = new S3Client({
      region: storageOptions.s3.region,
      credentials: {
        accessKeyId: storageOptions.s3.accessKeyId,
        secretAccessKey: storageOptions.s3.secretAccessKey,
      },
      forcePathStyle: true,
      ...(storageOptions.s3.endpoint && {
        endpoint: storageOptions.s3.endpoint,
      }),
    });
    this.bucketName = storageOptions.s3.bucketName;
    this.maxFileSize = storageOptions.s3.maxFileSize || 50 * 1024 * 1024;
  }

  async initialize({
    fileName,
    fileType,
    totalParts,
  }: CreateUploadInput): Promise<UploadInitializationOutput> {
    const uploadId = v4();
    const keypath = `uploads/${uploadId}/${fileName}`;

    const createMultipartUploadCommand = new CreateMultipartUploadCommand({
      Bucket: this.bucketName,
      Key: keypath,
      ContentType: fileType,
    });

    const response = await this.s3Client.send(createMultipartUploadCommand);

    return {
      uploadId: response.UploadId,
      key: keypath,
      presignedUrls: await this.generate(
        keypath,
        response.UploadId,
        totalParts,
      ),
    };
  }

  async getSignedImage({
    key,
    expiresIn = 3600,
  }: SignedImageInput): Promise<SignedImageOutput> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    const url = await getSignedUrl(this.s3Client, command, {
      expiresIn,
    });

    return {
      url,
      key,
      expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString(),
    };
  }

  async complete({
    key,
    uploadId,
    parts,
  }: CompleteUploadInput): Promise<CompleteUploadOutput> {
    const completeCommand = new CompleteMultipartUploadCommand({
      Bucket: this.bucketName,
      Key: key,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: parts.map((p) => ({
          ETag: p.etag,
          PartNumber: p.partNumber,
        })),
      },
    });

    const result = await this.s3Client.send(completeCommand);
    return {
      location: result.Location,
      bucket: result.Bucket,
      key: result.Key,
    };
  }

  async abort({ key, uploadId }: AbortUploadInput) {
    const abortCommand = new AbortMultipartUploadCommand({
      Bucket: this.bucketName,
      Key: key,
      UploadId: uploadId,
    });

    await this.s3Client.send(abortCommand);
  }

  validateFileSize(fileSize: number): boolean {
    return fileSize <= this.maxFileSize;
  }

  private async generate(
    key: string,
    uploadId: string,
    totalParts: number,
  ): Promise<CreatePresignedUrlOutput[]> {
    const urlPromises = Array.from({ length: totalParts }, async (_, index) => {
      const partNumber = index + 1;

      const uploadPartCommand = new UploadPartCommand({
        Bucket: this.bucketName,
        Key: key,
        PartNumber: partNumber,
        UploadId: uploadId,
      });

      const presignedUrl = await getSignedUrl(
        this.s3Client,
        uploadPartCommand,
        {
          expiresIn: 3600, // 1 hour
        },
      );

      return { partNumber, presignedUrl };
    });

    return Promise.all(urlPromises);
  }
}
