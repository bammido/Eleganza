'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    return <div className="fixed px-8 py-4 bg-gray-200 w-full z-50">
      <div className="flex justify-center">
          <Link href="/">
            <Image width={150} height={150} className="cursor-pointer" src="/logo-preto.png" alt="Eleganza logo" />
          </Link>
      </div>
      <div className="flex gap-8">

        <Link className={`transition ${pathname === '/' ? 'opacity-100 text-black font-bold border-black' : 'opacity-75 text-gray-600'} hover:opacity-100`} href="/">
          Home
        </Link>

        <Link
        className={`transition ${pathname === '/produtos' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} hover:opacity-100`}
        href="/produtos"
        >
          Produtos
        </Link>
          
      </div>
  </div>
}