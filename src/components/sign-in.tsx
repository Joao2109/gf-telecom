"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/user/user-slice";
export const SignIn = () => {
  const [alert, setAlert] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
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
            return;
          }
          const res = await signIn("credentials", {
            redirect: false,
            ...Object.fromEntries(new FormData(e.currentTarget)),
          });
          if (res?.error || res == undefined) {
            setError("Ocorreu um erro, por favor, verifique suas credenciais.");
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
      {(alert || error) && (
        <div
          className="w-screen h-screen fixed bg-black/50 flex justify-center items-center"
          onClick={() => {
            setAlert(null);
            setError(undefined);
          }}
        >
          <Alert className="w-full max-w-[700px] p-6">
            <AlertTitle className="flex justify-center pb-2">
              <AlertTriangle
                className={`${
                  alert ? "stroke-yellow-500" : error ? "stroke-red-500" : ""
                }`}
              />
            </AlertTitle>
            <AlertDescription className="flex justify-center pt-4 border-t-2">
              <h2 className="text-2xl text-center">{alert || error}</h2>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
};
