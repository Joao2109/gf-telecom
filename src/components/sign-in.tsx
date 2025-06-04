import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const SignIn = async () => {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <form
      className="w-full max-w-[400px] flex flex-col gap-2"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData)
          .then(() => redirect("/"))
          .catch((err) => console.error(err));
      }}
    >
      <label className="w-full flex justify-between items-center pl-1 border border-foreground/30 rounded-md">
        CPF
        <input
          className="flex-1 p-1 pl-2 outline-none"
          name="cpf"
          type="text"
        />
      </label>
      <label className="w-full flex justify-between items-center pl-1 border border-foreground/30 rounded-md">
        Senha
        <input
          className="flex-1 p-1 pl-2 outline-none"
          name="senha"
          type="password"
        />
      </label>
      <Button variant={"outline"}>Sign In</Button>
    </form>
  );
};
