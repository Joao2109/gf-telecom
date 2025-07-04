"use client";
import { useEffect, useState } from "react";
const AgendamentoDescricao = ({ plano }: { plano: string | null }) => {
  const [descricao, setDescricao] = useState("");
  useEffect(() => {
    if (plano) {
      setDescricao(`Instalação do plano de ${plano}MB`);
    }
  }, [plano]);
  return (
    <label htmlFor="descricao" className="flex justify-center gap-2">
      Descrição: <span className="text-red-500">*</span>
      <textarea
        name="descricao"
        id="descricao"
        value={descricao}
        onChange={(e) => {
          setDescricao(e.target.value);
        }}
        className="flex-1 aspect-video resize-none bg-background outline-none inset-shadow-xs px-2 py-1 inset-shadow-black"
      ></textarea>
    </label>
  );
};

export default AgendamentoDescricao;
