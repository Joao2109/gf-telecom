"use client";
import AgendamentoForm from "@/components/agendamento-form";
import { FormEvent } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
const AgendamentoPage = () => {
  const { currentUser: user } = useAppSelector((state) => state.user);
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano");
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div className="w-full min-h-[calc(100dvh-104px)] flex justify-center items-center bg-muted">
      <Suspense>
        <AgendamentoForm
          submit={submit}
          user={user}
          plano={plano}
          horarios={horarios}
        />
      </Suspense>
    </div>
  );
};

export default AgendamentoPage;
