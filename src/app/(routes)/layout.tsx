import Header from "@/components/shared/header";
import "../globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeToggler } from "./theme-toggler";
import Footer from "@/components/shared/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ThemeToggler />
        </ThemeProvider>
      </body>
    </html>
  );
}
