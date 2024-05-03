"use client"

import Image from "next/image";
import { IProductCart, useCartContext } from "../context/cart";
import limitaTamanhoString from "../helpers/functions/limitaTamanhoString";

export default function ProductCart({image, name, amount, id, value} : IProductCart) {
    const {decreaseProductAmount, increaseProductAmount, removeFromCart} = useCartContext()

    const totalValueInBRL = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency"
    }).format(value * amount)

    return <div className="flex flex-col gap-2 border-2 border-black rounded">
        <span className="self-end font-bold cursor-pointer pr-2" onClick={() => removeFromCart(id)}>X</span>
        <Image {...image} className="w-44 h-52" alt={image.alt} width={176} height={250} />
        <div className="flex flex-col gap-4 justify-between p-2">
            <h2 className="uppercase font-bold border-b-2 border-black font-serif" title={name}>{limitaTamanhoString({string: name, tamanho: 12})}</h2>
            
            <div className="flex justify-between">
                <div className="flex gap-2 font-bold">
                    <span className="cursor-pointer" onClick={() => decreaseProductAmount(id)}>-</span>    
                    <span>{amount}</span>    
                    <span className="cursor-pointer" onClick={() => increaseProductAmount(id)}>+</span>    
                </div>
                <h2>{totalValueInBRL}</h2>
            </div>
        </div>
    </div>
}