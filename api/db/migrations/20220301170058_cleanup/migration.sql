/*
  Warnings:

  - You are about to drop the column `company` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `discord` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `productHunt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `isHighlight` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `productHunt` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Showcase` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Showcase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "company",
DROP COLUMN "discord",
DROP COLUMN "github",
DROP COLUMN "linkedin",
DROP COLUMN "productHunt",
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "companyUrl" TEXT;

-- AlterTable
ALTER TABLE "Showcase" DROP COLUMN "isHighlight",
DROP COLUMN "productHunt",
DROP COLUMN "source",
DROP COLUMN "type";

-- DropEnum
DROP TYPE "ApplicationType";
