-- CreateEnum
CREATE TYPE "ApplicationType" AS ENUM ('sample', 'startup', 'module');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('video', 'picture');

-- CreateEnum
CREATE TYPE "Pronoun" AS ENUM ('they', 'he', 'she');

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Showcase" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "type" "ApplicationType" NOT NULL,
    "link" TEXT NOT NULL,
    "label" TEXT,
    "title" TEXT,
    "subtitle" TEXT,
    "source" TEXT,
    "description" TEXT NOT NULL,
    "mediaId" INTEGER,
    "productHunt" TEXT,

    CONSTRAINT "Showcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT,
    "isEmailPublic" BOOLEAN NOT NULL DEFAULT false,
    "pronoun" "Pronoun" NOT NULL DEFAULT E'they',
    "linkedin" TEXT,
    "github" TEXT,
    "productHunt" TEXT,
    "company" TEXT,
    "discord" TEXT,
    "avatarId" INTEGER,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShowcaseToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Showcase_mediaId_key" ON "Showcase"("mediaId");

-- CreateIndex
CREATE UNIQUE INDEX "Author_avatarId_key" ON "Author"("avatarId");

-- CreateIndex
CREATE UNIQUE INDEX "_ShowcaseToTag_AB_unique" ON "_ShowcaseToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ShowcaseToTag_B_index" ON "_ShowcaseToTag"("B");

-- AddForeignKey
ALTER TABLE "Showcase" ADD CONSTRAINT "Showcase_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowcaseToTag" ADD FOREIGN KEY ("A") REFERENCES "Showcase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowcaseToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
