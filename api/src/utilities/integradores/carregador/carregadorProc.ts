import { URI } from "../../uris/uri";
import Carregador from "./carregador";

export default class CarregadorArquivo implements Carregador {
    carregar(arquivo: File): void {
        let dado = new FormData()
        dado.append('file', arquivo)
        fetch(URI.CADASTRAR_PROC, {
            method: 'POST',
            body: dado,
            mode:'cors',
            headers: {
                "Content-Type": "application/json"
           },
           body: JSON.stringify(arquivo)
        })
    }
}