import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Footercompo.module.css"
const Rightside = () => {
  return (
    <Box className={Styles.rightbox}>
        <Box>
            <Image className={Styles.playlogo}  src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png'/>
        </Box>
        <Box>
            <Image className={Styles.playlogo} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png'/>
        </Box>
        <Box className={Styles.followlogobox}>
            <Image className={Styles.followimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg'/>
            <Image className={Styles.followimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg'/>
            <Image className={Styles.followimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg'/>
            <Image className={Styles.followimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg'/>
            <Image className={Styles.followimg} src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg'/>
        </Box>
    </Box>
  )
}

export default Rightside