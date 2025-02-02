import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryCreateGQLInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ defaultValue: false })
  published?: boolean;
}
