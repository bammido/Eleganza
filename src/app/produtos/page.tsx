// "use client"

import Produto from "./(components)/(Produto)/produto";
import getFotos from "../service/produtos/getFotos";
import sleep from "../helpers/functions/sleep";

export default async function Produtos() {

    const res = await (async () => {
        await sleep(3000)
        return await getFotos({ query: 'moda'})
    })()

    return <main className="flex min-h-screen flex-col items-center">
        <section  className="flex justify-center w-full">

            <div  className="flex gap-4 flex-wrap justify-center">

                {
                    res.data.photos.map((foto, i) => <Produto 
                                                        key={foto.id}
                                                        id={foto.id}
                                                        image={{
                                                            alt: foto.alt,
                                                            src: foto.src.portrait
                                                        }}
                                                        name={`produto ${foto.id}`}
                                                        value={Math.random() * 100}
                                                        loading={!foto}
                                                        discount={(i + 1) % 5 === 0 ? {valuePercentage: Math.round(Math.random() * 10)} : undefined}  
                                                    />)
                }   

            </div>
        </section>
    </main>

}