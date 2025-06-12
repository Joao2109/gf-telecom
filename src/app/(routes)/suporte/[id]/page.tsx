"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import ChatSuporte from "@/components/suporte/chat-suporte";
import { useEffect } from "react";
import { useParams } from "next/navigation";
// import { redirect } from "next/navigation";
const SuportePage = () => {
  const { id }: { id: string } = useParams();
  console.log(id);
  const { currentUser: user } = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth/sign-in");
    }
  }, [user]);
  return (
    <main className="w-full min-h-[calc(100dvh-104px)]">
      <ChatSuporte
        clientId={Math.random().toString(36).substring(2, 9)}
        roomId={id}
      />
    </main>
  );
};

export default SuportePage;
