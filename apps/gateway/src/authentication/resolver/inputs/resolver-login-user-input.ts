import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthenticationGQLInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
