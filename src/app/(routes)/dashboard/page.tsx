"use client";
import { useAppSelector } from "@/lib/hooks";
import Cliente from "./_components/cliente";
import Funcionario from "./_components/funcionario";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const DashboardPage = () => {
  const { currentUser: user } = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth/sign-in");
    }
  });
  return (
    <main className="w-full min-h-[calc(100dvh-650px)]">
      {user?.plano ? <Cliente user={user} /> : <Funcionario user={user} />}
    </main>
  );
};

export default DashboardPage;
