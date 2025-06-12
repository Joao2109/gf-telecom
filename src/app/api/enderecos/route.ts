import { prisma } from "@root/prisma";
export const POST = async (userId: string) => {
  if (!userId) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
  const enderecos = await prisma.endereco.findMany({
    where: { clienteId: userId },
  });
  return new Response(JSON.stringify(enderecos), { status: 200 });
};
