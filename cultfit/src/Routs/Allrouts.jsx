import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carepage from './Pages/Carepage'
import Fitnesspage from './Pages/Fitnesspage'
import Homepage from './Pages/Homepage'
import Mindpage from './Pages/Mindpage'
import Storepage from './Pages/Storepage'

const Allrouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/Fitnesspage' element={<Fitnesspage/>}/>
            <Route path='/Carepage' element={<Carepage/>}/>
            <Route path='/Mindpage' element={<Mindpage/>}/>
            <Route path='/Storepage' element={<Storepage/>}/>
            <Route path='/Storepage/'
        </Routes>

    </div>
  )
}

export default Allrouts