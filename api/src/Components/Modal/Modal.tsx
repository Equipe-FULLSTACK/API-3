// ModalComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FecharModalAction } from '../../store/index'; // Importe a ação FECHAR_MODAL
import * as S from './styles';

const ModalComponent: React.FC = () => {
  const modalAberto = useSelector((state: AppState) => state.modalAberto);
  const tamanhoModal = useSelector((state: AppState) => state.tamanhoModal);
  const dispatch = useDispatch();

  const fecharModal = () => {
    const action: FecharModalAction = {
      type: 'FECHAR_MODAL',
    };
    dispatch(action);
  };

  const evitarPropagacao = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne a propagação do evento de clique
  };

  if (!modalAberto) {
    return null;
  }

  return (
    <S.ModalWrapper onClick={fecharModal}>
      <S.ModalContent style={{ width: tamanhoModal }} onClick={evitarPropagacao}>
        
      <header>
        <div className="ProcessModal">
            <div className="subProcessModal">
                <h2>Processo 1</h2>
                <div className="Datahora">
                    <span>11/10/2023</span>
                    <span>19:00</span>
                </div>
            </div>
            <span className="status">Atrasada</span>
        </div>
    </header>

    <main className="mainModal">
        <header>
            <span>Tarefas (03)</span>
            <button id="btnAdc">+</button>
        </header>
        <section className="listTodo">
            <table>
                <thead className="listHead"> 
                    <tr>
                        <th>ID</th><th>Data</th><th>Tarefa</th><th>STATUS</th>
                    </tr>
                </thead>
                <tbody className="listBody">
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

    <footer className="footermodal">
        <div className="arquivo">
            <button id="btnArq">ARQUIVADOS</button>
        </div>
    </footer>

      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalComponent;
