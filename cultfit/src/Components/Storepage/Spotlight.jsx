import {Box, Container, Image} from "@chakra-ui/react";
import React from "react";
import Styles from "./Store.module.css"
const Spotlight = () => {
  return (
    <div>
      <Box className={Styles.sportlightcontainer}>
        <Box className={Styles.spotlightimg}>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png" />
        </Box>
        <Box className={Styles.spotlightimg}>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png" />
        </Box>
      </Box>
    </div>
  );
};

export default Spotlight;
