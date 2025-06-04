"use client";
import Header from "@/components/shared/header";
import "../globals.css";
import { ThemeProvider } from "./theme-provider";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/shared/footer";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {pathname.includes("auth") ? null : <Header />}
            {children}
            {pathname.includes("auth") ? null : <Footer />}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
