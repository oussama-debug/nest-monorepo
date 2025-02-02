import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ProductCreateInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsString()
  @IsOptional()
  productImage?: string;

  @IsString()
  productCategoryId: string;

  @IsString()
  productPricingId: string;

  @IsString()
  workspace_id: string;

  @IsString()
  user_id: string;
}
