import './App.css';
import LogoContenedor from './components/LogoContenedor';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoContenedor />
      <div className='contenedor-tareas'>
        <h1>MIS TAREAS</h1>
        <Tarea 
          texto = "Aprender React"
          completada={true} />
      </div>
    </div>
  );
}

export default App;
