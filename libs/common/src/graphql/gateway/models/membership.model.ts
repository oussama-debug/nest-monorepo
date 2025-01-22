import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserGQLEntityType } from './user.model';
import { WorkspaceGQLEntityType } from './workspace.model';

@ObjectType()
export class MembershipGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => UserGQLEntityType, { nullable: true })
  user?: UserGQLEntityType;

  @Field(() => WorkspaceGQLEntityType, { nullable: true })
  workspace?: WorkspaceGQLEntityType;

  @Field({ nullable: true })
  userId?: string;

  @Field({ nullable: true })
  workspaceId?: string;
}
