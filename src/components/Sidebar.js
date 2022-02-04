import React from "react";
import "../App.css";
import {BiPieChartAlt2} from 'react-icons/bi'
import {BiRocket} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiCloud} from 'react-icons/bi'
import {BiRightTopArrowCircle} from 'react-icons/bi'
import {BiDiamond} from 'react-icons/bi'
import {BiWrench} from 'react-icons/bi'
import {BiSortAlt2} from 'react-icons/bi'
import {BiLogInCircle} from 'react-icons/bi'

function Sidebar() {
  return (
  <div className="Sidebar">
    <ul className="SidebarData">
      <li className="d1Logo">D1</li>
      <li><BiPieChartAlt2/></li>
      <li><BiRocket/></li>
      <li><BiUser/></li>
      <li><BiCloud/></li>
      <li>----</li>
      <li><BiRightTopArrowCircle/></li>
    </ul>
    <ul className="SidebarData2">
      <li><BiDiamond/></li>
      <li><BiWrench/></li>
      <li><BiSortAlt2/></li>
      <li><BiLogInCircle/></li>
    </ul>
    
  
  </div>)
}

export default Sidebar;
