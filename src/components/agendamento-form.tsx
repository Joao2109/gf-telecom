import { FormEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import AgendamentoDescricao from "./agendamento-descricao";
import { useSearchParams } from "next/navigation";
import { convertForm, getHorarios } from "@/lib/utils";
import { Alert } from "./alert";
const AgendamentoForm = ({
  user,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}) => {
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano");
  const [cpf, setCpf] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [endereco, setEndereco] = useState<string>(
    "R. 1º de Abril, 22 - São Gonçalo, Salvador - BA"
  );
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
  const [telefone, setTelefone] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [horarios, setHorarios] = useState<number[]>([]);
  const [horario, setHorario] = useState<string>("");
  const [alert, setAlert] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (user) {
      setNome(user.nome ?? "");
      setCpf(user.id ?? "");
      setEndereco(user.endereco ?? "");
      setTelefone(user.tel ?? "");
      fetch("/api/enderecos", {
        method: "POST",
        body: JSON.stringify(user.id),
      }).then(async (res) => {
        const data = await res.json();
        setEnderecos(data);
      });
    }
  }, [user]);
  useEffect(() => {
    if (data) {
      let h;
      getHorarios(data).then(async (res) => {
        h = await res;
        setHorarios(h);
      });
    }
  }, [data]);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const descricao = convertForm(e.currentTarget).descricao;
    if (
      cpf === "" ||
      nome === "" ||
      endereco === "" ||
      telefone === "" ||
      data === "" ||
      horario === "" ||
      !descricao
    ) {
      setAlert("Preencha todos os campos.");
      setOpen(true);
      return null;
    }
    fetch("/api/agendamento/criar", {
      method: "POST",
      body: JSON.stringify({
        cpf,
        nome,
        endereco,
        telefone,
        data: new Date(data + " " + horario).toString(),
        descricao,
      }),
    }).then(async (res) => {
      const data = await res.json();
      setAlert(data.message);
      setOpen(true);
    });
  };
  return (
    <>
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
          CPF: <span className="text-red-500">*</span>
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
            <option value={"R. 1º de Abril, 22 - São Gonçalo, Salvador - BA"} />
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
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <label htmlFor="hora" className="flex justify-center gap-1">
          Hora: <span className="text-red-500">*</span>
          <select
            className="flex-1 bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
            disabled={data === "" ? true : false}
            onChange={(e) => setHorario(e.target.value)}
          >
            <option selected disabled>
              Selecione uma hora
            </option>
            {horarios.length > 0 &&
              horarios.map((hora) => (
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
      {open && <Alert message={alert ?? ""} type="alert" setOpen={setOpen} />}
    </>
  );
};

export default AgendamentoForm;
