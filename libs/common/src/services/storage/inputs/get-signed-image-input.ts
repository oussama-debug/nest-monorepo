import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SignedImageInput {
  @IsString()
  key: string;

  @IsNumber()
  @IsOptional()
  expiresIn?: number;
}
