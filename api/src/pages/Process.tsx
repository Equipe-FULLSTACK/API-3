import React from 'react';
import { useState } from 'react';

import {
  Wrapper,
  ProcessActive,
  Divider,
} from "./styles"

import CardProcess from '../../Components/Card/CardProcess';
import ButtonNewProcess from '../../Components/Button/ButtonNewProcess/ButtonNewProcess';
import SearchComponent from '../../Components/Button/ButtonSearch/ButtonSearch';
import dark from '../../styles/Theme/dark';

interface dataProcess {
  pageName: string;
  bg: string;
}

const Process: React.FC<dataProcess> = ({pageName, bg}) => {

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
                  <ButtonNewProcess>Novo Processo</ButtonNewProcess>
                  <SearchComponent/>
              </Wrapper>
              <Divider/>
              <Wrapper 
              flexDirection='row'
              backgroundColor={bg}
              >
                <CardProcess processName='Processo 01' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
                <CardProcess processName='Processo 02' processDate='14 de novembro 2023' processStatus='Andamento' processHour='12:00'/>
                <CardProcess processName='Processo 03' processDate='14 de novembro 2023' processStatus='Andamento' processHour='12:00'/>
                <CardProcess processName='Processo 04' processDate='14 de novembro 2023' processStatus='Andamento' processHour='12:00'/>
                <CardProcess processName='Processo 05' processDate='14 de novembro 2023' processStatus='Completada' processHour='12:00'/>
                <CardProcess processName='Processo 06' processDate='14 de novembro 2023' processStatus='Completada' processHour='12:00'/>
                <CardProcess processName='Processo 07' processDate='14 de novembro 2023' processStatus='Completada' processHour='12:00'/>
                <CardProcess processName='Processo 08' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
                <CardProcess processName='Processo 09' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
                <CardProcess processName='Processo 10' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
                <CardProcess processName='Processo 11' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
                <CardProcess processName='Processo 12' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
              </Wrapper>
            </Wrapper>
          </>
  )
}
export default Process;