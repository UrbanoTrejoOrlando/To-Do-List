import React from 'react'
import Card from './Card'

const Tareas = ({listaTareas, setlistaTareas}) => {
  return (
    <section 
    className='flex flex-column justify-content-center aling-items-center p-4 col-9'>
      {listaTareas.map((Tarea, index)=>{
            return (
              <Card 
                key={index}
                isComplete = {Tarea.status}
                titulo = {Tarea.titulo}
                descripcion = {Tarea.descripcion}
              />
            )
          }
        )
      }
    
  
    </section>
  )
}

export default Tareas

// clases para las sombras shadow-none, shadow-sm, shadow, shadow-lg.

// nuevo proyecto expres cors 