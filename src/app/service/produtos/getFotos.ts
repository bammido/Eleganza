import { pexelsApi } from "../apis/pexelsApi";

interface IGetProdutosQuery {
    query?: string;
    orintation?: "landscape" | "portrait" | "square";
    size?: "large" | "medium" | "small";
    page?: number;
    per_page?: number;
}

interface IPexelsFotoObjeto {
    id: number,
    width: number,
    height: number,
    url: string,
    photographer: string,
    photographer_url: string,
    photographer_id: number,
    avg_color: string,
    src: {
        original: string,
        large2x: string,
        large: string,
        medium: string,
        small: string,
        portrait: string,
        landscape: string,
        tiny: string
    },
    liked: boolean,
    alt: string
}

interface IPexelsFotosResponse {
    photos: IPexelsFotoObjeto[];
    page: number;
    per_page: number;
    total_results: number;
    prev_page: string;
    next_page: string;
}

export default async function getFotos(queries?: IGetProdutosQuery) {
    const {
        orintation = "portrait",
        page = 1,
        per_page = 15,
        query = "",
        size = ""
    } = queries || {}
    try {
        return await pexelsApi.get<IPexelsFotosResponse>(`/search?query=${query}&&page=${page}&&per_page${per_page}&&size=${size}&&orientation=${orintation}`)
        
    } catch (error: any) {
        throw new Error(error.message, {cause: error})
    }
} 

