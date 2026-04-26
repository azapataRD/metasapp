import "../../App.css";
import { useContext } from "react";
import { Contexto } from "../../servicios/Memoria";

function Modal({ children }) {

    return (
        <div className="fixed items-center inset-0 bg-gray-500 bg-opacity--75" >
            <div className="mx-auto">
                {children}
            </div>
        </div>);
}

export default Modal;