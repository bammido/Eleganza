import LoadingProduto from "../produtos/(components)/(Produto)/Loading"

export default function CarouselLoading() {
    const qtdProdutos = 15

    const produtos = []

    for(let i = 0; i < qtdProdutos; i++) {
        produtos.push(i)
    }

    return <div className="flex overflow-x-scroll">
        <div className="flex items-center gap-16 justify-center p-4">
            {produtos.map(p => <LoadingProduto key={p} />)}
        </div>
    </div>
}