/*
  Warnings:

  - Added the required column `timestamp` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'IMAGE');

-- AlterTable
ALTER TABLE "Mensagem" ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "type" "MessageType" NOT NULL;
