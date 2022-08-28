import React, {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, Image, Text} from "@chakra-ui/react";
import Styles from "../Store.module.css";
import { Link } from "react-router-dom";

const Smartbike = () => {
  const [tradmil, settradmil] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios
      .get("https://cultfitdipaksapi.herokuapp.com/Products?category=SMARTBIKE")
      .then((res) => {
        settradmil(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>

      <Box className={Styles.maincont}>
      <Box>
<p className={Styles.titletext}>SMARTBIKE</p>

</Box>
        <div className={Styles.tradmilcontainer} >
          {tradmil?.map((tr) => (
           <Link to={`/Storepage/${tr.id}`}> <div className={Styles.itembox}>
              <Box>
                <Image className={Styles.images}  src={tr.img1} />
              </Box>
              <Box className={Styles.productname}>
              {tr.name}

              </Box>
              <Box className={Styles.pricebox}>
             <p>  ₹<span className={Styles.price}>{tr.price}</span></p>
              <p className={Styles.actualprice}>₹{tr.actualPrice}</p>
              <p className={Styles.percentage}> {Math.floor(tr.price/tr.actualPrice*100-100)}% Off</p>

             </Box>

            </div>
            </Link>
          ))}
        </div>
      </Box>
   </>
  );
};

export default Smartbike;