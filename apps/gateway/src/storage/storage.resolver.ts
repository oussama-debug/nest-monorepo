import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StorageService as S3Service } from '@app/storage';
import {
  SignedImageResponseGQLEntityType,
  StorageCompleteResponseGQLEntityType,
  StorageInitializationResponseGQLEntityType,
} from '@app/common/graphql/gateway/models/storage.model';
import { CreateFileGQLInput } from '@app/common/graphql/gateway/inputs/create/create-file-input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from '../common/guards/graphql.guard';
import { InvalidFileSizeGQLError } from '@app/common/graphql/gateway/errors/invalid-file-size';
import { CompleteUploadGQLInput } from '@app/common/graphql/gateway/inputs/create/complete-upload-input';
import { AbortUploadGQLInput } from '@app/common/graphql/gateway/inputs/create/abort-upload-input';
import { SignedImageGQLInput } from '@app/common/graphql/gateway/inputs/get/get-signed-image-input';

@Resolver()
export class StorageResolver {
  constructor(private readonly storageS3: S3Service) {}

  @Mutation(() => StorageInitializationResponseGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async initializeMultipartUpload(@Args('input') input: CreateFileGQLInput) {
    if (!this.storageS3.validateFileSize(input.fileSize))
      throw new InvalidFileSizeGQLError('Invalid file size');

    return await this.storageS3.initialize({
      fileName: input.fileName,
      fileType: input.fileType,
      totalParts: input.totalParts,
    });
  }

  @Mutation(() => StorageCompleteResponseGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async completeMultipartUpload(@Args('input') input: CompleteUploadGQLInput) {
    return this.storageS3.complete({
      key: input.key,
      uploadId: input.uploadId,
      parts: input.parts,
    });
  }

  @Mutation(() => SignedImageResponseGQLEntityType)
  @UseGuards(JwtAuthenticationGuard)
  async getSignedImage(@Args('input') input: SignedImageGQLInput) {
    return this.storageS3.getSignedImage(input);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthenticationGuard)
  async abortMultipartUpload(@Args('input') input: AbortUploadGQLInput) {
    return this.storageS3.abort({ key: input.key, uploadId: input.uploadId });
  }
}
