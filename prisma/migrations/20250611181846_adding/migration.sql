-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "clienteId" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
