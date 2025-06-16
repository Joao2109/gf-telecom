import { prisma } from "@root/prisma";
import { Funcao } from "@root/prisma/generated";
export const POST = async (data: Request) => {
  let body = await data.json();
  body = {
    ...body,
    tel: "+55" + body.tel.replace(/\D/g, ""),
    senha: "123456",
    funcao: Funcao.GERENTE,
    working: true,
  };
  prisma.funcionario
    .create({
      data: body,
    })
    .catch((err) => {
      console.log(err);
    });
  return new Response(JSON.stringify(body), { status: 200 });
};
