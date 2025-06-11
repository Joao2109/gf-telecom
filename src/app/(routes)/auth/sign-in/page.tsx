"use client";
import { useRouter } from "next/navigation";
import { SignIn } from "@/components/sign-in";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
const SignInPage = () => {
  const router = useRouter();
  const { currentUser: user } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user) router.push("/");
  }, []);
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
