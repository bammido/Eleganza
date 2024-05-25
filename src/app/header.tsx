'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SideMenu from "./sideMenu";
import Cart from "./cart/cart";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import useHighContrastMode from "./hooks/useHighContrastMode";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const pathname = usePathname()

  const isHighContrast  = useHighContrastMode()

    return <div className="fixed px-8 py-4 bg-gray-200 w-full z-50">
      <SideMenu show={showSideMenu} close={() => setShowSideMenu(false)} />
      <Cart show={showCart} close={() => setShowCart(false)} />

      <div className="flex justify-end max-md:justify-between">
        <div className="cursor-pointer text-lg hidden max-md:contents" onClick={() => setShowSideMenu(true)}><HiOutlineMenu /></div>
        <div className="cursor-pointer text-lg" onClick={() => setShowCart(true)}><FaShoppingCart /></div>
      </div>
      
      <div className="flex justify-center">
          <Link href="/">
            <Image 
              width={150} 
              height={150} 
              className="cursor-pointer" 
              src={`${isHighContrast ? "/logo-branco.png" : "/logo-preto.png"}`} 
              alt="Eleganza logo" />
          </Link>
      </div>
      <div className="flex gap-8 max-md:hidden">

        <Link className={`transition ${pathname === '/' ? 'opacity-100 text-black font-bold border-black' : 'opacity-75 text-gray-600'} hover:opacity-100`} href="/">
          Home
        </Link>

        <Link
        className={`transition ${pathname === '/produtos' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} hover:opacity-100`}
        href="/produtos"
        >
          Produtos
        </Link>
        
        <Link
        className={`transition ${pathname === '/about' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} hover:opacity-100`}
        href="/about"
        >
          sobre
        </Link>
          
      </div>
  </div>
}