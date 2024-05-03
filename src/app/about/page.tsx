"use client"

import { useEffect, useRef } from "react"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import Image from "next/image"

export default function About() {
    const bannerOne = useRef(null)
    const bannerTwo = useRef(null)
    const bannerThree = useRef(null)
    const bannerFour = useRef(null)

    function animatePageIn() {
        const tl = gsap.timeline()

        tl.set([bannerOne.current, bannerTwo.current, bannerThree.current, bannerFour.current], {
            yPercent: 0
        }).to([bannerOne.current, bannerTwo.current, bannerThree.current, bannerFour.current], {
            yPercent: 100,
            stagger: 0.2
        })
    }

    useGSAP(() => {
        animatePageIn()
    }, [])

    return <div className="grow">
        <div ref={bannerOne} className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4" id="banner-1" />
        <div ref={bannerTwo} className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4" id="banner-3" />
        <div ref={bannerThree} className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4" id="banner-3" />
        <div ref={bannerFour} className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4" id="banner-4" />
        <div className="px-28 max-md:px-14 flex flex-col gap-10">
            <h1 className="font-serif font-bold text-center">Bem-vindo à Eleganza - onde a elegância se encontra com a moda contemporânea de uma maneira única e sofisticada.</h1>
            <div className="flex gap-20">
                <Image src="/foto-sobre.jpg" alt="foto mulher elegante" className="max-md:hidden" width={300} height={250} />
                <div className="flex flex-col gap-8 justify-center max-lg:justify-start">
                    <p className="font-serif">Na Eleganza, nossa paixão pela moda transcende simplesmente vestir-se bem; é sobre expressar sua <span className="text-amber-600 drop-shadow-md">individualidade</span> com estilo e classe. Desde nossa fundação, nos comprometemos a fornecer roupas elegantes que não apenas exalam confiança, mas também capturam a essência da beleza atemporal.</p>
                    <p className="font-serif">Nossa jornada começou com uma visão simples: oferecer uma seleção diversificada de peças que incorporam tanto as tendências da moda quanto a sofisticação clássica. Ao longo dos anos, esse compromisso permaneceu inabalável, e hoje nos orgulhamos de ser uma referência para aqueles que buscam peças únicas e de qualidade excepcional.</p>
                </div>
            </div>
            <h1>Agradecemos por escolher a Eleganza como sua destinação para moda elegante e atemporal. Junte-se a nós enquanto continuamos a celebrar a arte da elegância em cada coleção e a definir novos padrões de estilo e sofisticação.</h1>
        </div>
    </div>
}