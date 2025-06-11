"use server";
import { prisma } from "@root/prisma";
import { StatusSala } from "@root/prisma/generated";
import { User } from "next-auth";
export const criarSala = async (type: "padrão" | "emergencial", user: User) => {
  console.log(user);
  const horaAtual = new Date().getHours();
  const isHorarioComercial = horaAtual >= 8 && horaAtual <= 18;
  const funcionario = await prisma.funcionario.findMany({
    select: {
      cpf: true,
      nome: true,
      ...(type === "emergencial" || isHorarioComercial
        ? { working: true }
        : {}),
      _count: {
        select: {
          salas: {
            where: {
              status: StatusSala.ABERTA,
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
  if (funcionario.length === 0) {
    throw new Error("Nenhum funcionário disponível");
  }
  try {
    const sala = await prisma.sala.create({
      data: {
        nome: "New Sala",
        cliente: {
          connect: {
            cpf: user.id,
          },
        },
        funcionario: {
          connect: {
            cpf: funcionario[0].cpf,
          },
        },
        status: StatusSala.ABERTA,
      },
    });
    return sala;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
