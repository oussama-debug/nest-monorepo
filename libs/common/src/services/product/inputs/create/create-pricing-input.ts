import {
  ChargeType,
  PackageType,
} from '@app/common/graphql/gateway/models/product.model';
import { IsNumber, IsOptional } from 'class-validator';

export class PricingCreateInput {
  @IsNumber()
  amount: number;

  @IsOptional()
  chargeType?: ChargeType;

  @IsOptional()
  packageType?: PackageType;
}
