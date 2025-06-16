import { prisma } from "@root/prisma";
import { Status } from "@root/prisma/generated";
export const POST = async (data: Request) => {
  const body = await data.json();
  const funcionario = await prisma.funcionario.findMany({
    select: {
      cpf: true,
      nome: true,
      _count: {
        select: {
          agendamentos: {
            where: {
              status: Status.AGENDADO,
              data: new Date(body.data).toISOString(),
            },
          },
        },
      },
    },
    orderBy: {
      salas: {
        _count: "asc",
      },
    },
    take: 1,
  });
  const agendamento = {
    data: new Date(body.data).toISOString(),
    descricao: body.descricao,
    clienteCpf: body.cpf === "" ? "01234567890" : body.cpf,
    status: Status.AGENDADO,
    endereco: body.endereco,
    funcionarioCpf: funcionario[0].cpf,
  };
  prisma.agendamento
    .create({
      data: agendamento,
    })
    .catch((err) => {
      console.log(err);
      return new Response(
        JSON.stringify({ message: "Erro ao criar agendamento" }),
        { status: 500 }
      );
    });
  return new Response(
    JSON.stringify({ message: "Agendamento criado com sucesso" }),
    {
      status: 200,
    }
  );
};
