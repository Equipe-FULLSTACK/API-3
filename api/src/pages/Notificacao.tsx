import React from 'react';
import { DataProcess } from '../Components/Process/Process';
import NavBar from '../Components/Navbar/Navbar';

import '../static/css/notificacao.css'
import SideBar from '../Components/Slidebar/Slidebar';

interface NotificacaoProps{
    newProcess: DataProcess
}
 const Notificacao: React.FC<NotificacaoProps> = ({newProcess}) =>{
    console.log('novo processo: ', newProcess);

 

 return(
    <div>
        <div>
            <NavBar userName={''} pageName={''} />
        </div>

        <div className="container-main">
            <div className="side-notificacao">
                <SideBar pageName={'SideBar'} /> 
            </div>

            <div className="container-centro">
            <div> <h2>Notificações</h2></div>
            <div className="container-cards">
            <div className="card-notificacao" id="fundoN">

                <div className="card-itens">
                    Nome do Processo: "{'process.responsavel'}"
                </div>
                <div className="card-itens">
                    Responsável: "{'process.responsavel'}"
                </div>
                <div className="card-itens">
                    Data Final
                </div>
                <div className="card-itens">
                    Status
                </div>
                <div className="card-itens">
                    Destinatário
                </div>
            </div>
            </div>
            <div className="container-cards">
            <div className="card-notificacao" id="fundoN">

                <div className="card-itens">
                    Nome do Processo: "{'process.responsavel'}"
                </div>
                <div className="card-itens">
                    Responsável: "{'process.responsavel'}"
                </div>
                <div className="card-itens">
                    Data Final
                </div>
                <div className="card-itens">
                    Status
                </div>
                <div className="card-itens">
                    Destinatário
                </div>
            </div>
            </div>
            </div>
            
            
        </div>

    </div>

      
    
 )
 }
 export default Notificacao