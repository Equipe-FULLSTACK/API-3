import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Processos from "./components/processos/processos.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container" id="body-container">
      <Processos />
    </div>
  </React.StrictMode>
);
