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
      <label htmlFor="telefone" className="flex justify-center gap-2">
        Telefone:
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="date" className="flex justify-center gap-2">
        Data:
        <input
          type="date"
          id="date"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="time" className="flex justify-center gap-2">
        Hora:
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
