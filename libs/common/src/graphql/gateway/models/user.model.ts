import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { MembershipGQLEntityType } from './membership.model';

export enum UserType {
  customer = 'customer',
  business = 'business',
}

@ObjectType()
export class UserGQLEntityType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  stripeCustomerId?: string;

  @Field()
  hasVerifiedIdentity: boolean;

  @Field()
  isOnboarded: boolean;

  @Field(() => [MembershipGQLEntityType], { nullable: true })
  memberships?: MembershipGQLEntityType[];
}

@ObjectType()
export class StripeAccountResponseGQLEntityType {
  @Field(() => Int)
  created: number;

  @Field(() => Int)
  expires_at: number;

  @Field()
  url: string;
}
