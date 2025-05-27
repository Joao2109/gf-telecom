import { redirect } from "next/navigation";
const Suporte = () => {
  const roomId = Math.random().toString(36).substring(2, 9);
  redirect(`/suporte/${roomId}`);
  return null;
};

export default Suporte;
