import React from 'react'
import Introslider from '../../Components/Storepage/Introslider'
import ShopByWorkout from '../../Components/Storepage/ShopByWorkout'
import Spotlight from '../../Components/Storepage/Spotlight'
import Styles from "./Pages.module.css"
const Storepage = () => {
  return (
    <div className={Styles.Storepage}>
 <Introslider/>
 <ShopByWorkout/>
<Spotlight/>
    </div>
  )
}

export default Storepage