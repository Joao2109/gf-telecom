/*
  Warnings:

  - Added the required column `status` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusSala" AS ENUM ('ABERTA', 'FECHADA');

-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "status" "StatusSala" NOT NULL;
