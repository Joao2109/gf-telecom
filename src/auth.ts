import { prisma } from "@root/prisma";
import NextAuth, { type DefaultSession, CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { compareSync } from "bcrypt-ts";
declare module "next-auth" {
  interface Session {
    user: {
      cpf: string;
      senha: string;
      nome: string;
      tel: string;
      email: string;
      plano: string | null;
      vencimento: string | null;
      funcao: string | null;
      salas: string[] | null;
      agendamentos: string[] | null;
    } & DefaultSession["user"];
  }
}
interface JWT {
  cpf: string;
  senha: string;
  nome: string;
  tel: string;
  email: string;
  plano: string | null;
  vencimento: string | null;
  working: boolean | null;
  funcao: string | null;
  salas: string[] | null;
  agendamentos: string[] | null;
}
class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        cpf: {
          type: "text",
          label: "CPF",
          placeholder: "Insira seu CPF",
        },
        senha: {
          type: "password",
          label: "Senha",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        let user = null;
        if (!credentials) {
          throw new InvalidLoginError();
        }
        user = await prisma.cliente.findUnique({
          where: {
            cpf: credentials.cpf as string,
          },
        });
        if (!user) {
          user = await prisma.funcionario.findUnique({
            where: {
              cpf: credentials.cpf as string,
            },
          });
        }
        if (!user) {
          throw new Error("Usuario nao encontrado.");
        }
        if (
          /*compareSync(*/ (credentials.senha as string,
          user.senha as string) /*)*/
        ) {
          return user;
        } else {
          throw new Error("Senha incorreta.");
        }
      },
    }),
  ],
  callbacks: {
    // @ts-expect-error type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.cpf = user.cpf;
        token.nome = user.nome;
        token.tel = user.tel;
        token.email = user.email;
        token.plano = user.plano;
        token.vencimento = user.vencimento;
        token.working = user.working;
        token.funcao = user.funcao;
        token.salas = user.salas;
        token.agendamentos = user.agendamentos;
      }
      return token;
    },
    // @ts-expect-error type
    async session({ session, token }: { session: DefaultSession; token: JWT }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.cpf,
          // @ts-expect-error type
          nome: token.nome,
          tel: token.tel,
          email: token.email,
          plano: token.plano,
          vencimento: token.vencimento,
          working: token.working,
          funcao: token.funcao,
          salas: token.salas,
          agendamentos: token.agendamentos,
        };
      }
      return session;
    },
  },
});
