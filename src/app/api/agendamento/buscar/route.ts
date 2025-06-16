import { prisma } from "@root/prisma";
export const POST = async (data: Request) => {
  const body = await data.json();
  if (!body.id) return new Response(JSON.stringify([]), { status: 200 });
  let agendamentos;
  switch (body.type) {
    case "funcionario":
      agendamentos = await prisma.agendamento.findMany({
        include: { cliente: { select: { nome: true } } },
        where: { funcionarioCpf: body.id },
      });
      break;
    case "cliente":
      agendamentos = await prisma.agendamento.findMany({
        where: { clienteCpf: body.id },
      });
      break;
  }
  return new Response(JSON.stringify(agendamentos), { status: 200 });
};
