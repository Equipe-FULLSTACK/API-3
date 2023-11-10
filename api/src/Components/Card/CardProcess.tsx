import { CardWrapper, CardHeader, CardSubtitleColumn, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, ProcessHour, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../BarGraph/BarGraph';
import dark from '../../styles/Theme/dark';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Badge from '@mui/material/Badge';

import BotaoModal from '../Modal/BotãoModal'; // IMPORTAÇÃO BOTÃO REDUX PARA ALTERAÇÃO MODAL EM TODAS AS JANELAS

import React, { useState, useEffect } from 'react';

//PROCESSO DE UTILIZAÇÃO DO STORE THUNK
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { ProcessToRedux } from '../Data/process/types/processTypes';
import { TaskToRedux } from '../Data/tasks/types/taskTypes';



interface dataCard {
  processId: number;
  processName: string;
  processStatus: string;
  processDate: string;
  processDeadLine: string;

  processBarBackground?: string;
  processBarFill?: string;

  taskId?: number;
  taskProcessId?: number;
  taskDescription?: string;
  taskDate?: string;
  taskStatus?: string;
  taskPercent?: number;
}



const Card: React.FC<dataCard> = ({ processId, processName, processStatus, processDate, processDeadLine, processBarBackground, processBarFill }) => {
  //Template Colors Animation
  processBarBackground = dark.colors.bgPrimarycolor;



  /// CARREGA DO STORE ESTADO ATUAL DOS DADOS
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const process = useSelector((state: RootState) => state.processes.processes);

  /// CARREGA VARIAVEL AUXILIAR MANIPULACAO NO COMPONENTE
  const [dataProcess, setDataProcess] = useState<ProcessToRedux[]>(useSelector((state: RootState) => state.processes.processes));
  const [dataTasks, setDataTasks] = useState<TaskToRedux[]>(useSelector((state: RootState) => state.tasks.tasks));

  /// ALIMENTA VARIAVEL AUXILIAR
  useEffect(() => {
    setDataProcess(process)
    setDataTasks(tasks)
  }, [process, tasks]);

 /*  console.log('dataProcess', dataProcess);
  console.log('dataTasks', dataTasks); */

  const tasksFiltradas = dataTasks.filter((task) => task.process === processId);

  //console.log('CardProcess - tasksFiltradas', tasksFiltradas)

  // ANIMAÇÃO DOS ESTILOS BASEADOS NOS STATUS.
  const dataProcessStatus = dataProcess
    .filter((f) => f.id === processId)
    .map((f) => f.status)[0]; // Acesso ao primeiro elemento do array

  let statusProcess;

  if (dataProcessStatus === 'Atrasada') {
    statusProcess = 'Atrasada';
    processBarFill = "red";
  } else if (dataProcessStatus === 'Andamento') {
    statusProcess = 'Andamento';
    processBarFill = '#fbfb38';
  } else if (dataProcessStatus === 'Pendente') {
    statusProcess = 'Pendente';
    processBarFill = '#bac8c9';
  } else {
    statusProcess = 'Concluida';
    processBarFill = '#54c5cd';
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

        <Badge 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeContent={tasksFiltradas.length} color="primary">
          <ProcessStatus className={statusProcess}>{dataProcessStatus}</ProcessStatus>
        </Badge>

      </CardHeader>

      <CardSubtitle>
        

        <CardSubtitleColumn>
          <span>Criado</span>
          <ProcessDate>{processDate}</ProcessDate>
        </CardSubtitleColumn>

        <CardSubtitleColumn>
          <span>Data Limite</span>
          <ProcessDate>{processDeadLine}</ProcessDate>
        </CardSubtitleColumn>




      </CardSubtitle>

      <CardBody>
        <CardBargraph>
          {/* TODO FAZER MAP ARRAY DOS DADOS DO BAR GRAPH BASEADO QUANTIDADE DE TASKS */}
          {tasksFiltradas.slice(0, 5).map((task) => (
            <Bargraph
              key={task.id}
              value={task.active} //TODO PRECISA DEFINIR SE IRA MANTER PERCENTUAL
              minValue={0}
              maxValue={1}
              backgroundColor={processBarBackground}
              fillBackgroundColor={task.status}
            />
          )
          )}
        </CardBargraph>
      </CardBody>

      <CardFooter>
        <BotaoModal label={'Detalhe'} name={processId} tagButton={'Processo_' + processId} />
      </CardFooter>

    </CardWrapper>
  );
};

export default Card;
