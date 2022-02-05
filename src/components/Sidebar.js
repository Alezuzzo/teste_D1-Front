import React from "react";
import "../App.css";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import d1logo from '../assets/icons/d1logo.png'
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
      <img className="d1Logo" src={d1logo}></img>
      <Tippy content='Análises'>
        <li><BiPieChartAlt2/></li>
      </Tippy>
      <Tippy content='Jornadas'>
        <li><BiRocket/></li>
      </Tippy>
      <Tippy content='Clientes'>
        <li><BiUser/></li>
      </Tippy>
      <Tippy content='CCM Cloud'>
        <li className="CloudIcon"><BiCloud/></li>
      </Tippy>
      <Tippy content='Versão 1'>
        <li><BiRightTopArrowCircle/></li>
      </Tippy>
    </ul>
    <ul className="SidebarData2">
      <Tippy content='Administração'>
        <li><BiDiamond/></li>
      </Tippy>
      <Tippy content='Help Desk'>
        <li><BiWrench/></li>
      </Tippy>
      <Tippy content='Trocar Conta'>
        <li><BiSortAlt2/></li>
      </Tippy>
      <Tippy content='Sair'>
        <li><BiLogInCircle/></li>
      </Tippy>
    </ul>
    
  
  </div>)
}

export default Sidebar;
