import React from "react";
import Accessories from "../../Components/Storepage/Categegories/Accessories";
import Bottomwear from "../../Components/Storepage/Categegories/Bottomwear";
// import Cycle from "../../Components/Storepage/Categegories/Cycle";
import Exercisebike from "../../Components/Storepage/Categegories/Exercisebike";
import Leggings from "../../Components/Storepage/Categegories/Leggings";
import Smartbike from "../../Components/Storepage/Categegories/Smartbike";
import Spinbikes from "../../Components/Storepage/Categegories/Spinbikes";
import Topwear from "../../Components/Storepage/Categegories/Topwear";
import Tradmil from "../../Components/Storepage/Categegories/Tradmil";
import Introslider from "../../Components/Storepage/Introslider";
// import ShopByWorkout from "../../Components/Storepage/Categegories/";
// import Spotlight from "../../Components/Storepage/Categegories/Spotlight";
import Styles from "./Pages.module.css";
const Storepage = () => {
  return (
    <>
      <div className={Styles.Storepage}>
        <Introslider />

        <Topwear />
        <Tradmil />
        <Leggings />

        <Spinbikes />
        <Bottomwear />

        {/* <Cycle /> */}
        <Smartbike />
        <Exercisebike />
        <Accessories />
        {/* <ShopByWorkout /> */}
        {/* <Spotlight /> */}
      </div>
    </>
  );
};

export default Storepage;
