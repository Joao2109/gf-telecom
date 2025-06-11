import { auth } from "@/auth";
export async function GET() {
  const session = await auth();
  if (!session?.user) return new Response(JSON.stringify(null));
  return new Response(JSON.stringify(session?.user));
}
