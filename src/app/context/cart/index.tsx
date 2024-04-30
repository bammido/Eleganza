import { createContext, useContext, useState } from "react";

type Image = {
    src: string,
    alt: string
}

export interface IProductCart {
    id: number;
    image: Image;
    name: string;
    value: number;
    amount: number;
}

interface ICartContext {
    products: IProductCart[];
    addToCart: (product: IProductCart) => void;
    increaseProductAmount: (id: number) => void;
    decreaseProductAmount: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const cartContext = createContext<ICartContext | null>(null)

export function CartContextProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [products, setProducts] = useState<IProductCart[]>([])

    function addToCart(product: IProductCart) {
        const productIsAlreadyIn = products.find(prod => prod.id === product.id)
        !productIsAlreadyIn && setProducts(prev => [...prev, product])
    }

    function increaseProductAmount(id: number) {
        const newProducts = products.map(prod => prod.id === id? {...prod, amount: prod.amount + 1} : prod)
        setProducts(newProducts)
    }
   
    function decreaseProductAmount(id: number) {
        const newProducts = products.map(prod => prod.id === id? {...prod, amount: prod.amount - 1} : prod)
        setProducts(newProducts.filter(prod => prod.amount > 0))
    }

    function removeFromCart(id: number) {
        setProducts(prev => prev.filter(prod => prod.id !== id))
    }

    return <cartContext.Provider value={{products, addToCart, increaseProductAmount, decreaseProductAmount, removeFromCart}}>
        {children}
    </cartContext.Provider>
  }

export function useCartContext() {
    return useContext(cartContext) as ICartContext
}