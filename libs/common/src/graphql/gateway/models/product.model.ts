import {
  Field,
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum ChargeType {
  ONE_TIME = 'ONE_TIME',
  RECURRING = 'RECURRING',
}

export enum PackageType {
  FLAT = 'FLAT',
  PACKAGE = 'PACKAGE',
}

registerEnumType(ChargeType, { name: 'ChargeType' });
registerEnumType(PackageType, { name: 'PackageType' });

@ObjectType()
export class PricingTax {
  @Field(() => ID)
  id: string;

  @Field()
  country: string;

  @Field(() => Float)
  total: number;

  @Field()
  state: string;
}

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  published: boolean;
}

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  published: boolean;

  @Field(() => [Pricing], { nullable: true })
  pricings?: Pricing[];
}

@ObjectType()
export class Pricing {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  amount: number;

  @Field(() => ChargeType)
  chargeType: ChargeType;

  @Field(() => PackageType)
  packageType: PackageType;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => PricingTax, { nullable: true })
  tax?: PricingTax;
}
