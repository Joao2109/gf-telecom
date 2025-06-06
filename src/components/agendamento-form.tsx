"use client";
import { FormEvent } from "react";
import { Button } from "./ui/button";
import AgendamentoDescricao from "./agendamento-descricao";
interface AgendamentoFormProps {
  submit: (e: FormEvent<HTMLFormElement>) => void;
  plano: string;
  horarios: number[];
}
const AgendamentoForm = ({ submit, plano, horarios }: AgendamentoFormProps) => {
  return (
    <form
      className="w-full max-w-[400px] flex flex-col p-4 gap-2"
      onSubmit={submit}
    >
      <label htmlFor="telefone" className="flex justify-center gap-1">
        Nome: <span className="text-red-500">*</span>
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="telefone" className="flex justify-center gap-1">
        CPF:
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="telefone" className="flex justify-center gap-1">
        Endereço: <span className="text-red-500">*</span>
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="telefone" className="flex justify-center gap-1">
        Telefone: <span className="text-red-500">*</span>
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="date" className="flex justify-center gap-1">
        Data: <span className="text-red-500">*</span>
        <input
          type="date"
          id="date"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="time" className="flex justify-center gap-1">
        Hora: <span className="text-red-500">*</span>
        <select className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black">
          <option disabled>Selecione uma hora</option>
          {horarios.map((hora) => (
            <option key={hora}>
              {hora < 10 ? `0${hora}:00` : `${hora}:00`}
            </option>
          ))}
        </select>
      </label>
      <AgendamentoDescricao plano={plano} />
      <Button type="submit" variant={"ghost"} className="mt-2">
        Agendar
      </Button>
    </form>
  );
};

export default AgendamentoForm;
