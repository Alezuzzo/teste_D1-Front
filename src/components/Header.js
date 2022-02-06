import React, { useState } from "react";
import "../App.css";
import acme22x from "../assets/icons/acme22x.png";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import Modal from "./Modal";
import { BiSearch } from "react-icons/bi";


function Header({ closeModal }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="Header">
      <div className="Topnav">
        <div className="aNav">
          <Tippy content="Antônio da Silva">
            <button className="NameButton">A</button>
          </Tippy>
          <div className="ContentAcmeIcon">
            <img className="AcmeIcon" src={acme22x}></img>
          </div>
        </div>
        <div className="NavSpace">
          <i><BiSearch/></i>
          <input
            className="InputNav"
            type="text"
            placeholder="    Buscar"
          ></input>
          <button
            className="ButtonJourney"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            + Nova Jornada
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
