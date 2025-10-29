import React from 'react';

const Card = ({ isComplete, titulo, descripcion, Completado, Eliminar }) => {
    return (
        <div className="card col-12 p-2 shadow-sm flex-row justify-content-between mb-2">
            <div className="col-10">
                <h3 className={isComplete ? "text-secondary text-decoration-line-through" : 'text-primary'}>
                    {titulo}
                </h3>
                <p className='text-secondary'>{descripcion}</p>
            </div>

            {/* Ícono que cambia según el estado */}
            <i
                className={
                    isComplete
                        ? 'bi bi-trash text-danger fs-4'       // Si está completa, muestra ícono de borrar
                        : 'bi bi-journal-check text-success fs-4' // Si no, muestra ícono de completar
                }
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (isComplete) {
                        Eliminar();  // Si está completa, se elimina
                    } else {
                        Completado();  // Si no está completa, se marca como completada
                    }
                }}
            ></i>
        </div>
    );
};

export default Card;
