import { useCartContext } from "../context/cart"
import { IoCloseSharp } from "react-icons/io5";
import ProductCart from "./prouctCart";

export default function Cart({show, close} : {show: boolean, close: () => void}) {
    const {products} = useCartContext()

    const totalValueInCart = products.reduce((acummulator, nextProd) => acummulator + (nextProd.value * nextProd.amount), 0)

    const totalValueInBRL = new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "currency"
  }).format(totalValueInCart)

    return <div className={`absolute right-0 top-0 h-screen ${show? "w-screen": "w-0"} transition-[width] transition-700 bg-white z-50`}>
    {show && <div className="p-8 flex flex-col relative gap-8">
      <span onClick={close} className="cursor-pointer self-end font-bold">X</span>

      <div className="flex gap-4 flex-wrap justify-center">
        {products.map(prod => <ProductCart key={prod.id} {...prod} />)}
      </div>

      <span className="self-end p-8 font-bold">Total: {totalValueInBRL}</span>
    </div>}
  </div>
}