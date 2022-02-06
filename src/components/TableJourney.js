import React from "react";
import {
  BiPaperPlane,
  BiPlayCircle,
  BiPencil,
  BiBed,
  BiCheck,
} from "react-icons/bi";

function TableJourney({dataJourney}) {

  console.log(dataJourney);

  const changeIdToName = (id) =>{
    switch (id) {
      case 1:
        return 'Enviando'
      case 2:
        return 'Ativadas'
      case 3:
        return 'Configurando'
      case 4:
        return 'Ociosa'
      case 5:
        return 'Concluída'
      default:
        return '';
    }
  }

  const changeIdToIcon = (id) =>{
    switch (id) {
      case 1:
        return <th className="IconTable0">
                <BiPaperPlane/>
               </th>
      case 2:
        return <th className="IconTable1">
                <BiPlayCircle />
               </th>
      case 3:
        return <th className="IconTable2">
                <BiPencil />
               </th>
      case 4:
        return <th className="IconTable3">
                <BiBed />
               </th>
      case 5:
        return <th className="IconTable4">
                <BiCheck />
               </th>
      default:
        return '';
    }
  }

  return (
    <div className="TableJourney">
      <table>
        <tr className="TiTable">
          <th>Nome</th>
          <th>Destinatários</th>
          <th>Sucesso</th>
          <th>Status</th>
        </tr>
        {dataJourney?.map((item,index)=>(
        <tr className="LineTable">
          <th>{item.name}</th>
          <th>{item.recipients}</th>
          <th>{item.success}</th>
          <div>
            {changeIdToIcon(item.status)}
            <th>{changeIdToName(item.status)}</th>
          </div>
        </tr>
        ))}
        
      </table>
    </div>
  );
}

export default TableJourney;
