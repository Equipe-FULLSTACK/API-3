import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import Process from "./pages/Process"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/processos" element={<Process />} />
      </Routes>
    </>
  )
}

export default App
