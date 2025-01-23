-- CreateEnum
CREATE TYPE "OnboardingType" AS ENUM ('setup_store', 'setup_profile');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "onboardingStep" "OnboardingType" NOT NULL DEFAULT 'setup_store';

-- AlterTable
ALTER TABLE "workspaces" ADD COLUMN     "stripe_account_id" TEXT;
