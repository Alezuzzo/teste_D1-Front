import React from 'react';
import "../App.css"

function Header() {
  return (
    <div className="Header">
        <div className="Topnav">
            <div className="aNav">
                <button className="NameButton">A</button>
                <p className="AcmeIcon"><img src="./assets"></img></p>
            </div>
            <div className="NavSpace">
                <input className="InputNav" type="text" placeholder="Buscar"></input>
                <button className="ButtonJourney">+ Nova Jornada</button>
            </div>
        </div>
    </div>
  )
}

export default Header;
