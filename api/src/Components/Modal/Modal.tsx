// ModalComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/configureStore'; // Importe a ação FECHAR_MODAL

import * as S from './styles';
import ModalProcess from './ModalProcess/ModalProcess';

//TODO TIPAR AS FUNÇÕES DE EVENTOS DOS BOTOES
interface modalData {
  name: string;
}


  const ModalComponent: React.FC = ({name}) => {
    
    /* console.log('Aberto modal'+name) */
      

    /* const modalAberto = useSelector((state: AppState) => state.modalAberto);
    const tamanhoModal = useSelector((state: AppState) => state.tamanhoModal); */

    const modalAberto = useSelector((state: RootState) => state.modal.modalAberto);
    const tamanhoModal = useSelector((state: RootState) => state.modal.tamanhoModal);


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

        <ModalProcess/>

      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalComponent;
