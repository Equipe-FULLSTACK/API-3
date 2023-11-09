
import React from 'react';
import PositionedMenu from './LogoutNavBar';


import {
  Container,
  Logo,
  Wrapper,
  UserName
} from "./styles"
//TODO CRIANDO STYLES NAVBAR

import logo from '../../assets/icons/logo_ionic_health.png'


interface dataNavBar {
  userName: string;
  pageName: string;
}

const NavBar: React.FC<dataNavBar> = ({userName, pageName}) => {
  
  


  return (
    <Container>
      {/* {pageName} */}
      <Logo src={logo} alt="iconIonicHealth"/>
      
      
      <Wrapper>
        
        <UserName>{userName.toUpperCase()} </UserName>
       {/*  <PositionedMenu/> */}
      </Wrapper>

    </Container>
  )
};
export default NavBar;
