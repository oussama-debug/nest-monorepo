-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('customer', 'business');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isOnboarded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userType" "UserType" NOT NULL DEFAULT 'business';
