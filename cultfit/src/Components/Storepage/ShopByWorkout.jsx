import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Store.module.css"
const ShopByWorkout = () => {
  return (
    <>
        <Box className={Styles.Shopworkout}>
            <Box className={Styles.shopbyworkimg}><Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png"/></Box>
            <Box className={Styles.shopbyworkimg}><Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png"/></Box>
            <Box className={Styles.shopbyworkimg}><Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png"/></Box>
            <Box className={Styles.shopbyworkimg}><Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png"/></Box>
        </Box>

    </>
  )
}

export default ShopByWorkout