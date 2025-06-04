-- CreateEnum
CREATE TYPE "Plano" AS ENUM ('MB100', 'MB300', 'MB500');

-- CreateEnum
CREATE TYPE "Funcao" AS ENUM ('ADMINISTRATIVO', 'TECNICO', 'GERENTE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AGENDADO', 'CONCLUIDO', 'CANCELADO');

-- CreateTable
CREATE TABLE "Cliente" (
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "plano" "Plano" NOT NULL,
    "vencimento" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "funcao" "Funcao" NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "funcionarioId" TEXT NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" SERIAL NOT NULL,
    "msg" TEXT NOT NULL,
    "salaId" INTEGER NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "clienteCpf" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'AGENDADO',

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_clienteCpf_fkey" FOREIGN KEY ("clienteCpf") REFERENCES "Cliente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
