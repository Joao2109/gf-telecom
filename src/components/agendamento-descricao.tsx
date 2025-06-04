"use client";
import { useEffect, useState } from "react";
const AgendamentoDescricao = ({ plano }: { plano: string }) => {
  const [descricao, setDescricao] = useState("");
  useEffect(() => {
    if (plano !== undefined) {
      setDescricao(`Instalação do plano de ${plano}Mb`);
    }
  }, [plano]);
  return (
    <label htmlFor="descricao" className="flex justify-center gap-2">
      Descrição:
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
