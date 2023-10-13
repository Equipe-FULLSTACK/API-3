import React from 'react';
import { CardWrapper, CardHeader, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, ProcessHour, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../../Components/BarGraph/BarGraph';
import dark from '../../styles/Theme/dark';
import ButtonDefault from '../../Components/Button/ButtonDefault/ButtonDefault';

interface dataCard {
  processName: string;
  processStatus: string;
  processDate: string;
  processHour: string;
  processBarBackground: string;
  processBarFill: string;
  cardPercent:[];
}

const Card: React.FC<dataCard> = ({processName, processStatus, processDate, processHour,cardPercent,processBarBackground,processBarFill}) => {
  //Template Colors Animation
  processBarBackground = dark.colors.bgPrimarycolor;

  //TODO FAZER LOGICA SELEÇÃO COR DE ALERTA
  processBarFill = dark.colors.bgPrimarycolor;
  processBarFill = dark.colors.alertRedColor;
  return (
    <CardWrapper className="card">
      <CardHeader>
        <ProcessName>{processName}</ProcessName>
        <ProcessStatus className={processStatus}>{processStatus}</ProcessStatus>
      </CardHeader>

      <CardSubtitle>
        <ProcessDate>{processDate}</ProcessDate>
        <ProcessHour>{processHour}</ProcessHour>
      </CardSubtitle>

      <CardBody>
        <CardBargraph>
          {/* TODO FAZER MAP ARRAY DOS DADOS DO BAR GRAPH BASEADO QUANTIDADE DE TASKS */}
          <Bargraph value={20} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={80} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={90} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={75} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={100} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
        </CardBargraph>
      </CardBody>

      <CardFooter>
        {/* TODO INSERIR FUNÇÕES DO BOTÃO */}
        <ButtonDefault label='Detalhe'></ButtonDefault>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
