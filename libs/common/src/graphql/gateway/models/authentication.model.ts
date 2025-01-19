import { ObjectType, Field } from '@nestjs/graphql';
import { UserGQLEntityType } from '@app/common/graphql/gateway/models/user.model';

@ObjectType()
export class AuthenticationResponseGQLEntityType {
  @Field()
  access_token: string;

  @Field()
  user: UserGQLEntityType;
}
