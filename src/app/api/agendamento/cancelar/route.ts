import { prisma } from "@root/prisma";
export const POST = async (data: Request) => {
  const body = await data.json();
  if (!body.id)
    return new Response(
      JSON.stringify({ message: "Agendamento não encontrado!" }),
      { status: 200 }
    );
  const agendamento = await prisma.agendamento.findUniqueOrThrow({
    where: { id: body.id },
  });
  await prisma.agendamento.delete({ where: { id: agendamento.id } });
  return new Response(
    JSON.stringify({ message: "Agendamento cancelado com sucesso!" }),
    { status: 200 }
  );
};
