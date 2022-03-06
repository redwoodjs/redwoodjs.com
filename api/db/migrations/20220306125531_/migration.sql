/*
  Warnings:

  - You are about to drop the column `localizationId` on the `Showcase` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[language,showcaseId]` on the table `ShowcaseLocalization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `showcaseId` to the `ShowcaseLocalization` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Showcase" DROP CONSTRAINT "Showcase_localizationId_fkey";

-- DropIndex
DROP INDEX "Showcase_localizationId_key";

-- AlterTable
ALTER TABLE "Showcase" DROP COLUMN "localizationId";

-- AlterTable
ALTER TABLE "ShowcaseLocalization" ADD COLUMN     "showcaseId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShowcaseLocalization_language_showcaseId_key" ON "ShowcaseLocalization"("language", "showcaseId");

-- AddForeignKey
ALTER TABLE "ShowcaseLocalization" ADD CONSTRAINT "ShowcaseLocalization_showcaseId_fkey" FOREIGN KEY ("showcaseId") REFERENCES "Showcase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
