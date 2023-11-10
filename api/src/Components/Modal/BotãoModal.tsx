// Botao.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleModalAction } from '../../store/configureStore';
import { StyledButton } from './styles';

interface ButtonProps {
  label: string;
  name: number;
}

const BotaoModal: React.FC<ButtonProps> = ({ label, name }) => {
  const dispatch = useDispatch();


  const handleClick = () => {
    
    console.log('Antes de dispashar segue o nome '+ name )
    // Despache a ação TOGGLE_MODAL com o campo processId
    const action: ToggleModalAction = {
      type: 'TOGGLE_MODAL',
      processId: name, // Passe o valor de name como processId   
    };
    
    dispatch(action);
  };

  return <StyledButton name={name} onClick={handleClick}>{label}</StyledButton>;
};

export default BotaoModal;
