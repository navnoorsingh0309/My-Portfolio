import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { WavyBackground } from "@/components/wavy-background";
import { NavBar } from "@/components/navbar";
import { Spotlight } from "@/components/spotlight";

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Spotlight
            className="absolute top-40 left-0 md:left-60 md:-top-20 hidden sm:flex"
            fill="white"
          />
          <WavyBackground className="mx-auto w-full h-full">
            {children}
          </WavyBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
