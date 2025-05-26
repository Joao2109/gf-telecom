import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
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
        if (!user) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
});
