import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LiJourney from "./components/LiJourney";
import TableJourney from "./components/TableJourney";

function App() {
  const [dataJourney, setDataJourney] = useState([])

  return (
    <>
      <div className="App">
        <Sidebar />
        <Header />
        <div className="TableApp">
          <LiJourney handleClick = {setDataJourney} />
          <TableJourney dataJourney={dataJourney} />
        </div>
      </div>
    </>
  );
}

export default App;
