/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Showcase` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[label]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "label" TEXT,
ALTER COLUMN "type" SET DEFAULT E'picture';

-- CreateIndex
CREATE UNIQUE INDEX "Showcase_link_key" ON "Showcase"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_label_key" ON "Tag"("label");
