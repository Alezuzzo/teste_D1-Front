import React, { useEffect, useState } from "react";
import {
  BiTable,
  BiPaperPlane,
  BiPlayCircle,
  BiPencil,
  BiBed,
  BiCheck,
} from "react-icons/bi";
import api from "../api";

function LiJourney( {handleClick} ) {

  const [journeyInfo, setJourneyInfo] = useState([]);

  const getInfo = async() =>{
    try {
      const response = await api.get("filter");
      setJourneyInfo(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(()=>{
    getInfo();
  },[])

  const getJourneybyId = async(id) =>{
    try { 
    let response;    
      
    if(id){
      response = await api.get("journey/"+id);
    }else{
      response = await api.get("journey/");
    }
      handleClick(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(()=>{
    getJourneybyId(1);
  },[])

  return (
    <div className="LiJourney">
      <ul>
        <li>Jornadas</li>
        <div>
          <li className="IconJourney1">
            <BiTable />
          </li>
          <li onClick = {()=>getJourneybyId()}>Todos</li>
          <li className="CircleNumber">{journeyInfo[0]?.quantity}</li>
        </div>
        <div>
          <li className="IconJourney2">
            <BiPaperPlane />
          </li>
          <li onClick = {()=>getJourneybyId(1)}>Enviando</li>
          <li className="CircleNumber">{journeyInfo[1]?.quantity}</li>
        </div>
        <div>
          <li className="IconJourney3">
            <BiPlayCircle />
          </li>
          <li onClick = {()=>getJourneybyId(2)}>Ativadas</li>
          <li className="CircleNumber">{journeyInfo[2]?.quantity}</li>
        </div>
        <div>
          <li className="IconJourney4">
            <BiPencil />
          </li>
          <li onClick = {()=>getJourneybyId(3)}>Configurando</li>
          <li className="CircleNumber">{journeyInfo[3]?.quantity}</li>
        </div>
        <div>
          <li className="IconJourney5">
            <BiBed />
          </li>
          <li onClick = {()=>getJourneybyId(4)}>Ociosa</li>
          <li className="CircleNumber">{journeyInfo[4]?.quantity}</li>
        </div>
        <div>
          <li className="IconJourney6">
            <BiCheck />
          </li>
          <li onClick = {()=>getJourneybyId(5)}>Concluída</li>
          <li className="CircleNumber">{journeyInfo[5]?.quantity}</li>
        </div>
      </ul>
    </div>
  );
}

export default LiJourney;
