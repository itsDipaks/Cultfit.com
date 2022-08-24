import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css"


const links=[
  {
    to:"/",
    title:"Home"
  },
  {
    to:"/Fitnesspage",
    title:"FITNESS "
  },
  {
    to:"/Carepage",
    title:"CARE"
  },
  {
    to:"/Mindpage",
    title:"MIND"
  },
  {
    to:"/Storepage",
    title:"STORE "
  }
]


const Contentmenu = () => {
  return (
    <>
 <Box className={Styles.navlinkbox}>
      {links.map((link)=><NavLink className={({isActive}) =>
            isActive ? Styles.activelink : Styles.deactivelink
          } to={link.to}>{link.title}</NavLink>)}
      </Box> 
      </>
  );
};

export default Contentmenu;
