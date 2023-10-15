import { URI } from "../../uris/uri"
import Buscador from "./buscador"

export default class BuscadorProcs implements Buscador {
    public async buscar() {
        let json = await fetch(URI.PROCESSOS , {mode: 'cors',
        headers: {
            "Content-Type": ""
       },
       body: JSON.stringify(j)}).then(resposta => resposta.json())
        return json
    }
}