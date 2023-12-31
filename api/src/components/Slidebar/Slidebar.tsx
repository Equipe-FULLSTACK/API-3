import React from 'react';
import { useState } from 'react';

import {
  Wrapper,
  Link,
  Menu,
  Container,
} from "./styles"
//TODO CRIANDO STYLES NAVBAR

import menu from '../../assets/icons/icon_menu.png'
import lock from '../../assets/icons/icon_lock.png'
import detail from '../../assets/icons/icon_detail.png'
import notification from '../../assets/icons/icon_notification.png'
import graph from '../../assets/icons/icon_graph.png'
import Process from '../Process/Process';

interface dataSideBar {
  pageName: string;
}

const SideBar: React.FC<dataSideBar> = ({pageName}) => {


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
      <Container>
        <Wrapper flexDirection='row' justifyContent='flex-start' padding='1rem'>
          <Wrapper>
            <Menu href="" onClick={toggleDisplay}><img src={menu} alt="lock"/></Menu>

            <Wrapper display={display} flexDirection='column' flexWrap='wrap' alignItems='flex-start' justifyContent='center' padding='1rem'>
                <Link href='/admin'><img src={lock} alt="lock"/>Permissões</Link>
                <Link href='#'><img src={detail} alt="lock"/>Editar Ordem</Link>
                <Link href='#'><img src={notification} alt="lock"/>Notificações</Link>
                <Link href='/datatablerender'><img src={graph} alt="lock"/>Logs</Link>      
            </Wrapper>  

          </Wrapper>
        </Wrapper>  
      </Container>

  )
}
export default SideBar;