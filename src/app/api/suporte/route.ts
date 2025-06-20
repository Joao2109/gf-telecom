import { auth } from "@/auth";
import { prisma } from "@root/prisma";
export const GET = async () => {
  const session = await auth();
  const user = session?.user;
  const salas = await prisma.sala.findMany({
    where: {
      OR: [{ clienteId: user?.id }, { funcionarioId: user?.id }],
    },
  });
  return new Response(JSON.stringify(salas), { status: 200 });
};
