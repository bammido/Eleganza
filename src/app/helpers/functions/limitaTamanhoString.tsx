export default function limitaTamanhoString({string: string, tamanho} : {string: string, tamanho: number}) {
    return string.substring(0, tamanho).concat("...")
}