import { CardWrapper, CardHeader, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, ProcessHour, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../BarGraph/BarGraph';
import dark from '../../styles/Theme/dark';
import ButtonDefault from '../Button/ButtonDefault/ButtonDefault';
import {dataTask} from '../Data/DataTask/dataTask'

import BotaoModal from '../Modal/BotãoModal'; // IMPORTAÇÃO BOTÃO REDUX PARA ALTERAÇÃO MODAL EM TODAS AS JANELAS

import { AppState } from '../../store/index'; // MANIPULAÇÃO DADOS REDUX
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


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

  /// PROCESSO DE DEFINIÇÃO DOS DADOS VIA REDUX
  const tasks = useSelector((state: AppState) => state.tasks);
    useEffect(() => {
        if (tasks) {
            /* console.log('CardProcess UseEffect tasks') */
           /*  console.log(tasks); */
        }
    }, [tasks]);

  const tasksFiltradas = tasks.filter((task) => task.taskProcessId === processId);


  // VERIFICA SE EXISTE ALGUMA TAREFA ATRASADA
  const taskAtrasada = tasksFiltradas.filter((f) => f.taskStatus === 'Atrasada');

  // VERIFICA SE EXISTE ALGUMA TAREFA EM ANDAMENTO
  const taskAndamento = tasksFiltradas.filter((f) => f.taskStatus === 'Andamento');

  // ANIMAÇÃO DOS ESTILOS BASEADOS NOS STATUS.
  let statusProcess;



  if (taskAtrasada.length > 0) {
      statusProcess = 'Atrasada';
      processBarFill = "red";
      
  } else if (taskAndamento.length > 0) {
      statusProcess = 'Andamento';
      processBarFill = '#fbfb38';
  } else {
      statusProcess = 'Concluida';
      processBarFill = '#54c5cd;';
  }


  /* console.log(tasksFiltradas) */

  //TODO FAZER LOGICA SELEÇÃO COR DE ALERTA
  processBarFill = dark.colors.bgPrimarycolor;
 

  processBarFill = statusProcess;
  /* console.log(processBarFill) */


  return (
    <CardWrapper className="card">
      <CardHeader>
        <ProcessName>{processId} - {processName}</ProcessName>
        <ProcessStatus className={statusProcess}>{statusProcess}</ProcessStatus>
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
                fillBackgroundColor={task.taskStatus}
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
