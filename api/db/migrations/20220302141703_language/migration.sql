-- CreateEnum
CREATE TYPE "Language" AS ENUM ('eng', 'fra');

-- CreateTable
CREATE TABLE "ShowcaseLocalization" (
    "id" SERIAL NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT false,
    "language" "Language" NOT NULL DEFAULT E'eng',
    "title" TEXT,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,

    CONSTRAINT "ShowcaseLocalization_pkey" PRIMARY KEY ("id")
);
