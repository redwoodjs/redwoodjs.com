-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "applyUrl" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "locations" TEXT NOT NULL,
    "compensation" TEXT NOT NULL,
    "perks" TEXT NOT NULL,
    "aboutJob" TEXT NOT NULL,
    "aboutApplicant" TEXT NOT NULL,
    "aboutCompany" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
