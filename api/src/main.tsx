import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import Navbar from './components/navbar/navbar.tsx'
import Processos from './components/processos/processos.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Navbar />
    <body>
    <Processos />
    
    </body>
  </React.StrictMode>,
)
