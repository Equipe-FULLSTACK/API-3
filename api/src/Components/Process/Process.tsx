import React from 'react';
import { useState } from 'react';
import dataProcess from '../Data/DataProcess/dataProcess'


import {
  Wrapper,
  ProcessActive,
  Divider,
} from "./styles"

import CardProcess from '../../Components/Card/CardProcess';
import ButtonNewProcess from '../../Components/Button/ButtonNewProcess/ButtonNewProcess';
import SearchComponent from '../../Components/Button/ButtonSearch/ButtonSearch';
import dark from '../../styles/Theme/dark';


interface Process {
  processId: number;
  processName: string;
  processStatus: string;
  processDateFinshed: string;
  processHourFinshed: string;
  processPercentExecuted?: number;
  processTasks?: number;
  pageName?: string; // Propriedade opcional
  bg: string;
}

const Process: React.FC<Process> = ({pageName, bg}) => {

bg = dark.colors.bgPrimarycolor;

// ESTRUTURA EXIBIR E OCULTAR MENU LATERAL //
  const [display, setDisplay] = useState('none');

  const toggleDisplay = (e) => {
    e.preventDefault()
      if (display==='none') {
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
                padding=''
                margin='0 0 0.5rem 0'
                width='100%'
                backgroundColor={bg}>
                  <ProcessActive>Processos Ativos</ProcessActive>
                  <a href="/cadastro"><ButtonNewProcess>Novo Processo</ButtonNewProcess></a>
                  <SearchComponent/>
              </Wrapper>
              <Divider/>
              <Wrapper 
              flexDirection='row'
              backgroundColor={bg}
              >
                {dataProcess.map((process: Process) => (
                  <li key={process.processId}>
                    <CardProcess processId={process.processId} 
                      processName={process.processName} 
                      processDate={process.processDateFinshed} 
                      processStatus={process.processStatus} 
                      processHour={process.processHourFinshed}
                    />
                  </li>
                ))}


              </Wrapper>
            </Wrapper>
          </>
  )
}
export default Process;