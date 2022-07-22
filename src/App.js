import './App.css';
import { useState } from 'react';
import Formulario from './Componentes/Form.jsx';
import ListaConstactos from './Componentes/ListaContactos.jsx';

function App() {
  //const [nombre, setNombre] = useState('Saul');

  return (
    <div className='App'>
      <Formulario />
      <ListaConstactos/>
    </div>
  );
}

export default App;
