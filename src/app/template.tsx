"use client"

import { CartContextProvider } from "./context/cart";
import Footer from "./footer";
import Header from "./header";

export default function RootTemplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <CartContextProvider>
      <Header />
      <main className="pt-44 pb-16">
        {children}
      </main>
      <Footer />
    </CartContextProvider>
}