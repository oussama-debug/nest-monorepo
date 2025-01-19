import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  country: string;
}
