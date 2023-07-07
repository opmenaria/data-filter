import './App.css';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Users from './components/Users';
import Form from './components/Form';

function App() {
  const [loginData, setLoginData] = useState({ "email": '', "password": "" })

  const handleUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <>
      <div className=" bg-cyan-100 h-screen">
        <Navbar />
        <div className='pt-14 flex flex-col'>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/users' element={<Users />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App


