import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class PricingFeeCreateGQLInput {
  @Field()
  description: string;

  @Field(() => Float, { defaultValue: 0.0 })
  total?: number;

  @Field()
  name: string;
}
