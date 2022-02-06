import React from "react";
import {
  BiTable,
  BiPaperPlane,
  BiPlayCircle,
  BiPencil,
  BiBed,
  BiCheck,
} from "react-icons/bi";

function LiJourney() {
  return (
    <div className="LiJourney">
      <ul>
        <li>Jornadas</li>
        <div>
          <li className="IconJourney1">
            <BiTable />
          </li>
          <li>Todos</li>
          <li className="CircleNumber">12</li>
        </div>
        <div>
          <li className="IconJourney2">
            <BiPaperPlane />
          </li>
          <li>Enviando</li>
          <li className="CircleNumber">12</li>
        </div>
        <div>
          <li className="IconJourney3">
            <BiPlayCircle />
          </li>
          <li>Ativadas</li>
          <li className="CircleNumber">15</li>
        </div>
        <div>
          <li className="IconJourney4">
            <BiPencil />
          </li>
          <li>Configurando</li>
          <li className="CircleNumber">25</li>
        </div>
        <div>
          <li className="IconJourney5">
            <BiBed />
          </li>
          <li>Ociosa</li>
          <li className="CircleNumber">45</li>
        </div>
        <div>
          <li className="IconJourney6">
            <BiCheck />
          </li>
          <li>Concluída</li>
          <li className="CircleNumber">65</li>
        </div>
      </ul>
    </div>
  );
}

export default LiJourney;
