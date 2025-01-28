/*
  Warnings:

  - Added the required column `userId` to the `pricings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `pricings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "chargeType" AS ENUM ('one_time', 'recurring');

-- CreateEnum
CREATE TYPE "packageType" AS ENUM ('flat', 'package');

-- AlterTable
ALTER TABLE "pricings" ADD COLUMN     "amount" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "charge_type" "chargeType" NOT NULL DEFAULT 'one_time',
ADD COLUMN     "package_type" "packageType" NOT NULL DEFAULT 'flat',
ADD COLUMN     "pricingTaxId" UUID,
ADD COLUMN     "productId" UUID,
ADD COLUMN     "userId" UUID NOT NULL,
ADD COLUMN     "workspaceId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "pricing_taxes" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "state" TEXT NOT NULL,

    CONSTRAINT "pricing_taxes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pricings_workspaceId_idx" ON "pricings"("workspaceId");

-- CreateIndex
CREATE INDEX "pricings_userId_idx" ON "pricings"("userId");

-- AddForeignKey
ALTER TABLE "pricings" ADD CONSTRAINT "pricings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricings" ADD CONSTRAINT "pricings_pricingTaxId_fkey" FOREIGN KEY ("pricingTaxId") REFERENCES "pricing_taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
