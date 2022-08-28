import React from 'react'
import { Container } from '@chakra-ui/react'
import styles from "./Navbar.module.css"
import Contentmenu from './Contentmenu'
import Logo from './Logo'
import Navtabs from './Navtabs'

const Navbar = () => {
  return (
  <>
  <nav maxW='1480px' className={styles.nav_container} >
    <Logo/>
<Contentmenu/>
<Navtabs/>
  </nav>
<<<<<<< HEAD

=======
  
>>>>>>> 80fb68d8ca52cb1eb4a01d0a11fdc5533b151143
  </>
  )
}

export default Navbar