
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

export class UserGQLEntityType {
    id: string;
    username: string;
    password: string;
    country: string;
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

type Nullable<T> = T | null;
