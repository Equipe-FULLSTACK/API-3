import React from 'react';
import GlobalStyle from "./styles/global.ts"
import { ThemeProvider } from 'styled-components';

import dark from './styles/Theme/dark.ts';
import HomePage from './pages/Layout/HomePage.tsx';

const App:React.FC = ()=> (

  <>
    
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <HomePage name={'Home Page'}/>
    </ThemeProvider>
  </>
)
export default App;
