import { prisma } from "@root/prisma";
export const POST = async (data: Request) => {
  const body = await data.json();
  const horarios: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  if (!body.data) return new Response(JSON.stringify([]), { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = (arr: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return arr.reduce((counts: any, value: any) => {
      counts[value] = (counts[value] || 0) + 1;
      return counts;
    }, {});
  };
  const agendamentos = await prisma.agendamento.findMany({
    select: { data: true },
    where: {
      status: "AGENDADO",
      data: new Date(body.data).toISOString(),
    },
  });
  const r: number[] = [];
  for (const agendamento of agendamentos) {
    r.push(new Date(agendamento.data).getHours());
  }
  const result = count(r);
  for (const horario of horarios) {
    if (result[horario.toString()] >= 6) {
      horarios.splice(horarios.indexOf(horario));
    }
  }
  return new Response(JSON.stringify(horarios), { status: 200 });
};
