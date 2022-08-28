import React, {useEffect} from "react";
import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Styles from "./Productinfo.module.css";
import {Box, Button, Image} from "@chakra-ui/react";
const ProductInfo = () => {
  const param = useParams();

  const [Productdata, setProductdata] = useState([]);
  useEffect(() => {
    getProduct(param.id);
  }, [param.id]);

  const getProduct = (id) => {
    axios
      .get("https://cultfitdipaksapi.herokuapp.com/Products/" + id)
      .then((res) => {
        setProductdata([res.data]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(Productdata);

  return (
    <div className={Styles.Productinfocontainer}>
      {Productdata?.map((pro) => (
        <div key={pro.id} className={Styles.outerdiv}>
          <Box className={Styles.Leftbox}>
            <Box className={Styles.imagediv}>
              <Image className={Styles.img} src={pro.img1} />
              <Image className={Styles.img} src={pro.img2} />
            </Box>

            <Box className={Styles.imagediv}>
              <Image className={Styles.img} src={pro.img3} />
              <Image className={Styles.img} src={pro.img4} />
            </Box>

          </Box>

          <Box className={Styles.Rightbox}>
            <h3>{pro.type}</h3>
            <h2>{pro.name}</h2>

            <Box className={Styles.pricebox}>
              <p> ₹{pro.price}</p>
              <h1> ₹{pro.actualPrice}</h1>
              <h2>
                {Math.floor((pro.price / pro.actualPrice) * 100 - 100)}% Off
              </h2>
            </Box>
            <Box className={Styles.desc}>{pro.desc}
            </Box>

            <Button className={Styles.Addcartbtn} colorScheme='red'>Add To Cart</Button>

          </Box>


        </div>
      ))}
    </div>
  );
};

export default ProductInfo;