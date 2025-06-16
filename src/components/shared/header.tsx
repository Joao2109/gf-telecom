"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const user = currentUser;
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  return (
    <header className="w-full h-auto bg-accent px-0 sm:px-4 py-4">
      <div className="flex items-center justify-center sm:justify-between mb-2">
        <h2 className="text-white text-2xl font-semibold hidden sm:flex">
          GF Telecom
        </h2>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <p className="text-white">{user?.nome}</p>
              <Button asChild>
                <Link href={`/dashboard`}>
                  {user?.plano ? "Central do assinante" : "Dashboard"}
                </Link>
              </Button>
              <Button
                variant={"ghost"}
                className="text-white"
                onClick={() => {
                  signOut();
                  dispatch({ type: "logout" });
                }}
              >
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant={"ghost"} className="text-white">
                <Link href={`/auth/sign-in`}>Login</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul className="flex flex-col sm:flex-row list-none gap-1">
          <li>
            <Button
              size="sm"
              asChild
              className={
                pathname === "/"
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname === "/" ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Home
                </p>
              ) : (
                <Link
                  href="/"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Home
                </Link>
              )}
            </Button>
          </li>
          <li>
            <Button
              size="sm"
              asChild
              className={
                pathname.includes("/planos")
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname.includes("/planos") ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Planos
                </p>
              ) : (
                <Link
                  href="/planos"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Planos
                </Link>
              )}
            </Button>
          </li>
          <li>
            <Button
              size="sm"
              asChild
              className={
                pathname.includes("/agendamento")
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname.includes("/agendamento") ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Agendamento
                </p>
              ) : (
                <Link
                  href="/agendamento"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Agendamento
                </Link>
              )}
            </Button>
          </li>
          <li>
            <Button
              size="sm"
              asChild
              className={
                pathname.includes("/suporte")
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname.includes("/suporte") ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Suporte Remoto
                </p>
              ) : (
                <Link
                  href="/suporte"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Suporte Remoto
                </Link>
              )}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
