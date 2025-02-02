/*
  Warnings:

  - You are about to drop the `_PricingToPricingTax` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pricing_taxes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PricingToPricingTax" DROP CONSTRAINT "_PricingToPricingTax_A_fkey";

-- DropForeignKey
ALTER TABLE "_PricingToPricingTax" DROP CONSTRAINT "_PricingToPricingTax_B_fkey";

-- DropTable
DROP TABLE "_PricingToPricingTax";

-- DropTable
DROP TABLE "pricing_taxes";

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
CREATE INDEX "_PricingToPricingFee_B_index" ON "_PricingToPricingFee"("B");

-- AddForeignKey
ALTER TABLE "_PricingToPricingFee" ADD CONSTRAINT "_PricingToPricingFee_A_fkey" FOREIGN KEY ("A") REFERENCES "pricings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingToPricingFee" ADD CONSTRAINT "_PricingToPricingFee_B_fkey" FOREIGN KEY ("B") REFERENCES "pricing_fees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
