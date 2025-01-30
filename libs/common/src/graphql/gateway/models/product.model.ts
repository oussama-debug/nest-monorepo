import {
  Field,
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { UserGQLEntityType } from '@app/common/graphql/gateway/models/user.model';
import { WorkspaceGQLEntityType } from '@app/common/graphql/gateway/models/workspace.model';

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
export class PricingFeeGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  description: string;

  @Field(() => Float)
  total: number;

  @Field()
  name: string;
}

@ObjectType()
export class CategoryGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  slug: string;

  @Field()
  published: boolean;

  @Field(() => UserGQLEntityType)
  creator: UserGQLEntityType;

  @Field(() => WorkspaceGQLEntityType)
  workspace: WorkspaceGQLEntityType;

  @Field(() => [ProductGQLEntityType])
  products: ProductGQLEntityType[];
}

@ObjectType()
export class ProductGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  published: boolean;

  @Field(() => [PricingGQLEntityType], { nullable: true })
  pricings?: PricingGQLEntityType[];
}

@ObjectType()
export class PricingGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  amount: number;

  @Field(() => ChargeType)
  chargeType: ChargeType;

  @Field(() => PackageType)
  packageType: PackageType;

  @Field(() => ProductGQLEntityType, { nullable: true })
  product?: ProductGQLEntityType;

  @Field(() => [PricingFeeGQLEntityType], { nullable: true })
  fees: PricingFeeGQLEntityType[];
}
