//import React from "react";
import "./Encabezado.css";
import Logo from "../../img/logo.svg";
import Perfil  from '../../img/perfil.svg'

function Encabezado() {
  return (
    <div className="encabezado">
      <div className="titulo">
        < Logo className="logo"/>
        <a className="app" href="/">Metas App</a>
      </div>
      <nav >
        <a href="/perfil" className="vinculo">
          <Perfil className="icono"></Perfil>
        </a>
      </nav>
    </div>
  );
}

export default Encabezado;
