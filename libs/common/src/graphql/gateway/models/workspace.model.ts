import { Field, ObjectType, ID } from '@nestjs/graphql';
import { MembershipGQLEntityType } from './membership.model';

@ObjectType()
export class WorkspaceGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  subdomain: string;

  @Field()
  reference: string;

  @Field(() => [MembershipGQLEntityType], { nullable: true })
  memberships?: MembershipGQLEntityType[];
}
