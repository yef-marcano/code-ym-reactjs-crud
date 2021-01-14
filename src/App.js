import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import Micomponente from "./components/Micomponente";

function App() {
  // pruebas de variables
  let nombre = "Yeferson Marcano";

  // pruebas de variables dentro de otra
  let presentacion = <h2> YM - {nombre}</h2>;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src={logo} className="App-logo" alt="logo" width="20%" />
          <h3 className="description-name">
            Hola soy Yeferson Marcano y este es mi CRUD de practica.
          </h3>
        </p>
        {presentacion}
        <section className="componentes">
          {/* importar mi componente */}
          <Micomponente />
        </section>
      </header>
    </div>
  );
}

export default App;
