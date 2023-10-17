import React from 'react';
import { CardWrapper, CardHeader, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, ProcessHour, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../BarGraph/BarGraph';
import dark from '../../styles/Theme/dark';
import ButtonDefault from '../Button/ButtonDefault/ButtonDefault';
import {dataTask} from '../Data/DataTask/dataTask'

import BotaoModal from '../Modal/BotãoModal'; // IMPORTAÇÃO BOTÃO REDUX PARA ALTERAÇÃO MODAL EM TODAS AS JANELAS

interface dataCard {
  processId: number;
  processName: string;
  processStatus: string;
  processDate: string;
  processHour: string;
  
  processBarBackground: string;
  processBarFill: string;

  taskId: number;
  taskProcessId: number;
  taskDescription: string;
  taskDate: string;
  taskStatus: string;
  taskPercent: number;
}



const Card: React.FC<dataCard> = ({processId,processName, processStatus, processDate, processHour,processBarBackground,processBarFill}) => {
  //Template Colors Animation
  processBarBackground = dark.colors.bgPrimarycolor;

  const tasksFiltradas = dataTask.filter((task) => task.taskProcessId === processId);

  /* console.log(tasksFiltradas) */

  //TODO FAZER LOGICA SELEÇÃO COR DE ALERTA
  processBarFill = dark.colors.bgPrimarycolor;

  processBarFill = dark.colors.alertRedColor;
  return (
    <CardWrapper className="card">
      <CardHeader>
        <ProcessName>{processId} - {processName}</ProcessName>
        <ProcessStatus className={processStatus}>{processStatus}</ProcessStatus>
      </CardHeader>

      <CardSubtitle>
        <ProcessDate>{processDate}</ProcessDate>
        <ProcessHour>{processHour}</ProcessHour>
      </CardSubtitle>

      <CardBody>
        <CardBargraph>
          {/* TODO FAZER MAP ARRAY DOS DADOS DO BAR GRAPH BASEADO QUANTIDADE DE TASKS */}
          {tasksFiltradas.map((task) => (
            <Bargraph
                key={task.taskId}  
                value={task.taskPercent}
                minValue={0}
                maxValue={100}
                backgroundColor={processBarBackground}
                fillBackgroundColor={processBarFill}
            />
    )
)}
        </CardBargraph>
      </CardBody>

      <CardFooter>
        {/* TODO INSERIR FUNÇÕES DO BOTÃO */}
        <BotaoModal label={'Detalhe'} name={processId} tagButton={'Processo_'+processId}/>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
