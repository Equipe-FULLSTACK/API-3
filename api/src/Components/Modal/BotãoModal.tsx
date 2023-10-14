// Botao.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleModalAction } from '../../store/index';
import {
  StyledButton,
} from './styles'

//TODO TIPAR AS FUNÇÕES DE EVENTOS DOS BOTOES
interface ButtonProps {
  label: string;
  name: string;
}


const BotaoModal: React.FC<ButtonProps> = ({label}, {name}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(name);
    const action: ToggleModalAction = {
      type: 'TOGGLE_MODAL',
    };
    dispatch(action);
  };

  return (
    <StyledButton name={name} onClick={handleClick}>{label}</StyledButton>
  );
};

export default BotaoModal;
