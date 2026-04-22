//import React from "react";
import LogoSVG from "../../img/logo.svg";
import PerfilSVG from '../../img/perfil.svg'
//import Vinculo from "./Vinculo";
import estilos from "./Encabezado.module.css"
import Vinculo from "./Vinculo";

function Encabezado() {
  return (
    <div className={estilos.ecabezado}>
      <div className={estilos.contenedor}>
        < LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} href="/">Metas App</a>
      </div>
      <nav >        
        <Vinculo
          to="/perfil"
          Icono={PerfilSVG}>
        </Vinculo>        
      </nav>     
    </div>
  );
}

export default Encabezado;
