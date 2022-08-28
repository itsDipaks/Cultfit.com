import { Container, StylesProvider } from '@chakra-ui/react'
import React from 'react'
import Leftside from './Leftside'
import Midbox from './Midbox'
import Rightside from './Rightside'
import Styles from "./Footercompo.module.css"
const Footer = () => {
  return (
    <Container className={Styles.footercontainer}>
    <Leftside/>
    <Midbox/>
    <Rightside/>
    </Container>
  )
}

export default Footer