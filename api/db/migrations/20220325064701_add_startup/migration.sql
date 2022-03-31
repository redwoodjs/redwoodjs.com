-- AlterTable
ALTER TABLE "SocialLink" ADD COLUMN     "startupId" INTEGER;

-- CreateTable
CREATE TABLE "Startup" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "about" TEXT,
    "achievements" TEXT[],
    "cta" JSONB NOT NULL,
    "images" TEXT[],
    "name" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "questionResponses" JSONB[],
    "slug" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "technologies" TEXT[],
    "token" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "videos" TEXT[],

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Startup_slug_key" ON "Startup"("slug");

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
