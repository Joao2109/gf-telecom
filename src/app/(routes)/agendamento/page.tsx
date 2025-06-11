"use client";
import AgendamentoForm from "@/components/agendamento-form";
import { FormEvent } from "react";
import { useAppSelector } from "@/lib/hooks";
const AgendamentoPage = ({
  searchParams,
}: {
  searchParams: { plano?: string };
}) => {
  const { currentUser: user } = useAppSelector((state) => state.user);
  const { plano } = searchParams;
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div className="w-full min-h-[calc(100dvh-104px)] flex justify-center items-center bg-muted">
      {user ? (
        <AgendamentoForm
          submit={submit}
          user={user}
          plano={plano}
          horarios={horarios}
        />
      ) : (
        <p>Faça login para agendar</p>
      )}
    </div>
  );
};

export default AgendamentoPage;
