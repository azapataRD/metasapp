//import React from "react";
import estilos from "./Encabezado.module.css";
import LogoSVG from "../../img/logo.svg";
import PerfilSVG from '../../img/perfil.svg'
import Vinculo from "./Vinculo";

function Encabezado() {
  return (
    <div className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        < LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} href="/">Metas App</a>
      </div>
      <nav >
        <Vinculo
          href="/perfil"
          Icono={PerfilSVG}>
        </Vinculo>
      </nav>
    </div>
  );
}

export default Encabezado;
