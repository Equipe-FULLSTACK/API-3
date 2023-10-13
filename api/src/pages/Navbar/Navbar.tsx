
import React from 'react';

import {
  Container,
  Logo,
  UserName
} from "./styles"
//TODO CRIANDO STYLES NAVBAR

import logo from '../../assets/icons/logo_ionic_health.png'


interface dataNavBar {
  name: string;
}

const NavBar: React.FC<dataNavBar> = ({name}) => {
  return (
    <Container>
    <Logo src={logo} alt="iconIonicHealth"/>
    <UserName>{name}</UserName>
    </Container>
  )
};
export default NavBar;
