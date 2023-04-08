import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Caurosel.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useBannerContext } from '../hooks/useBannerContext';
const Banner = ({banner}) => {
  
  // console.log(banner);

  return (
    <div>
      {/* <Carousel className="Carousel-Container">
        {banner &&
          banners.map((banner) => {
            <Carousel.Item key={banner.id}>
              <img
                src={imgSrc}
                alt="not uploaded"
                className="image-container"
              />
            </Carousel.Item>;
          })}
      </Carousel> */}
    </div>
  );
};

export default Banner;
