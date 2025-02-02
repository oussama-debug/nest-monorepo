import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductCreateGQLInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  productImage?: string;

  @Field()
  productPricingId: string;

  @Field()
  productCategoryId: string;

  @Field({ defaultValue: false })
  published?: boolean;
}
