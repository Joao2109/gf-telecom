import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/user/user-slice";
import { Alert } from "./alert";
import { convertForm } from "@/lib/utils";
export const SignIn = () => {
  const [alert, setAlert] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <>
      <form
        className="w-full max-w-[400px] flex flex-col gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const cpf = formData.get("cpf")?.toString().trim();
          const senha = formData.get("senha")?.toString();
          if (!cpf || !senha) {
            setAlert("Preencha todos os campos.");
            setOpen(true);
            return;
          }
          const res = await signIn("credentials", {
            redirect: false,
            ...convertForm(e.currentTarget),
          });
          if (res?.error || res == undefined) {
            setError("Ocorreu um erro, por favor, verifique suas credenciais.");
            setOpen(true);
          } else {
            fetch("/api/auth/get-user", { method: "GET" }).then(async (r) => {
              const user = await r.json();
              dispatch(login(user));
              redirect("/");
            });
          }
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
      {open && (
        <Alert
          message={alert || error!}
          type={alert ? "alert" : error ? "error" : "error"}
          setOpen={setOpen}
        />
      )}
    </>
  );
};
