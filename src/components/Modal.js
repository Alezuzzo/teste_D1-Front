import React from 'react';

function Modal() {
  return (
    <div className='Modal'>
        <div className="ModalContent">
            <p className="TextJourney">Nova Jornada</p>
            <p>Dê um nome para essa Jornada</p>
            <input></input>
            <p>Você poderá alterar essa informação depois.</p>
            <button>Continuar</button>
            <button>Cancelar</button>
        </div>    
    </div>
  )
}

export default Modal;
