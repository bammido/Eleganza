import sleep from "../helpers/functions/sleep"
import Produto from "../produtos/(components)/(Produto)/produto"
import getFotos from "../service/produtos/getFotos"

export default async function Carousel() {
    const res = await (async () => {
        await sleep(3000)
        return await getFotos({ query: 'moda'})
    })()


    return<div className="flex overflow-x-scroll">
        <div className="flex items-center gap-16 justify-center p-4">
        {
                    res.data.photos.map((foto, i) => <Produto 
                                                        key={foto.id}
                                                        id={foto.id}
                                                        imagem={{
                                                            alt: foto.alt,
                                                            src: foto.src.large
                                                        }}
                                                        nome={`produto ${foto.id}`}
                                                        valor={Math.random() * 100}
                                                        loading={!foto}
                                                        desconto={(i + 1) % 5 === 0 ? {valorProcentagem: Math.round(Math.random() * 10)} : undefined}  
                                                    />)
                }
        </div>  
    </div>
}