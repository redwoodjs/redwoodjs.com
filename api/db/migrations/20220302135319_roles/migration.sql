-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('admin', 'editor', 'translator', 'candidate');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Roles"[];
