/*
  Warnings:

  - You are about to drop the column `pricingTaxId` on the `pricings` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "pricingTax" AS ENUM ('other', 'sales_tax', 'vat_tax', 'gst_tax');

-- DropForeignKey
ALTER TABLE "pricings" DROP CONSTRAINT "pricings_pricingTaxId_fkey";

-- AlterTable
ALTER TABLE "pricing_taxes" ADD COLUMN     "type" "pricingTax" NOT NULL DEFAULT 'sales_tax';

-- AlterTable
ALTER TABLE "pricings" DROP COLUMN "pricingTaxId";

-- CreateTable
CREATE TABLE "_PricingToPricingTax" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_PricingToPricingTax_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PricingToPricingTax_B_index" ON "_PricingToPricingTax"("B");

-- AddForeignKey
ALTER TABLE "_PricingToPricingTax" ADD CONSTRAINT "_PricingToPricingTax_A_fkey" FOREIGN KEY ("A") REFERENCES "pricings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingToPricingTax" ADD CONSTRAINT "_PricingToPricingTax_B_fkey" FOREIGN KEY ("B") REFERENCES "pricing_taxes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
