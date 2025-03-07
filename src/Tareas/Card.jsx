import React, { useState } from 'react'

const Card = ({isComplete, titulo, descripcion}) => {
    const [isCompleteState, setIsCompleteState] = useState(isComplete);
    
    return (
        <div className="card col-12 p-2 shadow-sm flex-row
        justify-content-between mb-2">
            <div className="col-8">
                <h3 className= {isCompleteState?"text-secondary text-decoration-line-through":
                    'text-primary'}>{titulo}</h3>
                <p className='text-secondary'>{descripcion }</p>
            </div>
            <i className={isCompleteState?
                'bi bi-trash text-danger fs-4':
                'bi bi-journal-check text-success fs-4'
            }

            onClick={()=>{
                console.log("clic a completar");
                isComplete = !isComplete;
                setIsCompleteState(!isCompleteState);
            }
                
            }

            ></i>
        </div>
    )
}

export default Card