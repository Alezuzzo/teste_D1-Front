import React from "react";
import {
  BiPaperPlane,
  BiPlayCircle,
  BiPencil,
  BiBed,
  BiCheck,
} from "react-icons/bi";

function TableJourney() {
  return (
    <div className="TableJourney">
      <table>
        <tr className="TiTable">
          <th>Nome</th>
          <th>Destinatários</th>
          <th>Sucesso</th>
          <th>Status</th>
        </tr>
        <tr className="LineTable">
          <th>Cobrança</th>
          <th>20.210.000</th>
          <th>30%</th>
          <div>
            <th className="IconTable1">
              <BiPaperPlane />
            </th>
            <th>Enviando</th>
          </div>
        </tr>
        <tr className="LineTable">
          <th>Promoção</th>
          <th>1.940.000</th>
          <th>50%</th>
          <div>
            <th className="IconTable3">
              <BiPencil />
            </th>
            <th>Configurando</th>
          </div>
        </tr>
        <tr className="LineTable">
          <th>Cobrança</th>
          <th>12.210.000</th>
          <th>60%</th>
          <div>
            <th className="IconTable1">
              <BiPaperPlane />
            </th>
            <th>Enviando</th>
          </div>
        </tr>
      </table>
    </div>
  );
}

export default TableJourney;
