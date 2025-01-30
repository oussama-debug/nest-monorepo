-- CreateTable
CREATE TABLE "cateogires" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "slug" TEXT NOT NULL,

    CONSTRAINT "cateogires_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cateogires_slug_key" ON "cateogires"("slug");
