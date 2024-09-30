import { useState } from 'react'
// import './App.css'
import './index.css'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function App() {

  return (
    <div className="h-[100vh] flex justify-center items-center text-white bg-cover" style={{"backgroundImage":"url('../src/assets/bg2.jpg')"}}>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>

    </div>
  )
}

export default App
