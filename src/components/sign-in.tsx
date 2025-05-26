import { signIn } from "@/auth";
import { Button } from "./ui/button";
export function SignIn() {
  return (
    <form
      className="w-full max-w-[400px] flex flex-col gap-2"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <label className="w-full flex justify-between items-center pl-1 border border-foreground/30 rounded-md">
        Email
        <input
          className="flex-1 p-1 pl-2 outline-none"
          name="email"
          type="email"
        />
      </label>
      <label className="w-full flex justify-between items-center pl-1 border border-foreground/30 rounded-md">
        Senha
        <input
          className="flex-1 p-1 pl-2 outline-none"
          name="password"
          type="password"
        />
      </label>
      <Button variant={"outline"}>Sign In</Button>
    </form>
  );
}
