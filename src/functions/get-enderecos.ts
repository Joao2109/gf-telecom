import { prisma } from "@root/prisma";
export const getEnderecos = async (userId: string) => {
  if (!userId) {
    return [];
  }
  const enderecos = await prisma.endereco.findMany({
    where: { clienteId: userId },
  });
  return enderecos;
};
