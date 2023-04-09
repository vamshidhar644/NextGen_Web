import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import sanityClient from '../client';

import { useAuthContext } from '../hooks/useAuthContext';
// import { useBannerContext } from '../hooks/useBannerContext';
const Banner = () => {
  const { user } = useAuthContext();
  const [Banner, setBanner] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banner"] {title, path, image {asset -> {_id, url}, alt}}`
      )
      .then((HomeData) => setBanner(HomeData))
      .catch(console.error);
  });
  return (
    <Carousel className="Carousel-Container">
      {Banner &&
        Banner.map((homedata) => (
          <Carousel.Item className="Carousel-Item" key={homedata.path}>
            <img src={homedata.image.asset.url} alt="" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Banner;
