import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import AgendamentoDescricao from "./agendamento-descricao";
interface AgendamentoFormProps {
  submit: (e: FormEvent<HTMLFormElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  plano: string | null;
  horarios: number[];
}
const AgendamentoForm = ({
  submit,
  user,
  plano,
  horarios,
}: AgendamentoFormProps) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [enderecos, setEnderecos] = useState<
    {
      id: number;
      endereco: string;
      clienteId: string;
      cep: string;
      cidade: string;
      estado: string;
    }[]
  >([]);
  const [telefone, setTelefone] = useState("");
  useEffect(() => {
    console.log(user);
    if (user) {
      setNome(user.nome ?? "");
      setCpf(user.id ?? "");
      setEndereco(user.endereco ?? "");
      setTelefone(user.tel ?? "");
      fetch("/api/enderecos", { method: "POST", body: user.id }).then(
        async (res) => setEnderecos(await res.json())
      );
    }
  }, [user]);
  return (
    <form
      className="w-full max-w-[400px] flex flex-col p-4 gap-2"
      onSubmit={submit}
    >
      <label htmlFor="nome" className="flex justify-center gap-1">
        Nome: <span className="text-red-500">*</span>
        <input
          type="text"
          id="nome"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
          value={nome}
          onChange={(e) => (user?.nome ? null : setNome(e.target.value))}
          readOnly={user?.nome ? true : false}
        />
      </label>
      <label htmlFor="cpf" className="flex justify-center gap-1">
        CPF:
        <input
          type="text"
          id="cpf"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
          value={cpf}
          onChange={(e) => (user?.id ? null : setCpf(e.target.value))}
          readOnly={user?.id ? true : false}
        />
      </label>
      <label htmlFor="endereco" className="flex justify-center gap-1">
        Endereço: <span className="text-red-500">*</span>
        <input
          type="tel"
          id="endereco"
          list="enderecos-list"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <datalist id="enderecos-list">
          {enderecos.map((endereco) => (
            <option key={endereco.id} value={endereco.endereco} />
          ))}
        </datalist>
      </label>
      <label htmlFor="telefone" className="flex justify-center gap-1">
        Telefone: <span className="text-red-500">*</span>
        <input
          type="tel"
          id="telefone"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
          value={telefone}
          onChange={(e) => (user?.tel ? null : setTelefone(e.target.value))}
          readOnly={user?.tel ? true : false}
        />
      </label>
      <label htmlFor="data" className="flex justify-center gap-1">
        Data: <span className="text-red-500">*</span>
        <input
          type="date"
          id="dadatate"
          className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
        />
      </label>
      <label htmlFor="hora" className="flex justify-center gap-1">
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
