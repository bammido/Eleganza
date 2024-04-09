import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const font = Schibsted_Grotesk({ subsets: ["latin"], weight: [ "400" , "700" , "900"] });

export const metadata: Metadata = {
  title: "Estudo Next 14 + Tailwind",
  description: "Estudo Next + Tailwind + Testes + Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} flex flex-col justify-between min-h-screen`}>
        <Header />
        <main className="pt-44 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
