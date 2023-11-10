import styled from 'styled-components';
import hour from '../../assets/icons/icon_hour.png'
import date from '../../assets/icons/icon_calendar.png'

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 360px;
  border: 1px solid ${props => props.theme.colors.bgTertiarycolor};
  background-color: ${props => props.theme.colors.bgSecondarycolor};
  opacity: 0.8;
  border-radius: 1rem;
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1), 0 3px 6px rgba(0, 0, 0, .05);
  box-sizing: border-box;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  margin: 0 0 1rem 0;
  height; 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardSubtitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  justify-content: space-between;
  
`;

export const ProcessName = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  /* display: flex; */
  align-items: center;
`;

export const ProcessStatus = styled.span`
  display:flex;
  border-radius: 8px;
  padding: 6px 1rem;
  height: 2rem;
  text-align: center;
  align-items: center;
  
  

  &.Concluida {
    background-color: #54c5cd;
    color: black;

  }
  
  &.Andamento{
    background-color: #fbfb38;
    color: black;

  }
  
  &.Atrasada{
    background-color: #ff6961;
    color: black;

  }

`;

export const CardSubtitle = styled.div`
  margin: 0 0 3rem 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
  font-size: 0.7rem;
  padding: 0;
  font-weight: lighter;
  font-style: italic;
`;

export const ProcessDate = styled.span`
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  &::before {
    width: auto;
    height: auto;
    content: '';
    padding: 0 0 0 1rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    align-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${date});
  }
`;

export const ProcessHour = styled.span`
  &::before {
    width: auto;
    height: auto;
    content: '';
    padding: 0 0 0 1rem;
    margin-right: 0.5rem;
    margin-left: 2rem;
    align-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${date});
  }
`;

export const CardBody = styled.div`
  position: relative;
`;

export const CardBargraph = styled.ol`
  display: flex;
  flex-direction: row;
  margin: 0;
  
  &li{
    margin: 0;
  }
`;

export const CardPercent = styled.span`
  position: absolute;
  left: 16rem;
  top: -1rem;
  font-weight: bold;
  font-size: 0.7rem;
`;

export const CardFooter = styled.div`

  margin: 1rem 0;
  display: flex;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;

`;

export const Button = styled.button`
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(${props => props.theme.colors.bgPrimarycolor}, ${props => props.theme.colors.bgSecondarycolor});
  border-radius: 16px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colors.fontPrimarycolor};
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  width: 2rem;
  height: 3rem;
  justify-content: center;
  line-height: 2;
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
  
`;

export const CardFooterButton = styled(Button)`
  &:hover {
    color: ${props => props.theme.colors.fontSecondarycolor};
    opacity: 0.9;
  }

  &:active {
    outline: 0;
    box-shadow: ${props => props.theme.colors.fontSecondarycolor}; 0 0 0 1px;
  }
`;
