import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PricingTaxCreateInput {
  @IsString()
  country: string;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsString()
  state: string;
}
