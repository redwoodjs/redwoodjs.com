/*
  Warnings:

  - A unique constraint covering the columns `[localizationId]` on the table `Showcase` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `localizationId` to the `Showcase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Showcase" ADD COLUMN     "localizationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Showcase_localizationId_key" ON "Showcase"("localizationId");

-- AddForeignKey
ALTER TABLE "Showcase" ADD CONSTRAINT "Showcase_localizationId_fkey" FOREIGN KEY ("localizationId") REFERENCES "ShowcaseLocalization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
