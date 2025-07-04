
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ChargeType {
    ONE_TIME = "ONE_TIME",
    RECURRING = "RECURRING"
}

export enum PackageType {
    FLAT = "FLAT",
    PACKAGE = "PACKAGE"
}

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
    country: string;
    services: string[];
}

export class PricingCreateGQLInput {
    amount: number;
    chargeType: ChargeType;
    packageType: PackageType;
    currency: string;
}

export class PricingFeeCreateGQLInput {
    description: string;
    total: number;
    name: string;
}

export class ProductCreateGQLInput {
    name: string;
    description: string;
    productImage?: Nullable<string>;
    productPricingId: string;
    productCategoryId: string;
    published: boolean;
}

export class CategoryCreateGQLInput {
    name: string;
    description: string;
    published: boolean;
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
    services: string[];
    subdomain: string;
    reference: string;
    stripe_account_verified: boolean;
    stripe_account_disabled: boolean;
    stripe_account_disable_reason?: Nullable<string>;
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

export class StripeAccountResponseGQLEntityType {
    created: number;
    expires_at: number;
    url: string;
}

export class AuthenticationResponseGQLEntityType {
    access_token: string;
    user: UserGQLEntityType;
}

export class PricingFeeGQLEntityType {
    id: string;
    description: string;
    total: number;
    name: string;
}

export class CategoryGQLEntityType {
    id: string;
    name: string;
    description: string;
    slug: string;
    published: boolean;
    creator: UserGQLEntityType;
    workspace: WorkspaceGQLEntityType;
    products: ProductGQLEntityType[];
}

export class ProductGQLEntityType {
    id: string;
    name: string;
    description: string;
    published: boolean;
    pricings?: Nullable<PricingGQLEntityType[]>;
    creator: UserGQLEntityType;
    workspace: WorkspaceGQLEntityType;
    category: CategoryGQLEntityType;
}

export class PricingGQLEntityType {
    id: string;
    amount: number;
    charge_type: ChargeType;
    package_type: PackageType;
    currency: string;
    product?: Nullable<ProductGQLEntityType>;
    fees?: Nullable<PricingFeeGQLEntityType[]>;
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

    abstract products(): ProductGQLEntityType[] | Promise<ProductGQLEntityType[]>;

    abstract categories(): CategoryGQLEntityType[] | Promise<CategoryGQLEntityType[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;

    abstract loginUser(input: AuthenticationGQLInput): AuthenticationResponseGQLEntityType | Promise<AuthenticationResponseGQLEntityType>;

    abstract createWorkspace(input: CreateWorkspaceGQLInput): WorkspaceGQLEntityType | Promise<WorkspaceGQLEntityType>;

    abstract createAccountLink(): StripeAccountResponseGQLEntityType | Promise<StripeAccountResponseGQLEntityType>;

    abstract createPricing(input: PricingCreateGQLInput): PricingGQLEntityType | Promise<PricingGQLEntityType>;

    abstract createFee(input: PricingFeeCreateGQLInput): PricingFeeGQLEntityType | Promise<PricingFeeGQLEntityType>;

    abstract createProduct(input: ProductCreateGQLInput): ProductGQLEntityType | Promise<ProductGQLEntityType>;

    abstract createCategory(input: CategoryCreateGQLInput): CategoryGQLEntityType | Promise<CategoryGQLEntityType>;

    abstract initializeMultipartUpload(input: CreateFileGQLInput): StorageInitializationResponseGQLEntityType | Promise<StorageInitializationResponseGQLEntityType>;

    abstract completeMultipartUpload(input: CompleteUploadGQLInput): StorageCompleteResponseGQLEntityType | Promise<StorageCompleteResponseGQLEntityType>;

    abstract getSignedImage(input: SignedImageGQLInput): SignedImageResponseGQLEntityType | Promise<SignedImageResponseGQLEntityType>;

    abstract abortMultipartUpload(input: AbortUploadGQLInput): boolean | Promise<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
