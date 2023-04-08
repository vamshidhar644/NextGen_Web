import React from 'react';
import '../Styles/Dropdowns.css';
import { Link } from 'react-router-dom';
const WomenDropdown = () => {
  return (
    <div className="Dropdown-Container">
      <div className="Dropdown-box">
        <h1>Indian & Fusion wear</h1>
        <ul>
          <li>
            <Link>Kurtas & suits</Link>
            <Link>Sarees</Link>
            <Link>Skirts</Link>
            <Link>Lehenga Cholis</Link>
            <Link>Jackets</Link>
            <Link>Dress Materials</Link>
          </li>
        </ul>
      </div>
      <div className="Dropdown-box">
        <h1>Western wear</h1>
        <ul>
          <li>
            <Link>Dresses</Link>
            <Link>Tops</Link>
            <Link>T-Shirts</Link>
            <Link>Jeans</Link>
            <Link>Trousers & Carpis</Link>
          </li>
        </ul>
      </div>
      <div className="Dropdown-box">
        <h1>Footwear</h1>
        <ul>
          <li>
            <Link>Flats</Link>
            <Link>Heels</Link>
            <Link>Casual Shoes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WomenDropdown;
