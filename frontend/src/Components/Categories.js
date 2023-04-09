import React, { useEffect, useState } from 'react';
import '../Styles/Categories.css';

import sanityClient from '../client';

import { Link } from 'react-router-dom';
const Categories = () => {
  const [Category, setCategory] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"] {title, path, image {asset -> {_id, url}, alt}}`
      )
      .then((HomeData) => setCategory(HomeData))
      .catch(console.error);
  });
  return (
    <div className="category-container">
      {Category &&
        Category.map((homedata) => (
          <div className="CollectionsCard">
            <Link href="">
              <div className="CardImage">
                <img src={homedata.image.asset.url} alt="" />
              </div>
            </Link>
            {/* {console.log(price)}  */}
          </div>
        ))}
    </div>
  );
};

export default Categories;
