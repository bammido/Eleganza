"use client"

import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import LoadingProduto from "./Loading";
import limitaTamanhoString from "assets/app/helpers/functions/limitaTamanhoString";
import { useCartContext } from "assets/app/context/cart";

type Discount = {
    valuePercentage: number,
}

type Image = {
    src: string,
    alt: string
}

interface IProdutosProps {
    id: number;
    image: Image;
    name: string;
    value: number;
    discount?: Discount;
    loading?: boolean;
}

export default function Produto({
    id,
    image,
    name,
    value,
    discount,
    loading

}: IProdutosProps) {

    const {products, addToCart, increaseProductAmount, decreaseProductAmount} = useCartContext()

    const valorEmBRL = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency"
    }).format(value)

    const productIsIn = products.find(prod => prod.id === id)

    return <>
        <div className="flex flex-col bg-gray-200 w-44 h-80 pb-2 justify-between rounded animate-apear drop-shadow-lg border-2 border-black snap-center">
            {!loading && <>
                <Image {...image} className="w-44 h-52" alt={image.alt} width={176} height={250} />
                <Link href={`/produtos/${id}`}>
                    <span className={`font-light text-sm px-4`}>{limitaTamanhoString({string: name, tamanho: 15})}</span>
                </Link>
                <div className="flex justify-between w-full px-4 items-center gap-4">
                    <div className={`flex gap-1 items-center ${discount? "text-amber-600" : ""} text-lg`}>
                        <span className="font-bold text-sm">{valorEmBRL}</span>
                        {discount && <div className="border-2 rounded border-amber-600 p-1 self-center max-h-8 w-10 flex justify-center items-center">
                            <span className="text-amber-600 text-xs">- {discount.valuePercentage}%</span>
                        </div>}
                    </div>
                    {!productIsIn && <div 
                        className="border-2 border-black rounded-full flex items-center p-2 cursor-pointer hover:scale-110 transition text-sm"
                        onClick={() => addToCart({
                            id,
                            name,
                            value,
                            amount: 1,
                            image
                        })}>
                        <FaCartPlus />
                    </div>}
                    {productIsIn && <div className="flex gap-2 font-bold">
                        <span className="cursor-pointer" onClick={() => decreaseProductAmount(id)}>-</span>    
                        <span>{productIsIn.amount}</span>    
                        <span className="cursor-pointer" onClick={() => increaseProductAmount(id)}>+</span>    
                    </div>}
                </div>
            </>}
        </div>
        {loading && <LoadingProduto />}
    </>
}