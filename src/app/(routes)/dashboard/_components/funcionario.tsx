import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { convertForm } from "@/lib/utils";
import { Plano } from "@root/prisma/generated";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
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
  const submitClient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("api/criar/cliente", {
      method: "POST",
      body: JSON.stringify(convertForm(e.currentTarget)),
    });
  };
  const submitWorker = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("api/criar/funcionario", {
      method: "POST",
      body: JSON.stringify(convertForm(e.currentTarget)),
    });
  };
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
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[600px]">
          <h2 className="text-2xl text-center font-bold">
            Adicionar novo cliente
          </h2>
          <form className="w-full flex flex-col gap-2" onSubmit={submitClient}>
            <label className="w-full flex gap-2" htmlFor="nome">
              Nome:{" "}
              <input className="flex-1" type="text" name="nome" id="nome" />
            </label>
            <label className="w-full flex gap-2" htmlFor="cpf">
              CPF: <input className="flex-1" type="text" name="cpf" id="cpf" />
            </label>
            <label className="w-full flex gap-2 items-center" htmlFor="tel">
              Telefone:
              <input
                className="flex-1"
                type="tel"
                name="tel"
                id="tel"
                pattern="^\d{2} \d{5}-\d{4}$"
                maxLength={13}
              />
            </label>
            <label className="w-full flex gap-2" htmlFor="email">
              Email:{" "}
              <input className="flex-1" type="text" name="email" id="email" />
            </label>
            <label className="w-full flex gap-2" htmlFor="plano">
              Plano:{" "}
              <select className="flex-1" name="plano" id="plano">
                <option value={Plano.MB100}>100MB</option>
                <option value={Plano.MB300}>300MB</option>
                <option value={Plano.MB500}>500MB</option>
              </select>
            </label>
            <Button type="submit">Adicionar</Button>
          </form>
        </div>
        <div className="w-full max-w-[600px]">
          <h2 className="text-2xl text-center font-bold">
            Adicionar novo funcionario
          </h2>
          <form className="w-full flex flex-col gap-2" onSubmit={submitWorker}>
            <label className="w-full flex gap-2" htmlFor="nome">
              Nome:{" "}
              <input className="flex-1" type="text" name="nome" id="nome" />
            </label>
            <label className="w-full flex gap-2" htmlFor="cpf">
              CPF: <input className="flex-1" type="text" name="cpf" id="cpf" />
            </label>
            <label className="w-full flex gap-2 items-center" htmlFor="tel">
              Telefone:
              <input
                className="flex-1"
                type="tel"
                name="tel"
                id="tel"
                pattern="^\d{2} \d{5}-\d{4}$"
                maxLength={13}
              />
            </label>
            <label className="w-full flex gap-2" htmlFor="email">
              Email:{" "}
              <input className="flex-1" type="text" name="email" id="email" />
            </label>
            <Button type="submit">Adicionar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Funcionario;
