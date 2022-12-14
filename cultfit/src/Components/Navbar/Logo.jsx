import { Box, Image, StylesProvider } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Navbar.module.css"
const Logo = () => {
  return (
    <>
    <Box className={Styles.logobox}>
    <Link to="/"><Image  className={Styles.logimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png'/></Link>
    </Box>
   
    </>
  )
}

export default Logo