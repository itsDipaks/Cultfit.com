import { Image } from '@chakra-ui/react'
import React from 'react'
import Introvideo from '../../Components/Homepage/Introvideo'
import img1 from "../Images/Homepage1.PNG"
import img2 from "../Images/Capture.PNG"
import "./Homepageimg.css"
const Homepage = () => {
  return (
    <div>
      <Introvideo/>
      <Image className='imag1' src={img1}/>
      <Image className='imag1' src={img2}/>
    </div>
  )
}

export default Homepage