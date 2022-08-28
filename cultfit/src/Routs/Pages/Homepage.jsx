import { Image } from '@chakra-ui/react'
import React from 'react'
import Dwonloadapp from '../../Components/Homepage/Dwonloadapp'
import Introvideo from '../../Components/Homepage/Introvideo'
import img1 from "../Images/Homepage1.PNG"
import img2 from "../Images/Capture.PNG"
import "./Homepageimg.css"
const Homepage = () => {
  return (
    <div>
      <Introvideo/>
<<<<<<< HEAD
      <Image className='imag1' src={img1}/>
      <Image className='imag1' src={img2}/>
=======
      <Dwonloadapp/>
>>>>>>> 80fb68d8ca52cb1eb4a01d0a11fdc5533b151143
    </div>
  )
}

export default Homepage