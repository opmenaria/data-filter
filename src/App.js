import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Users from './components/Users';
function App() {

  return (
    <>
      <div className=" bg-cyan-100 h-screen">
        <Navbar />
        <div className='pt-14 flex flex-col'>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App


