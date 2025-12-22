import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css"
import { v4 as uuidv4 } from "uuid"

function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = evnt => {
    //target.value saca lo que tiene el input
    setInput(evnt.target.value)
  }

  const manejarEnvio = evnt => {
    //Esto evita que se cargue toda la aplicacion al momento de mandar el formulario
    evnt.preventDefault();

    const tareaNueva = {
      //Este paquete actualiza el id automaticamente
      id: uuidv4(),
      texto: input,
      completada: false
    }
    
    props.onSubmit(tareaNueva);
    
  }

  return (
    <form 
      className="formulario-tarea"
      onSubmit={manejarEnvio} >
      <input
        className="input-tarea"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio} />
      <button className="boton-tarea" >
        Agregar Tarea
      </button>
    </form>
  );
} 

export default TareaFormulario;