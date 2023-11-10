//PROCESSO DE UTILIZAÇÃO DO STORE THUNK
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { RootState } from '../../store/configureStore';
import { ProcessToRedux } from '../Data/process/types/processTypes';
import { TaskToRedux } from '../Data/tasks/types/taskTypes';
import Badge from '@mui/material/Badge';
import { ProcessForm } from '../Modal/ProcessForm';

import {
  Wrapper,
  ProcessActive,
  Divider,
} from "./styles"

import CardProcess from '../../Components/Card/CardProcess';
import ButtonNewProcess from '../../Components/Button/ButtonNewProcess/ButtonNewProcess';
import SearchComponent from '../../Components/Button/ButtonSearch/ButtonSearch';
import dark from '../../styles/Theme/dark';



export type DataProcess = {
  processId: number;
  processName: string;
  processStatus: string;
  processDateFinshed: string;
  processHourFinshed: string;
  processPercentExecuted?: number;
  processTasks?: number;
}


interface ProcessProps {
  dataProcess: DataProcess[];
  pageName?: string; // Propriedade opcional
  bg: string;
}

const Process: React.FC<ProcessProps> = ({ pageName, bg }) => {

  /// CARREGA DO STORE ESTADO ATUAL DOS DADOS
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const process = useSelector((state: RootState) => state.processes.processes);

  bg = dark.colors.bgPrimarycolor;

  // ESTRUTURA EXIBIR E OCULTAR MENU LATERAL //
  const [display, setDisplay] = useState('none');
  const [showModal, setShowModal] = useState(false);

  /// CARREGA VARIAVEL AUXILIAR MANIPULACAO NO COMPONENTE
  const [dataProcess, setDataProcess] = useState<ProcessToRedux[]>(useSelector((state: RootState) => state.processes.processes));
  const [dataTasks, setDataTasks] = useState<TaskToRedux[]>(useSelector((state: RootState) => state.tasks.tasks));

  /// ALIMENTA VARIAVEL AUXILIAR
  useEffect(() => {
    setDataProcess(process)
    setDataTasks(tasks)
  }, [process, tasks]);


  /* console.log('dataProcess', dataProcess);
  console.log('dataTasks', dataTasks); */


  const toggleDisplay = (e) => {
    e.preventDefault()
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return (
    <>

      <Wrapper
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        padding='2rem' margin='0 auto'
        width='100%'
        backgroundColor={bg}
      > 
        <Wrapper
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          padding='0'
          margin='0 0 0.5rem 0'
          width='100%'
          backgroundColor={bg}>

          <ProcessActive>Processos</ProcessActive>

          
          {/* <Wrapper> //TODO IMPLEMENTAR VISUALIZAÇÃO PROCESSOS CONTAGE,
          <Badge
            
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={dataProcess.filter(item => item.status === 'Atrasada').length} color="error" style={{ borderRadius: '1rem' }}>
            <ProcessActive>Processos Atrasados</ProcessActive>
          </Badge>
          
          <Badge
            
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={dataProcess.filter(item => item.status === 'Andamento').length} color="info" style={{ borderRadius: '1rem' }}>
            <ProcessActive>Processos Andamento</ProcessActive>
          </Badge>

          <Badge
            
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={dataProcess.filter(item => item.status === 'Concluida').length} color="success" style={{ borderRadius: '1rem' }}>
            <ProcessActive>Processos Concluidos</ProcessActive>
          </Badge>
          </Wrapper> */}
          
          <button className="btn-newProcess" onClick={() => setShowModal(true)}>Novo processo</button>
          <SearchComponent />

        </Wrapper>
        <Divider />
        <Wrapper
          flexDirection='row'
          backgroundColor={bg}
          margin='.5rem'
          padding='0'

        >
          {dataProcess.map((process: ProcessToRedux) => (
            <li className='cardList' key={process.id}>
              <CardProcess
                processId={process.id}
                processName={process.name}
                processDate={process.created}
                processStatus={process.status}
                processDeadLine={process.deadline}
              />
            </li>
          ))}


        </Wrapper>
      </Wrapper>

      {showModal && <ProcessForm setDataProcess={setDataProcess} setShowModal={setShowModal} />}
    </>
  )
}
export default Process;