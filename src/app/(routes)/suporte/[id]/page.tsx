"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import ChatSuporte from "@/components/suporte/chat-suporte";
import { useEffect } from "react";
import { useParams } from "next/navigation";
// import { redirect } from "next/navigation";
const SuportePage = () => {
  const { id }: { id: string } = useParams();
  const { currentUser: user } = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth/sign-in");
    }
  }, [user]);

  return (
    <>
      {/* @ts-expect-error user-id-does-in-fact-exist */}
      {user && user.id && (
        <main className="w-full min-h-[calc(100dvh-104px)]">
          {/* @ts-expect-error user-id-does-in-fact-exist */}
          <ChatSuporte clientId={user.id} roomId={id} />
        </main>
      )}
    </>
  );
};

export default SuportePage;
