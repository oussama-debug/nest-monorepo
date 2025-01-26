import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class SignedImageGQLInput {
  @Field()
  key: string;

  @Field(() => Int, { nullable: true })
  expiresIn?: number;
}
