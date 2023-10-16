import { Component } from "react";

import BuscadorProcs from "../../utilities/integradores/buscador/buscadorProc";
import RemovedorProcs from "../../utilities/integradores/removedor/removedorProc";

type state = {
    arquivos: Object[]
}

class ListaProcs extends Component<{}, state> {

    constructor(props) {
        super(props)
        this.buscarProcs = this.buscarProcs.bind(this)
        this.state = {
            arquivos: []
        }
    }

    public buscarProcs() {
        let buscador = new BuscadorProcs()
        const arquivos = buscador.buscar()
        arquivos.then(arquivos => {
            this.setState({ arquivos })
        })
    }

    public excluirProcs(id: string, evento) {
        evento.preventDefault()
        let removedor = new RemovedorProcs()
        removedor.remover(id)
    }

    componentDidMount(): void {
        setInterval(() => this.buscarProcs(), 1000)
    }

    render() {
        let quantidadeProcs = this.state.arquivos.length
        if (quantidadeProcs < 1) {
            return (
                <></>
            )
        } else {
            let listaProcs = this.state.arquivos.map(arquivo =>
                <div className="card horizontal" key={arquivo['id']}>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s1">
                                    <i className="material-icons small">insert_drive_file</i>
                                </div>
                                <div className="col s11">
                                    <p>Nome: {arquivo['nome']}<br />
                                        Tamanho: {arquivo['tamanho']} bytes<br />
                                        Tipo: {arquivo['tipo']}</p><br />
                                </div>
                            </div>
                            <a target={"_blank"} rel="noreferrer" href={arquivo['links'][0]['href']} className="btn btn-small halfway-fab waves-effect waves-light light-blue darken-4"><i className="material-icons">cloud_download</i></a>
                            <span> </span>
                            <span> </span>
                            <a onClick={(e) => this.excluirProcs(arquivo['id'], e)} className="btn btn-small halfway-fab waves-effect waves-light light-blue darken-4"><i className="material-icons">block</i></a>
                        </div>
                    </div>
                </div>

            )
            return (
                <div className="row">
                    <div className="col s12">
                        {listaProcs}
                    </div>
                </div>
            )
        }

    }
}
export default ListaProcs