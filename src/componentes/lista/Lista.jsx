import Meta from "./Meta";
import { Contexto } from "../../servicios/Memoria";
import { useContext } from "react";

function Lista() {    
    const [estado, enviar] = useContext(Contexto);
    return (
        estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)
    )
}

export default Lista;