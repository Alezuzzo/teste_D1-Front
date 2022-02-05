import React, { useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Modal from './components/Modal'
import Table from './components/Table'
import { BiLeftArrow } from 'react-icons/bi';

const ButtonWrapperStyle = {
  position: 'relative',
  zindex: 1,
}



function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="App">
            <Sidebar/>
            <Header/>

            <div style={ButtonWrapperStyle} onClick={() => console.log('clicked')}>
              <button onClick={() => setIsOpen(true)}>Open Modal</button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Fancy Modal
              </Modal>
            </div>
      </div>
    </>
  )
}

export default App;
