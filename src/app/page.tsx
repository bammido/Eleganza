import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel/carousel";
import { Suspense } from "react";
import CarouselLoading from "./carousel/loading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-24">
        {/* <h1>Home</h1> */}
        <div className="flex flex-row-reverse items-center gap-16 flex-wrap max-md:flex-col justify-center animate-apear">
            <h1 className="text-3xl uppercase font-semibold max-w-96 drop-shadow-2xl max-md:text-center">Vista-se de <span className="text-amber-600 drop-shadow-md">estilo</span>, faça da moda sua assinatura! Descubra a <span className="text-amber-600 drop-shadow-md">elegância</span> em cada clique.</h1>
            <Image src={"/teste.png"}  width={300} height={300} alt="imagem home" />
        </div>

        <div className="flex items-center gap-16 justify-center max-w-full">
          <Suspense key={'carousel'} fallback={<CarouselLoading />}>
            <Carousel />
          </Suspense>
        </div>
    </main>
  );
}

// className="rounded-full border-gray-950 border-2 shadow-2xl"