// ModalComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FecharModalAction } from '../../store/index'; // Importe a ação FECHAR_MODAL
import * as S from './styles';
import ModalProcess from './ModalProcess/ModalProcess';

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

        <ModalProcess/>

      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalComponent;
