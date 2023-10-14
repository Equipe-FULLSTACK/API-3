import React, { useState } from 'react';
import { StyledButton } from './styles'; // Importe o estilo do arquivo de estilos


//TODO TIPAR AS FUNÇÕES DE EVENTOS DOS BOTOES
interface ButtonProps {
  label: string;
  onClick?: () => void;
  onHover?: () => void;
  onActive?: () => void;
}

const ButtonDefault: React.FC<ButtonProps> = ({ label, onClick, onHover, onActive }) => {
  return (
    <StyledButton onClick={onClick} onMouseEnter={onHover} onMouseDown={onActive}>
      {label}
    </StyledButton>
  );
};

export default ButtonDefault;
