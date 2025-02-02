import { IsNumber, IsString } from 'class-validator';

export class CreateUploadInput {
  @IsString()
  fileName: string;
  @IsString()
  fileType: string;
  @IsNumber()
  totalParts: number;
}
