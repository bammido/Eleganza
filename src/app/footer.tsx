import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <div className="bg-black h-80 w-full flex flex-col justify-between">
        <div className="w-full flex justify-center">
            <Link href="/">
                <Image width={150} height={150} className="cursor-pointer" src="/logo-branco.png" alt="Eleganza logo" />
            </Link>
        </div>
        <div className="flex items-center gap-4 justify-center">
            <small className="text-white">Imagens de</small>
            <a href="https://www.pexels.com">
                <Image width={35} height={35} alt="logo pexels" src="https://images.pexels.com/lib/api/pexels-white.png" />
            </a>
        </div>
    </div>
}