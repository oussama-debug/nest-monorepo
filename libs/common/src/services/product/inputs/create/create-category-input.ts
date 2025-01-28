import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CategoryCreateInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  is_published: boolean;
}
