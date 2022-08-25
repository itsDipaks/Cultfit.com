import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Footercompo.module.css"
const Leftside = () => {
  return (
    <>
        <Box className={Styles.Leftbox}>
            <Box>
                <Image className={Styles.logofooter} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png'/>
            </Box>
            <Box >
                <Text>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</Text>
            </Box>
        </Box>

    </>
  )
}

export default Leftside