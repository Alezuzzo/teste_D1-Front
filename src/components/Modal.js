import React, {useState} from "react";

function Modal({ closeModal }) {
  
  return (
    <div className="ModalBackground">
      <div className="ModalContainer">
        <div className="Title">
          <h1>Nova jornada</h1>
          <p>Dê um nome para essa jornada</p>
        </div>
        <div>
          <input className="InputTextModal" placeholder="Nome"></input>
        </div>
        <div className="TextDown">
          <p>Você poderá alterar essas informações depois</p>
        </div>
        <div className="Footer">
          <button className="buttonCancel" onClick={() => {
          closeModal(false);
          }}>Continuar</button>
          <button onClick={() => {
          closeModal(false);
          }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
