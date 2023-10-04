import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Processos from "./components/routes/processsos/processos.tsx";
import Login from "./components/routes/login/login.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
      <Login />

  </React.StrictMode>
);
