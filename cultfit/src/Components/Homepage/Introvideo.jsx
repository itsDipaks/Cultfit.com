import { Box } from '@chakra-ui/react'
import React from 'react'
import video from "../Images/Introvideo.mp4"

import Styles from "./Homepagecompo.module.css"

const Introvideo = () => {
  return (
  
    <>
    <Box className={Styles.videobox}>
    <video className={Styles.video} src={video} autoPlay loop></video>
    </Box>
    </>
  )
}

export default Introvideo