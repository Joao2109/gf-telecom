/*
  Warnings:

  - Added the required column `senderId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mensagem" ADD COLUMN     "senderId" TEXT NOT NULL;
