import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PricingFeeCreateInput {
  @IsNumber()
  @IsOptional()
  total?: number;

  @IsString()
  name: string;

  @IsString()
  description: string;
}
