'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false)

    const pathname = usePathname()
    return <div className="fixed px-8 py-4 bg-gray-200 w-full z-50">
      <div className="cursor-pointer hidden max-md:contents" onClick={() => setShowSideMenu(prev => !prev)}>teste</div>
      <div className={`absolute left-0 top-0 h-screen ${showSideMenu? "w-screen": "w-0"} transition-[width] transition-700 bg-white z-50`}> 
        {showSideMenu && (
        <div className="p-8 flex flex-col relative gap-8">
          <span onClick={() => setShowSideMenu(prev => !prev)} className="self-end font-bold">X</span>
          <div className="flex flex-col gap-4" onClick={() => setShowSideMenu(prev => !prev)}>
            <Link href="/" className={`transition ${pathname === '/' ? 'opacity-100 text-black font-bold border-black' : 'opacity-75 text-gray-600'} hover:opacity-100`}>
              HOME
            </Link>

            <Link
            className={`transition ${pathname === '/produtos' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} hover:opacity-100`}
            href="/produtos">
              Produtos
            </Link>

            <Link
            className={`transition ${pathname === '/about' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} hover:opacity-100`}
            href="/about">
              sobre
            </Link>
          </div>
        </div>
        )}
      </div>
      <div className="flex justify-center">
          <Link href="/">
            <Image width={150} height={150} className="cursor-pointer" src="/logo-preto.png" alt="Eleganza logo" />
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