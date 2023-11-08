import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Career from '../Pages/Career'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </>
  )
}

export default Routing
