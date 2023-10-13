import React, { useState } from 'react';
import { BtnNewProcess } from './styles'; // Importe o estilo do arquivo de estilos

const ButtonNewProcess = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    // Lógica a ser executada quando o botão for clicado
    setIsPressed(!isPressed); // Alterna o estado pressionado/não pressionado
  };

  const handleButtonMouseEnter = () => {
    // Lógica a ser executada quando o cursor passar sobre o botão
    // Por exemplo, você pode adicionar um efeito de foco
  };

  const handleButtonMouseLeave = () => {
    // Lógica a ser executada quando o cursor sair do botão
    // Por exemplo, você pode remover o efeito de foco
  };

  return (
    <BtnNewProcess
      type="button"
      className={`btn-newProcess ${isPressed ? 'pressed' : ''}`}
      data-bs-toggle="button"
      aria-pressed={isPressed}
      onClick={handleButtonClick}
      onMouseEnter={handleButtonMouseEnter}
      onMouseLeave={handleButtonMouseLeave}
    >
      Novo Processo
    </BtnNewProcess>
  );
};

export default ButtonNewProcess;