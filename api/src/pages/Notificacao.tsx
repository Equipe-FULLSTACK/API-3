import React from 'react';
import { DataProcess } from '../Components/Process/Process';
import NavBar from '../Components/Navbar/Navbar';

import '../static/css/notificacao.css'
import SideBar from '../Components/Slidebar/Slidebar';
import { ProcessToRedux } from '../Components/Data/process/types/processTypes';

interface NotificacaoProps{
    newProcess: ProcessToRedux
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

                <div className="card-itens1">
                    <p className="pCard">Nome do Processo: "{'process.responsavel'}"</p>
                    <p className="pCard2">Visto</p>
                </div>
                <div className="card-itens2">
                    
                    <p className="pCardResp">Responsável: "{'process.responsavel'}"</p>
                    <p className="pCardDest">Destinatário:</p>
                </div>
                <div className="card-itens3">
                    Mensagem:
                </div>
                <div className="card-itens">
                    Status
                </div>
                <div className="card-itens">
                    Data Final
                </div>
            </div>
            </div>
            <div className="container-cards">
            <div className="card-notificacao" id="fundoN">

                <div className="card-itens" >
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