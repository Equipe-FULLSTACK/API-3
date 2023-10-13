
import React from 'react';

import {
  Container,
  Logo,
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
      <UserName>{userName}</UserName>
    </Container>
  )
};
export default NavBar;
