import { useAppDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/user/user-slice";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const getUser = async () => {
    const res = await fetch("/api/auth/get-user", { method: "GET" });
    const user = await res.json();
    dispatch(login(user));
  };
  getUser();
  return <>{children}</>;
};
