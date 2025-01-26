
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

export class CreateWorkspaceGQLInput {
    name: string;
    description: string;
}

export class CreateFileGQLInput {
    fileName: string;
    fileType: string;
    totalParts: number;
    fileSize: number;
}

export class CompleteUploadGQLInput {
    key: string;
    uploadId: string;
    parts: CompleteUploadPartsGQLInput[];
}

export class CompleteUploadPartsGQLInput {
    partNumber: number;
    etag: string;
}

export class SignedImageGQLInput {
    key: string;
    expiresIn?: Nullable<number>;
}

export class AbortUploadGQLInput {
    key: string;
    uploadId: string;
}

export class WorkspaceGQLEntityType {
    id: string;
    name: string;
    description: string;
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
    roles: string[];
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

export class StoragePresignedURLGQLEntityType {
    partNumber: number;
    presignedUrl: string;
}

export class StorageInitializationResponseGQLEntityType {
    uploadId: string;
    key: string;
    presignedUrls: StoragePresignedURLGQLEntityType[];
}

export class StorageCompleteResponseGQLEntityType {
    location: string;
    key: string;
    bucket: string;
}

export class SignedImageResponseGQLEntityType {
    url: string;
    key: string;
    expiresAt: string;
}

export abstract class IQuery {
    abstract me(): UserGQLEntityType | Promise<UserGQLEntityType>;

    abstract findWorkspaces(): WorkspaceGQLEntityType[] | Promise<WorkspaceGQLEntityType[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;

    abstract loginUser(input: AuthenticationGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;

    abstract createWorkspace(input: CreateWorkspaceGQLInput): WorkspaceGQLEntityType | Promise<WorkspaceGQLEntityType>;

    abstract initializeMultipartUpload(input: CreateFileGQLInput): StorageInitializationResponseGQLEntityType | Promise<StorageInitializationResponseGQLEntityType>;

    abstract completeMultipartUpload(input: CompleteUploadGQLInput): StorageCompleteResponseGQLEntityType | Promise<StorageCompleteResponseGQLEntityType>;

    abstract getSignedImage(input: SignedImageGQLInput): SignedImageResponseGQLEntityType | Promise<SignedImageResponseGQLEntityType>;

    abstract abortMultipartUpload(input: AbortUploadGQLInput): boolean | Promise<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
