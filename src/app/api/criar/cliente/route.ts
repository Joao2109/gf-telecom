import { prisma } from "@root/prisma";
export const POST = async (data: Request) => {
  let body = await data.json();
  body = {
    ...body,
    tel: "+55" + body.tel.replace(/\D/g, ""),
    senha: "123456",
    vencimento: new Date().getDate(),
  };
  prisma.cliente.create({
    data: body,
  });
  return new Response(JSON.stringify(body), { status: 200 });
};
