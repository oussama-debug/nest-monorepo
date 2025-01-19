import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserGQLInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  country: string;
}
