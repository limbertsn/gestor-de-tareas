import React, { useState } from "react";
import "../stylesheets/ListaDeTareas.css"
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

/*<></> Esta estructura reemplaza a un div, cuando no es encesario agregarlo, es un Fragment*/

function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="contenedor-lista-tareas">
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada} 
              eliminarTarea={eliminarTarea}/>
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;