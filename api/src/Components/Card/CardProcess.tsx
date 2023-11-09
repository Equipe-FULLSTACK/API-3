import { CardWrapper, CardHeader, ProcessName, ProcessStatus, CardSubtitle, ProcessDate, processDeadLine, CardBody, CardBargraph, CardPercent, BargraphItem, CardFooter, Button } from './styles'; // Importe os estilos do arquivo de estilos
import Bargraph from '../BarGraph/BarGraph';
import dark from '../../styles/Theme/dark';

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



const Card: React.FC<dataCard> = ({processId,processName, processStatus, processDate, processDeadLine,processBarBackground,processBarFill}) => {
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

  console.log('dataProcess', dataProcess);
  console.log('dataTasks',dataTasks);
  
  const tasksFiltradas = dataTasks.filter((task) => task.process === processId);

  //console.log('CardProcess - tasksFiltradas', tasksFiltradas)


  // VERIFICA SE EXISTE ALGUMA TAREFA ATRASADA
  const taskAtrasada = tasksFiltradas.filter((f) => f.status === 'Atrasada');

  // VERIFICA SE EXISTE ALGUMA TAREFA EM ANDAMENTO
  const taskAndamento = tasksFiltradas.filter((f) => f.status === 'Andamento');

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
        <processDeadLine>{processDeadLine}</processDeadLine>
      </CardSubtitle>

      <CardBody>
        <CardBargraph>
          {/* TODO FAZER MAP ARRAY DOS DADOS DO BAR GRAPH BASEADO QUANTIDADE DE TASKS */}
          {tasksFiltradas.slice(0, 5).map((task) => (
            <Bargraph
                key={task.id}  
                value={task.active} //TODO PRECISA DEFINIR SE IRA MANTER PERCENTUAL
                minValue={0}
                maxValue={100}
                backgroundColor={processBarBackground}
                fillBackgroundColor={task.status}
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
