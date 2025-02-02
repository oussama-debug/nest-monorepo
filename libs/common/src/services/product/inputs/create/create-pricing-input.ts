import {
  ChargeType,
  PackageType,
} from '@app/common/graphql/gateway/models/product.model';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class PricingCreateInput {
  @IsNumber()
  amount: number;

  @IsOptional()
  chargeType?: ChargeType;

  @IsOptional()
  packageType?: PackageType;

  @IsString()
  user_id: string;

  @IsString()
  workspace_id: string;

  @IsString()
  currency: string;
}
