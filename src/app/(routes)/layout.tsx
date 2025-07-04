"use client";
import Header from "@/components/shared/header";
import "../globals.css";
import { ThemeProvider } from "./theme-provider";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/shared/footer";
import { usePathname } from "next/navigation";
import StoreProvider from "./store-provider";
import { Layout } from "@/components/layout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GF Telecom</title>
      </head>
      <body>
        <StoreProvider>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Layout>
                {pathname.includes("auth") ? null : <Header />}
                {children}
                {pathname.includes("auth") ? null : <Footer />}
              </Layout>
            </ThemeProvider>
          </SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
