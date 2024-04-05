import type { Metadata } from "next";
import { Open_Sans, Lato, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

// const font = Lato({ subsets: ["latin"], weight: ["100" , "300" , "400" , "700" , "900"] });

const font = Schibsted_Grotesk({ subsets: ["latin"], weight: [ "400" , "700" , "900"] });

// const font = Open_Sans({ subsets: ["latin"], weight: ["300" , "400" , "700"] });

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
      <body className={font.className}>
        <Header />
        <main className="py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
