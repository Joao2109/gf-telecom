import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "Endereço de Email",
        },
        password: {
          type: "password",
          label: "Senha",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        let user = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (compareSync(credentials.password as string, "")) {
          user = { id: "1", name: "Admin", email: "admin" };
        }
        if (!user) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
});
