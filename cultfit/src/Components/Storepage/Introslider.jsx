import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Introslider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
  <>
   <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/8ea6a013-ae9a-4bdc-a072-14fb3d749118.png"
          alt="First slide"
        />
 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/10eca9e9-fe81-4729-ad64-ac76b18302b7.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b6756d5a-3fc2-4465-b559-21ee7e93c789.png"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  
  </>
  )
}

export default Introslider