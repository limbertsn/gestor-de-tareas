import './App.css';
import LogoContenedor from './components/LogoContenedor';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoContenedor />
      <div className='contenedor-tareas'>
        <h1>MIS TAREAS</h1>
        <TareaFormulario />
        <Tarea 
          texto = "Aprender React"
          completada={true} />
      </div>
    </div>
  );
}

export default App;
