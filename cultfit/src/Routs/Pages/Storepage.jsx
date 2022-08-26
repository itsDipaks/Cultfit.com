import React from 'react'
import Accessories from '../../Components/Storepage/Categories/Accessories'
import Bottomwear from '../../Components/Storepage/Categories/Bottomwear'
import Cycle from '../../Components/Storepage/Categories/Cycle'
import Exercisebike from '../../Components/Storepage/Categories/Exersizebike'
import Leggings from '../../Components/Storepage/Categories/Leggings'
import Smartbike from '../../Components/Storepage/Categories/Smartbike'
import Spinbikes from '../../Components/Storepage/Categories/Spinbikes'
import Topwear from '../../Components/Storepage/Categories/Topwear'
import Tradmil from '../../Components/Storepage/Categories/Tradmil'
import Introslider from '../../Components/Storepage/Introslider'
import ShopByWorkout from '../../Components/Storepage/ShopByWorkout'
import Spotlight from '../../Components/Storepage/Spotlight'
import Styles from "./Pages.module.css"
const Storepage = () => {
  return (<>
    <div className={Styles.Storepage}>
 <Introslider/>

 <Topwear/>
 <Tradmil/>
 <Leggings/>

<Spinbikes/>
<Bottomwear/>

 <Cycle/>
 <Smartbike/>
 <Exercisebike/>
 <Accessories/>
 <ShopByWorkout/>
<Spotlight/>
    </div>
  
    </>
  )
}

export default Storepage