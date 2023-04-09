import React, { useEffect, useState } from 'react';

import sanityClient from '../client';
import { Link } from 'react-router-dom';
const Brands = () => {
  const [Category, setCategory] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "brands"] {title, path, image {asset -> {_id, url}, alt}}`
      )
      .then((HomeData) => setCategory(HomeData))
      .catch(console.error);
  });
  return (
    <div className="brands-container">
      {Category &&
        Category.map((homedata) => (
          <div className="BrandsCard">
            <Link href="">
              <div className="Cat-CardImage">
                <img src={homedata.image.asset.url} alt="" />
              </div>
            </Link>
            {/* {console.log(price)}  */}
          </div>
        ))}
    </div>
  );
};

export default Brands;
