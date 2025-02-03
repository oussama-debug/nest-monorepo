-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('customer', 'business');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('owner', 'member', 'viewer');

-- CreateEnum
CREATE TYPE "OnboardingType" AS ENUM ('setup_store', 'setup_profile');

-- CreateEnum
CREATE TYPE "chargeType" AS ENUM ('one_time', 'recurring');

-- CreateEnum
CREATE TYPE "packageType" AS ENUM ('flat', 'package');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'CA',
    "stripeCustomerId" TEXT,
    "hasVerifiedIdentity" BOOLEAN NOT NULL DEFAULT false,
    "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
    "onboardingStep" "OnboardingType" NOT NULL DEFAULT 'setup_store',
    "userType" "UserType" NOT NULL DEFAULT 'business',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" "MembershipType"[] DEFAULT ARRAY['owner']::"MembershipType"[],
    "userId" UUID,
    "workspaceId" UUID,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspaces" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subdomain" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "services" TEXT[],
    "stripe_account_id" TEXT,
    "stripe_account_verified" BOOLEAN NOT NULL DEFAULT false,
    "stripe_account_disabled" BOOLEAN NOT NULL DEFAULT false,
    "stripe_account_disable_reason" TEXT,

    CONSTRAINT "workspaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" UUID,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricings" (
    "id" UUID NOT NULL,
    "amount" TEXT NOT NULL,
    "charge_type" "chargeType" NOT NULL DEFAULT 'one_time',
    "package_type" "packageType" NOT NULL DEFAULT 'flat',
    "workspaceId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" UUID,

    CONSTRAINT "pricings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricing_fees" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "total" DECIMAL(65,30) NOT NULL DEFAULT 0.0,

    CONSTRAINT "pricing_fees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PricingToPricingFee" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_PricingToPricingFee_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "workspaces_subdomain_key" ON "workspaces"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "workspaces_reference_key" ON "workspaces"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE INDEX "products_workspaceId_idx" ON "products"("workspaceId");

-- CreateIndex
CREATE INDEX "products_userId_idx" ON "products"("userId");

-- CreateIndex
CREATE INDEX "pricings_workspaceId_idx" ON "pricings"("workspaceId");

-- CreateIndex
CREATE INDEX "pricings_userId_idx" ON "pricings"("userId");

-- CreateIndex
CREATE INDEX "_PricingToPricingFee_B_index" ON "_PricingToPricingFee"("B");

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricings" ADD CONSTRAINT "pricings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingToPricingFee" ADD CONSTRAINT "_PricingToPricingFee_A_fkey" FOREIGN KEY ("A") REFERENCES "pricings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingToPricingFee" ADD CONSTRAINT "_PricingToPricingFee_B_fkey" FOREIGN KEY ("B") REFERENCES "pricing_fees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
