import React from "react";
import "../stylesheets/TareaFormulario.css"

function TareaFormulario(props) {
  return (
    <form className="formulario-tarea">
      <input
        className="input-tarea"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto" />
      <button className="boton-tarea">
        Agregar Tarea
      </button>
    </form>
  );
} 

export default TareaFormulario;