import LoadingProduto from "./(components)/(Produto)/Loading";

export default function LoadingProdutos() {
    const qtdProdutos = 15

    const produtos = []

    for(let i = 0; i < qtdProdutos; i++) {
        produtos.push(i)
    }

    return <main className="flex min-h-screen flex-col items-center p-12">
    <section  className="flex justify-center w-full">

        <div  className="flex gap-4 flex-wrap justify-center ">
            {produtos.map(p => <LoadingProduto key={p} />)}
        </div>
    
    </section>
</main>
}