import { IsArray, IsNumber, IsString } from 'class-validator';

export class CompleteUploadPartsInput {
  @IsNumber()
  partNumber: number;
  @IsString()
  etag: string;
}

export class CompleteUploadInput {
  @IsString()
  key: string;
  @IsString()
  uploadId: string;
  @IsArray()
  parts: Array<CompleteUploadPartsInput>;
}
