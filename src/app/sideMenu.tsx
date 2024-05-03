"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoIosArrowForward } from "react-icons/io";

export default function SideMenu({show, close} : {show: boolean, close: () => void}) {
    const pathname = usePathname()

    return <div className={`absolute left-0 top-0 h-screen ${show? "w-screen": "w-0"} transition-[width] transition-700 bg-white z-50`}> 
    {show && (
    <div className="p-8 flex flex-col relative gap-8">
      <span onClick={close} className="cursor-pointer self-end font-bold">X</span>
      <div className="flex flex-col gap-4" onClick={close}>
        <Link href="/" className={`transition ${pathname === '/' ? 'opacity-100 text-black font-bold border-black' : 'opacity-75 text-gray-600'} flex justify-between hover:opacity-100`}>
          HOME
          <IoIosArrowForward />
        </Link>

        <Link
        className={`transition ${pathname === '/produtos' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} flex justify-between hover:opacity-100`}
        href="/produtos">
          PRODUTOS
          <IoIosArrowForward />
        </Link>

        <Link
        className={`transition ${pathname === '/about' ? 'opacity-100 text-black font-bold' : 'opacity-75 text-gray-600'} flex justify-between hover:opacity-100`}
        href="/about">
          SOBRE
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
    )}
  </div>
}