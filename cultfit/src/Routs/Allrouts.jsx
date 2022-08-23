import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Allrouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<h1>Homepage</h1>}/>
        </Routes>

    </div>
  )
}

export default Allrouts