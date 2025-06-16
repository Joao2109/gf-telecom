import { prisma } from "@root/prisma";
export const POST = async (data: Request) => {
  const body = await data.json();
  console.log(body);
  if (!body.id) return new Response(JSON.stringify([]), { status: 200 });
  const agendamentos = await prisma.agendamento.findMany({
    where: { clienteCpf: body.id },
  });
  return new Response(JSON.stringify(agendamentos), { status: 200 });
};
