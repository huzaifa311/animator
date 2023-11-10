import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Career from '../Pages/Blog'
import Blog from '../Pages/Blog'

const Routing = () => {
  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default Routing
