import { URI } from "../../uris/uri";
import Removedor from "./removedor";

export default class RemovedorProcs implements Removedor{
    remover(idArquivo: string): void {
        let arquivo = {
            id: idArquivo
        }
        fetch(URI.DELETAR_PROC, {
            mode:'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arquivo)
        })
    }

}