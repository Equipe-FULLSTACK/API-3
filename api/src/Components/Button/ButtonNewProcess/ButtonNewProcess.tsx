import React, { useState } from 'react';
import { BtnNewProcess } from './styles';

const ButtonNewProcess = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed); // Alterna o estado pressionado/não pressionado
  };

  const handleButtonMouseEnter = () => {
   
  };

  const handleButtonMouseLeave = () => {
    
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