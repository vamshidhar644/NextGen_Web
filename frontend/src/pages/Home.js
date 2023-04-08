import Banner from '../Components/Banner';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useAuthContext } from '../hooks/useAuthContext';
import { useBannerContext } from '../hooks/useBannerContext';
import Categories from './Categories';

const Home = () => {
  const { user } = useAuthContext();
  const { banners, bannerdispatch } = useBannerContext();

  const [bannerData, setBannerData] = useState([]);

  const [imgSrc, setImageSrc] = useState();
  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch('/api/banner');
      const json = await response.json();

      if (response.ok) {
        bannerdispatch({ type: 'SET_BANNERS', payload: json });
      }
    };

    fetchBanners();
  }, [bannerdispatch, user, banners, bannerData, imgSrc]);

  return (
    <div>
      <Carousel className="Carousel-Container">
        {banners &&
          banners.map((banner) => {
            if (banner.imgpath) {
              const img = new Image();
              img.src = `${banner.imgpath}`;
              return (
                <Carousel.Item key={banner._id} className="Carousel-Item">
                  <img src={img.src} alt="" />
                </Carousel.Item>
              );
            }
          })}
      </Carousel>

      <div className="Categories-Container">
        <Categories/>
      </div>
    </div>
  );
};

export default Home;
