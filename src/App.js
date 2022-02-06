import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LiJourney from "./components/LiJourney";
import TableJourney from "./components/TableJourney";
import api from './api';



function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Header />
        <div className="TableApp">
          <LiJourney />
          <TableJourney/>
        </div>
      </div>
    </>
  );
}

export default App;
