/*
  Warnings:

  - Added the required column `endereco` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcionarioCpf` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "funcionarioCpf" TEXT NOT NULL;
