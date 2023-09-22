import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar/navbar.tsx'
import Sidebar from './components/sidebar/sidebar.tsx'
import Processos from './components/processos/processos.tsx'
import Footer from './components/footer/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Sidebar />
    <Processos />
    <Footer />
  </React.StrictMode>,
)
