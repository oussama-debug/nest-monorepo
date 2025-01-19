import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'libs/database-gateway/src/graphql';

@ObjectType()
export class AuthenticationResponseGQLEntityType {
  @Field()
  access_token: string;

  @Field()
  user: User;
}
