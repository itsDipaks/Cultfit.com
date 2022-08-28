import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Carepage from './Pages/Carepage'
import Fitnesspage from './Pages/Fitnesspage'
import Homepage from './Pages/Homepage'
<<<<<<< HEAD
import Login from './Pages/Login.jsx'
=======
import Login from './Pages/Login'
>>>>>>> 80fb68d8ca52cb1eb4a01d0a11fdc5533b151143
import Mindpage from './Pages/Mindpage'
import ProductInfo from './Pages/ProductInfo'
import Signup from './Pages/Signup'
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
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Storepage/:id' element={<ProductInfo/>}/>
        </Routes>
    </div>
  )
}
export default Allrouts