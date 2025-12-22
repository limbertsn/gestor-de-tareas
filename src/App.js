import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import LogoContenedor from './components/LogoContenedor';

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoContenedor />
      <div className='contenedor-tareas'>
        <h1>MIS TAREAS</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
