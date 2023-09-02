import React from 'react'


import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main'
const App = () => {
  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main'>
        <Main />
      </div>
    </div>
  )
}

export default App