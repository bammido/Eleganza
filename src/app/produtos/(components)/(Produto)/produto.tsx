import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import { FaCartPlus } from "react-icons/fa";
import LoadingProduto from "./Loading";
import limitaTamanhoString from "assets/app/helpers/functions/limitaTamanhoString";

type Desconto = {
    valorProcentagem: number,

}

type Imagem = {
    src: string,
    alt: string
}

interface IProdutosProps {
    id: number;
    imagem: Imagem;
    nome: string;
    valor: number;
    desconto?: Desconto;
    loading?: boolean;
}

export default function Produto({
    id,
    imagem,
    nome,
    valor,
    desconto,
    loading

}: IProdutosProps) {

    const valorEmBRL = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency"
    }).format(valor)

    return <>
        <div className="flex flex-col bg-gray-200 w-44 h-80 pb-2 justify-between rounded animate-apear drop-shadow-lg border-2 border-black snap-center">
            {!loading && <>
                <Image {...imagem} className="w-44 h-52" alt={imagem.alt} width={176} height={250} />
                <Link href={`/produtos/${id}`}>
                    <span className={`font-light text-sm px-4`}>{limitaTamanhoString({string: nome, tamanho: 15})}</span>
                </Link>
                <div className="flex justify-between w-full px-4 items-center gap-4">
                    <div className={`flex gap-2 items-center ${desconto? "text-amber-600" : ""} text-lg`}>
                        <span className="font-bold text-sm">{valorEmBRL}</span>
                        {desconto && <div className="border-2 rounded border-amber-600 p-1 self-center max-h-8 w-10 flex justify-center items-center">
                            <span className="text-amber-600 text-xs">- {desconto.valorProcentagem}%</span>
                        </div>}
                    </div>
                    <div className="border-2 border-black rounded-full flex items-center p-2 cursor-pointer hover:scale-110 transition text-sm">
                        <FaCartPlus />
                    </div>
                </div>
            </>}
        </div>
        {loading && <LoadingProduto />}
    </>
}