-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('owner', 'member', 'viewer');

-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "roles" "MembershipType"[] DEFAULT ARRAY['owner']::"MembershipType"[];
