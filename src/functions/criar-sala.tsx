"use server";
import { prisma } from "@root/prisma";
import { StatusSala } from "@root/prisma/generated";
import { User } from "next-auth";
export const criarSala = async (user: User) => {
  console.log(user);
  const funcionario = await prisma.funcionario.findMany({
    select: {
      cpf: true,
      nome: true,
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
  prisma.sala
    .create({
      data: {
        nome: "New Sala",
        cliente: {
          connect: {
            cpf: user?.id,
          },
        },
        funcionario: {
          connect: {
            cpf: funcionario[0].cpf,
          },
        },
        status: StatusSala.ABERTA,
      },
    })
    .then(() => {})
    .catch((err) => {
      console.error(err);
    });
};
