"use client";
import AgendamentoForm from "@/components/agendamento-form";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { Suspense, useEffect, useState } from "react";
const AgendamentoPage = () => {
  const { currentUser: user } = useAppSelector((state) => state.user);
  const [creating, setCreating] = useState(false);
  const [agendamentos, setagendamentos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    fetch("/api/agendamento/buscar", {
      method: "POST",
      body: JSON.stringify(user),
    }).then(async (res) => {
      const data = await res.json();
      setagendamentos(data);
    });
    setLoading(false);
  }, [user]);
  const cancelAppointment = (id: number) => {
    fetch("/api/agendamento/cancelar", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
  };
  return (
    <div className="w-full min-h-[calc(100dvh-104px)] flex flex-col justify-center items-center bg-muted">
      {creating ? (
        <Suspense>
          <AgendamentoForm user={user} />
        </Suspense>
      ) : (
        <div className="">
          <>
            <h1 className="text-2xl text-center font-bold mb-2">
              Meus agendamentos
            </h1>
            <div className=" bg-popover border-2 border-border">
              {loading ? (
                <p className="p-4">Carregando...</p>
              ) : (
                <>
                  {agendamentos.length > 0 ? (
                    <div className="odd:bg-zinc-500/10 even:bg-zinc-500/20">
                      {agendamentos.map((agendamento) => (
                        <div
                          className="flex gap-2 items-center p-2"
                          // @ts-expect-error this is fine
                          key={agendamento.id}
                        >
                          <p>
                            {new Intl.DateTimeFormat("pt-BR", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }).format(
                              // @ts-expect-error this is also fine
                              new Date(agendamento.data)
                            )}
                          </p>
                          <Button
                            // @ts-expect-error this is also fine
                            onClick={() => cancelAppointment(agendamento.id)}
                            variant={"destructive"}
                          >
                            Cancelar
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <h2 className="text-center p-6">
                      Você não possui agendamentos
                    </h2>
                  )}
                </>
              )}
            </div>
          </>
          <Button
            className="w-full rounded-none"
            onClick={() => setCreating(true)}
          >
            Novo agendamento
          </Button>
        </div>
      )}
    </div>
  );
};

export default AgendamentoPage;
