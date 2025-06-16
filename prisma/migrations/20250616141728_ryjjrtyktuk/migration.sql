-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_funcionarioCpf_fkey" FOREIGN KEY ("funcionarioCpf") REFERENCES "Funcionario"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
