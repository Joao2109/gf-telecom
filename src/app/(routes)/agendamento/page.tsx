import AgendamentoForm from "@/components/agendamento-form";
import { FormEvent } from "react";
const AgendamentoPage = async ({
  searchParams,
}: {
  searchParams: { plano?: string };
}) => {
  const { plano } = await searchParams;
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    "use server";
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div className="w-full min-h-[calc(100dvh-104px)] flex justify-center items-center bg-muted">
      <AgendamentoForm submit={submit} plano={plano} horarios={horarios} />
    </div>
  );
};

export default AgendamentoPage;
