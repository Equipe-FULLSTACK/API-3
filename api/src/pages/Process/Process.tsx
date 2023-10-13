import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import {
  Wrapper,
  ProcessActive,
} from "./styles"

import CardProcess from '../../Components/Card/CardProcess';
import ButtonNewProcess from '../../Components/Button/ButtonNewProcess/ButtonNewProcess';
import SearchComponent from '../../Components/Button/ButtonSearch/ButtonSearch';


interface dataProcess {
  pageName: string;
}

const Process: React.FC<dataProcess> = ({pageName}) => {

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
          <Wrapper 
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            padding='2rem' margin='0 auto'
            width='100%'
            backgroundColor=''
            >
            <Wrapper
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              padding=''
              margin='0 0 2rem 0'
              width='100%'>
                <ProcessActive>Processos Ativos</ProcessActive>
                <ButtonNewProcess>Novo Processo</ButtonNewProcess>
                <SearchComponent/>
            </Wrapper>
            <CardProcess processName='Processo 01' processDate='14 de novembro 2023' processStatus='Atrasada' processHour='12:00'/>
          </Wrapper>
  )
}
export default Process;