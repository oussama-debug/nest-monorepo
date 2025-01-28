import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class PricingTaxCreateGQLInput {
  @Field()
  country: string;

  @Field(() => Float, { defaultValue: 0.0 })
  total?: number;

  @Field()
  state: string;
}
