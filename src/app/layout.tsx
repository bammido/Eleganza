import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const font = Schibsted_Grotesk({ subsets: ["latin"], weight: [ "400" , "700" , "900"] });

export const metadata: Metadata = {
  title: "Eleganza",
  description: "Eleganza store"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} flex flex-col justify-between min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
