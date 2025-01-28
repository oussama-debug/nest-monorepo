-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN     "stripe_account_disable_reason" TEXT,
ADD COLUMN     "stripe_account_disabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stripe_account_verified" BOOLEAN NOT NULL DEFAULT false;
