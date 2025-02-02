import { Field, ObjectType, ID } from '@nestjs/graphql';
import { MembershipGQLEntityType } from './membership.model';

@ObjectType()
export class WorkspaceGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [String])
  services: string[];

  @Field()
  subdomain: string;

  @Field()
  reference: string;

  @Field(() => Boolean)
  stripe_account_verified: boolean;

  @Field(() => Boolean)
  stripe_account_disabled: boolean;

  @Field({ nullable: true })
  stripe_account_disable_reason?: string;

  @Field(() => [MembershipGQLEntityType], { nullable: true })
  memberships?: MembershipGQLEntityType[];
}
