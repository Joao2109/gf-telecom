import { prisma } from "@root/prisma";
export const POST = async (req: Request) => {
  const { roomId } = await req.json();
  if (!roomId) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
  const mensagens = await prisma.mensagem.findMany({
    where: { salaId: Number(roomId) },
  });
  console.log(mensagens);
  return new Response(JSON.stringify(mensagens), { status: 200 });
};
