import React from 'react';
import GlobalStyle from "./styles/global.ts"
import { ThemeProvider } from 'styled-components';

import dark from './styles/Theme/dark.ts';

import Menubar from "./components/Menubar"
import PageBody from "./components/PageBody"
import NavBar from './pages/Navbar/Navbar.tsx';
import SideBar from './pages/Slidebar/Slidebar.tsx';


const App:React.FC = ()=> (

  <>
    
    <ThemeProvider theme={dark}>
      <GlobalStyle/>

      <NavBar name="Thiago Carvalho da Silva"/>
      <SideBar name="Teste Side Bar" open={true}/>

    </ThemeProvider>
  </>
)
export default App;
