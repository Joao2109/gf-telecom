import { prisma } from "@root/prisma";
//eslint-disable-next-line
export const POST = async (req: Request) => {
  const { userId } = await req.json();
  if (!userId) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
  const enderecos = await prisma.endereco.findMany({
    where: { clienteId: userId },
  });
  return new Response(JSON.stringify(enderecos), { status: 200 });
};
