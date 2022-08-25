import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import homeimg from "../Images/dawonloadhome.PNG"
import Styles from "./Homepagecompo.module.css"
const Dwonloadapp = () => {
  return (
    <>
        <Box className={Styles.divimg}>
            <Image src={homeimg}/>
        </Box>

    </>
  )
}

export default Dwonloadapp