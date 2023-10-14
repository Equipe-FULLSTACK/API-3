// ModalComponent.tsx
import React from 'react';
import * as S from './styles';

const ModalProcess: React.FC = () => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <header>
          <S.ProcessModal>
            <div className="subProcessModal">
              <S.ProcessModalTitle>Processo 1</S.ProcessModalTitle>
              <div className="Datahora">
                <span>11/10/2023</span>
                <span>19:00</span>
              </div>
            </div>
            <S.Status>Atrasada</S.Status>
          </S.ProcessModal>
        </header>
        {/* Restante do seu conteúdo */}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalProcess;
