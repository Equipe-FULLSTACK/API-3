import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./pages/login/login.tsx";
import Footer from "./pages/Footer/Footer.tsx";

import SideBar from "./pages/Slidebar/Slidebar.tsx";
import Process from "./pages/Process/Process.tsx";
import NavBar from "./pages/Navbar/Navbar.tsx";
import Layout from "./pages/Layout/Layout.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Layout name='Teste Layout'/>
      <NavBar name={'Thiago Carvalho da Silva'}/>
      {/* <Login/> */}
      <SideBar name='Teste Side Bar'/>
      <Process name='Processos'/>
      <Footer name='Thiago'/>
      
  </React.StrictMode>
);
