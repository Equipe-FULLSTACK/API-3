import React from 'react';
import GlobalStyle from "./styles/global.ts"
import { ThemeProvider } from 'styled-components';

import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import { Cadastro } from './pages/Cadastro'

import dark from './styles/Theme/dark.ts';
import HomePage from './Components/Layout/HomePage.tsx';


import { Provider } from 'react-redux';
import store from './store/index.ts';


const App:React.FC = ()=> (

  <>
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/processos" element={<HomePage />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  </>
)

export default App;
