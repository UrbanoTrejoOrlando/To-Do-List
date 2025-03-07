import React from 'react'

const Formulario = ({setlistaTareas}) => {

    const [tarea,setTarea] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");

    const eventoFormulario = (evt) => {
        evt.preventDefault();
        const nuevaTarea ={
            titulo: tarea,
            descripcion,
            status: false
        }
        setlistaTareas((historial) => [nuevaTarea,  ...historial])
        setTarea("");
        setDescripcion("");
    }



  return (
    <>
        <form
        onSubmit={eventoFormulario}
        className='flex flex-column col-9 shadow p-3 redounder mt-4'>
            <h2 className='text-center'>TO-DO LIST</h2>
            <div className='input-group mb-3 col-12'>
                <label className='input-group-text'>
                    <i className='bi bi-list-task me-1'></i>
                    </label>
                <input 
                    type='text'
                    placeholder='Tarea'
                    onChange={(evt)=>setTarea(evt.target.value)}
                    value={tarea}
                    className='form-control'
                    required/>
            </div>
            <div className='input-group mb-3 col-12'>
                <label className='input-group-text'>
                    <i className="bi bi-chat me-1"></i>
                </label>
                <input 
                    type="text"
                    onChange={evt=>{
                        setDescripcion(evt.target.value)
                        //console.log(descripcion);
                    }}
                    value={descripcion}
                    placeholder='Descripcion'
                    className='form-control'
                    required/>
            </div>
            
            <button className='btn btn-primary col-12'>Agregar</button>
        </form>
        <div className='btn-group mt-3 col-9'>
            <button className='btn btn-outline-info col-4'>Todos </button>
            <button className='btn btn-info col-4'>Pendiente</button>
            <button className='btn btn-info  col-4'>completado</button>
        </div>
    </>

  )
}

export default Formulario