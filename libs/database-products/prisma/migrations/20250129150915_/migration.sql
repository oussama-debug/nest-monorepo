/*
  Warnings:

  - You are about to drop the column `type` on the `pricing_taxes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pricing_taxes" DROP COLUMN "type";

-- DropEnum
DROP TYPE "pricingTax";
