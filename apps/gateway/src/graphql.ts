
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
}

export class UserGQLEntityType {
    id: string;
    username: string;
    password: string;
    country: string;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserGQLInput): UserGQLEntityType | Promise<UserGQLEntityType>;
}

type Nullable<T> = T | null;
