/*
  Warnings:

  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userId" UUID NOT NULL,
ADD COLUMN     "workspaceId" UUID NOT NULL;
