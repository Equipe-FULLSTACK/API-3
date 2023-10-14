// ModalComponent.tsx
import React from 'react';
import './style.css'

const ModalProcess: React.FC = () => {
  return (
    <>
     <header>
        <div classname="ProcessModal">
            <div classname="subProcessModal">
                <h2>Processo 1</h2>
                <div classname="Datahora">
                    <span>11/10/2023</span>
                    <span>19:00</span>
                </div>
            </div>
            <span classname="status">Atrasada</span>
        </div>
    </header>

    <main classname="mainModal">
        <header>
            <span>Tarefas (03)</span>
            <button id="btnAdc">+</button>
        </header>
        <section classname="listTodo">
            <table>
                <thead classname="listHead"> 
                    <tr>
                        <th>ID</th><th>Data</th><th>Tarefa</th><th>STATUS</th>
                    </tr>
                </thead>
                <tbody classname="listBody">
                    <tr>
                        <td>01</td><td>11/10/2023</td><td>Criar código html</td><td id="status01">concluida</td>
                    </tr>
                    <tr>
                        <td>02</td><td>11/10/2023</td><td>Criar código css</td><td id="status02">Andamento</td>
                    </tr>
                    <tr>
                        <td>03</td><td>11/10/2023</td><td>Criar modelo da pagina</td><td id="status03">Pendente</td>
                    </tr>
                </tbody>
            
            </table>
        </section>
    </main>

    <footer classname="footermodal">
        <div classname="arquivo">
            <button id="btnArq">ARQUIVADOS</button>
        </div>
    </footer>
    </>
  );
};

export default ModalProcess;
