import React from 'react';
import Swal from 'sweetalert2';
import Card from './Card';
import { URL_BACKEND } from '../common/servers';

const Tareas = ({ listaTareas, setlistaTareas, setEstadoListas, obtenerTareas, estadoLista }) => {

  const delet = async (id) => {
    const confirm = await Swal.fire({
      title: '¿Eliminar tarea?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      const response = await fetch(`${URL_BACKEND}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        Swal.fire({
          title: 'Eliminada',
          text: 'La tarea fue eliminada con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: 'top-end',
          timerProgressBar: true
        });

        obtenerTareas("");
        setEstadoListas(0);
      }
    }
  };

  const complete = async (id) => {
    await fetch(`${URL_BACKEND}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: true })
    });

    Swal.fire({
      title: '¡Completada!',
      text: 'La tarea ha sido marcada como completada.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end',
      timerProgressBar: true
    });

    obtenerTareas();
    setEstadoListas(2);
  };

  const tareasFiltradas = listaTareas.filter((tarea) => {
    if (estadoLista === 1) return tarea.status === false; // pendientes
    if (estadoLista === 2) return tarea.status === true;  // completadas
    return true; // todas
  });

  return (
    <section className='flex flex-column justify-content-center align-items-center p-4 col-9'>
      {tareasFiltradas.map((Tarea, index) => (
        <Card
          key={index}
          isComplete={Tarea.status}
          Eliminar={() => delet(Tarea._id)}
          titulo={Tarea.name}
          descripcion={Tarea.description}
          Completado={() => complete(Tarea._id)}
        />
      ))}
    </section>
  );
};

export default Tareas;
