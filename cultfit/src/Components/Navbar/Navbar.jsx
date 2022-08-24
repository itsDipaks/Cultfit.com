import React from 'react'
import { Container } from '@chakra-ui/react'
import styles from "./Navbar.module.css"
import Contentmenu from './Contentmenu'
import Logo from './Logo'
import Navtabs from './Navtabs'

const Navbar = () => {
  return (
  <>
  <Container maxW='container.sm' className={styles.nav_container} >
    <Logo/>
<Contentmenu/>
<Navtabs/>
  </Container>
  
  </>
  )
}

export default Navbar