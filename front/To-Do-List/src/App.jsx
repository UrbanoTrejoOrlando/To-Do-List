import React, { useEffect, useState } from 'react'
import Header from './Header';
import Formulario from './Formulario';
import Tareas from './Tareas';
import { URL_BACKEND } from './common/servers';

const App = () => {
  // const [contador, setContador] = useState(0);
  const [listaTareas, setlistaTareas] = useState([]);
  const [estadoLista, setEstadoListas] = useState(0);


  const obtenerDatos = async ()=>{
    const response = await fetch(URL_BACKEND);
    if (response.status == 200){
      const tareas = await response.json();
      setlistaTareas(tareas);
      console.log(tareas);
    }
    
  }

  const filtrarTareas = (estado) => {
    if (estado === "todos") {
      obtenerDatos(); // Recarga todas las tareas
    } else {
      const filtradas = listaTareas.filter(t => t.status === (estado === "completado"));
      setlistaTareas(filtradas);
    }
    setEstadoListas(estado);
  };
  

  useEffect(()=>{
    obtenerDatos();
    [];
  },[]);

  return (
    <> 
    <Header/>
    <Formulario 
      obtenerDatos = {obtenerDatos}
      setEstadoListas = {setEstadoListas}
      filtrarTareas = {filtrarTareas}
    
    />

    <Tareas 
      listaTareas = {listaTareas}
      setEstadoListas = {setEstadoListas}
      obtenerTareas = {obtenerDatos}
      estadoLista={estadoLista}
    />






    </>
    
  );
}
export default App
//En el evento del boton como recive un parametro se agregan {}
