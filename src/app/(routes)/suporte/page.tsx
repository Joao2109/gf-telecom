"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import Salas from "@/components/salas";
import { Button } from "@/components/ui/button";
import { criarSala } from "@/functions/criar-sala";
import { StatusSala } from "@root/prisma/generated";
import { useEffect, useState } from "react";
interface Sala {
  nome: string;
  id: number;
  clienteId: string;
  funcionarioId: string;
  status: StatusSala;
}
const Suporte = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const user = currentUser;
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth/sign-in");
    }
  }, [user]);
  const [salas, setSalas] = useState<Sala[]>([]);
  useEffect(() => {
    fetch("/api/suporte", {
      method: "GET",
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        setSalas(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const render = () => {
    if (user) {
      return (
        <>
          <Salas salas={salas} />
        </>
      );
    } else {
      return (
        <p className="text-center">
          Você precisa estar logado para acessar o suporte
        </p>
      );
    }
  };
  return (
    <main className="w-full min-h-[calc(100dvh-108px)] flex justify-center items-center">
      <div className="w-full max-w-[400px] flex flex-col border border-accent">
        {render()}
        {user?.plano && (
          <Button
            onClick={() => {
              criarSala(user);
            }}
            className="w-full rounded-none bg-zinc-500/50 hover:bg-zinc-500/60 text-foreground"
          >
            Novo Chamado
          </Button>
        )}
      </div>
    </main>
  );
};
export default Suporte;
