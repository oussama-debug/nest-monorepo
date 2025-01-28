-- CreateTable
CREATE TABLE "pricings" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pricings_pkey" PRIMARY KEY ("id")
);
