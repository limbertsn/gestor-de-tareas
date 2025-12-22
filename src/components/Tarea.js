import React from "react";
import "../stylesheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({ texto, completada }) {
  return (
    <div className={completada ? "contenedor-tarea completada" : "contenedor-tarea"}>
      <div className="texto-tarea">
        {texto}
      </div>
      <div className="contenedor-tarea-iconos">
        <AiOutlineCloseCircle className="icono-tarea" />
      </div>
    </div>
  );
}

export default Tarea;