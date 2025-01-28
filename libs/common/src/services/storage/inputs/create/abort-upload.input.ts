import { IsString } from 'class-validator';

export class AbortUploadInput {
  @IsString()
  key: string;
  @IsString()
  uploadId: string;
}
