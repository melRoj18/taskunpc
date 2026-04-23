import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TareasProvider } from "./context/TareasContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TareasProvider>
        <App />
      </TareasProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
