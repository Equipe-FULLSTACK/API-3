import React from 'react';
import { DataProcess } from '../Components/Process/Process';

import '../static/css/notificacao.css'

interface NotificacaoProps{
    newProcess: DataProcess
}
 const Notificacao: React.FC<NotificacaoProps> = ({newProcess}) =>{
    console.log('novo processo: ', newProcess);

 

 return(
    <div>
<h1>teste</h1>
    </div>
 )
 }
 export default Notificacao