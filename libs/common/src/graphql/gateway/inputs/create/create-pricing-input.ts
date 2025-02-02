import { Field, Float, InputType } from '@nestjs/graphql';
import { ChargeType, PackageType } from '../../models/product.model';

@InputType()
export class PricingCreateGQLInput {
  @Field(() => Float)
  amount: number;

  @Field(() => ChargeType, { defaultValue: ChargeType.ONE_TIME })
  chargeType?: ChargeType;

  @Field(() => PackageType, { defaultValue: PackageType.FLAT })
  packageType?: PackageType;

  @Field(() => String)
  currency: string;
}
