import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  /*
     Usando o React.StrictMode com o intuito de evitar que 
     erros passem despercebidos na aplicação.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
