import React from 'react';
import { CardWrapper, CardHeader, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, ProcessHour, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../BarGraph/ButtonSearch/BarGraph';
import dark from '../../styles/Theme/dark';

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
          <Bargraph value={10} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={30} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={90} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
          <Bargraph value={75} minValue={0} maxValue={100} backgroundColor={processBarBackground} fillBackgroundColor={processBarFill}/>
        </CardBargraph>
      </CardBody>

      <CardFooter>
        <Button type="button" className="btn-detail" data-bs-toggle="button" aria-pressed="false">
          Detalhe
        </Button>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
