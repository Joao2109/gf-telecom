import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Salas from "@/components/salas";
import { Button } from "@/components/ui/button";
import { prisma } from "@root/prisma";
import { criarSala } from "@/functions/criar-sala";
const Suporte = async () => {
  const session = await auth();
  if (!session) redirect("/auth/sign-in");
  const user = session.user;
  if (!user) redirect("/auth/sign-in");
  const salas = await prisma.sala.findMany({
    where: {
      OR: [{ clienteId: user?.id }, { funcionarioId: user?.id }],
    },
  });
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
        {user.plano && (
          <form
            action={async () => {
              "use server";
              criarSala(user);
            }}
          >
            <Button className="w-full rounded-none bg-zinc-500/50 hover:bg-zinc-500/60 text-foreground">
              Novo Chamado
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};
export default Suporte;
