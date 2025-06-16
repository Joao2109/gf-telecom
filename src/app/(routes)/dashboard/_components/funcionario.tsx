import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Funcionario = ({ user }: { user: any }) => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [suportes, setSuportes] = useState([]);
  useEffect(() => {
    if (!user) return;
    fetch("/api/agendamento/buscar", {
      method: "POST",
      body: JSON.stringify({ id: user.id, type: "funcionario" }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setAgendamentos(data);
    });
    fetch("/api/suporte", {
      method: "GET",
    }).then(async (res) => {
      const data = await res.json();
      setSuportes(data);
    });
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold">Dashboard</h1>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="w-full max-w-[320px]">
          <h2 className="text-2xl text-center font-bold">Agendamentos</h2>
          <div className="w-full">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {agendamentos.map((agendamento: any) => (
              <Dialog key={agendamento.id}>
                <DialogTrigger className="w-full block text-center hover:bg-zinc-500/10 cursor-pointer">
                  {agendamento.cliente.nome}
                </DialogTrigger>
                <DialogContent>
                  <p className="font-bold text-xl text-center">
                    {agendamento.cliente.nome}
                  </p>
                  <p>{agendamento.endereco}</p>
                  <p>{agendamento.descricao}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[320px]">
          <h2 className="text-2xl text-center font-bold">Suportes</h2>
          <div className="w-full">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {suportes.map((suporte: any) => (
              <Link
                key={suporte.id}
                href={`/suporte/${suporte.id}`}
                className="block text-center"
              >
                Sala {suporte.id}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funcionario;
