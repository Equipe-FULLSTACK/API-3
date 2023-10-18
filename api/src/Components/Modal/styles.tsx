import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999; /* Ajuste o valor conforme necessário para garantir que o modal apareça acima dos outros elementos */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7)  ;
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.bgSecondarycolor};
  padding: 20px;
  border: 1px solid #888;
  text-align: center;

`;

export const CloseButton = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
`


export const StyledButton = styled.button`
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(${props => props.theme.colors.bgSecondarycolor}, ${props => props.theme.colors.bgTertiarycolor});
  border-radius: 16px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .05);
  color: ${props => props.theme.colors.fontPrimarycolor};
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 2.5rem;
  justify-content: center;
  line-height: 2;
  margin: 0;
  padding: 1rem 3rem;
  outline: none;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;

  &:hover {
    color: ${props => props.theme.colors.fontSecondarycolor};
    opacity: 0.9;
  }

  &:active {
    outline: 0;
    box-shadow: ${props => props.theme.colors.fontSecondarycolor} 0 0 0 1px;
  }
`
;
