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
  productPricingId: string;

  @IsString()
  productPricingTaxId: string;
}
