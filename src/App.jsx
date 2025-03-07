import React, { useState } from 'react'
import Header from './Header';
import Formulario from './Formulario';
import Tareas from './Tareas';

const App = () => {
  // const [contador, setContador] = useState(0);
  const [listaTareas, setlistaTareas] = useState([]);

  return (
    <> 
    <Header/>
    <Formulario setlistaTareas = {setlistaTareas}/>
    <Tareas listaTareas = {listaTareas} setlistaTareas = {setlistaTareas}/>
    </>
    
  );
}
export default App
//En el evento del boton como recive un parametro se agregan {}
