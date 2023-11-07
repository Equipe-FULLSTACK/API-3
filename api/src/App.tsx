import React from 'react';
import GlobalStyle from "./styles/global.ts"
import { ThemeProvider } from 'styled-components';

import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import { Cadastro } from './pages/Cadastro'

import dark from '../src/styles/Theme/Dark.ts';
import HomePage from './Components/Layout/HomePage.tsx';


import { Provider } from 'react-redux';
import store from './store/configureStore.ts';
import Lista from './pages/Lista.tsx';
import JSONall from './pages/JSONall.tsx';
import JSONprocess from './pages/JSONprocess.tsx';
import JSONtask from './pages/JSONtask.tsx';
import Notificacao from './pages/Notificacao.tsx';
import Admin from './pages/Admin.tsx';


const App:React.FC = ()=> (
 <>
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/processos" element={<HomePage />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/json" element={<JSONall />} />
          <Route path="/jsonprocess" element={<JSONprocess />} />
          <Route path="/jsontask" element={<JSONtask />} />
          <Route path="/notificacao" element={<Notificacao />}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  </>
)

export default App;
