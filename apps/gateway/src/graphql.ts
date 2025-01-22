
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserGQLInput {
    username: string;
    password: string;
    country: string;
}

export class AuthenticationGQLInput {
    username: string;
    password: string;
}

export class WorkspaceGQLEntityType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    subdomain: string;
    reference: string;
    memberships?: Nullable<MembershipGQLEntityType[]>;
}

export class MembershipGQLEntityType {
    id: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    user?: Nullable<UserGQLEntityType>;
    workspace?: Nullable<WorkspaceGQLEntityType>;
    userId?: Nullable<string>;
    workspaceId?: Nullable<string>;
}

export class UserGQLEntityType {
    id: string;
    createdAt: DateTime;
    username: string;
    password: string;
    country: string;
    stripeCustomerId?: Nullable<string>;
    hasVerifiedIdentity: boolean;
    isOnboarded: boolean;
    memberships?: Nullable<MembershipGQLEntityType[]>;
}

export class AuthenticationResponseGQLEntityType {
    access_token: string;
    user: UserGQLEntityType;
}

export abstract class IQuery {
    abstract me(): UserGQLEntityType | Promise<UserGQLEntityType>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;

    abstract loginUser(input: AuthenticationGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;
}

export type DateTime = any;
type Nullable<T> = T | null;
