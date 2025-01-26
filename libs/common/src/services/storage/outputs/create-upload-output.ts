import { CreatePresignedUrlOutput } from './create-presigned-url-output';

export interface UploadInitializationOutput {
  uploadId: string;
  key: string;
  presignedUrls: Array<CreatePresignedUrlOutput>;
}
