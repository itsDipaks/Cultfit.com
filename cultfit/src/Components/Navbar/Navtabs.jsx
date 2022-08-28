import {Box, Button, Image} from "@chakra-ui/react";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css"
const Navtabs = () => {

 const navigate=useNavigate()
  return (
    <>
      <Box className={Styles.navtabbox}>
       
        <Box onClick={()=>navigate("/Login")} className={Styles.tab}>
          <Image className={Styles.tabimg} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" />
        </Box>
        <Box className={Styles.tab}>
          <Image className={Styles.tabimg} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" />
        </Box>
      </Box>
    </>
  );
};
export default Navtabs