import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import "./fonts.css";
import { cn } from "@/lib/utils";
import "./styles.css";
import { Toaster } from "sonner";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navnoor's Portfolio",
  description: "Just little bit details about me :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "overflow-x-hidden")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
