"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full h-auto bg-accent px-0 sm:px-4 py-4">
      <div className="flex items-center mb-2">
        <div className="w-20 h-8 relative">
          <Image src="/public/images/logo.png" alt="Logo" fill />
        </div>
        <h2 className="text-white text-2xl font-semibold">GF Telecom</h2>
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
                pathname === "/remote-support"
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname === "/remote-support" ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Suporte Remoto
                </p>
              ) : (
                <Link
                  href="/remote-support"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Suporte Remoto
                </Link>
              )}
            </Button>
          </li>
          <li>
            <Button
              size="sm"
              asChild
              className={
                pathname === "/appointment"
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname === "/appointment" ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Agendamento
                </p>
              ) : (
                <Link
                  href="/appointment"
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
                pathname === "/about-us"
                  ? `bg-primary`
                  : `bg-black/30 sm:bg-transparent hover:bg-primary`
              }
            >
              {pathname === "/about-us" ? (
                <p className="w-full sm:w-auto text-white rounded-none sm:rounded-sm">
                  Sobre Nós
                </p>
              ) : (
                <Link
                  href="/about-us"
                  className="w-full sm:w-auto text-white rounded-none sm:rounded-sm"
                >
                  Sobre Nós
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
