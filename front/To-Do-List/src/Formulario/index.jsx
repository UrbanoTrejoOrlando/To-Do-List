import React from 'react';
import { URL_BACKEND } from '../common/servers';
import Swal from 'sweetalert2';

const Formulario = ({ obtenerDatos, filtrarTareas, setEstadoListas }) => {
    const [tarea, setTarea] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");

    const cargarDatos = async (tarea) => {
        const response = await fetch(URL_BACKEND, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea)
        });
        
        if (response.status === 201) {
            Swal.fire({
                title: '¡Tarea creada!',
                text: 'Tu tarea fue agregada con éxito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1800,
                toast: true,
                position: 'top-end',
                timerProgressBar: true
            });
            obtenerDatos();
        }
    }

    const eventoFormulario = (evt) => {
        evt.preventDefault();
        const nuevaTarea = {
            name: tarea,
            description: descripcion,
        }
        cargarDatos(nuevaTarea);
        setTarea("");
        setDescripcion("");
    }

    return (
        <>
            <form onSubmit={eventoFormulario} className='flex flex-column col-9 shadow p-3 rounded mt-4'>
                <h2 className='text-center'>TO-DO LIST</h2>
                <div className='input-group mb-3 col-12'>
                    <label className='input-group-text'>
                        <i className='bi bi-list-task me-1'></i>
                    </label>
                    <input
                        type='text'
                        placeholder='Tarea'
                        onChange={(evt) => setTarea(evt.target.value)}
                        value={tarea}
                        className='form-control'
                        required />
                </div>
                <div className='input-group mb-3 col-12'>
                    <label className='input-group-text'>
                        <i className="bi bi-chat me-1"></i>
                    </label>
                    <input
                        type="text"
                        onChange={evt => setDescripcion(evt.target.value)}
                        value={descripcion}
                        placeholder='Descripcion'
                        className='form-control'
                        required />
                </div>

                <button className='btn btn-primary col-12'>Agregar</button>
            </form>
            <div className='btn-group mt-3 col-9'>
                <button
                    className='btn btn-outline-primary col-4'
                    onClick={() => {
                        setEstadoListas(0);
                        obtenerDatos();
                    }}
                >
                    Todos
                </button>
                <button
                    className='btn btn-primary col-4'
                    onClick={() => setEstadoListas(1)}
                >
                    Pendiente
                </button>
                <button
                    className='btn btn-primary col-4'
                    onClick={() => setEstadoListas(2)}
                >
                    Completado
                </button>
            </div>
        </>
    )
}

export default Formulario;  // Asegúrate de exportarlo como default
