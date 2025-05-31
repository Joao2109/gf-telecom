import { auth } from "@/auth";
import ChatSuporte from "@/components/suporte/chat-suporte";
// import { redirect } from "next/navigation";
const SuportePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await auth();
  if (!session?.user) {
    // redirect("/auth/sign-in");
  }
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
