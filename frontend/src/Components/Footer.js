import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from 'react-icons/ai';

import myImg from '../assets/logo.png';

import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="Footer-Main">
      <div className="Footer-Container">
        <div className="Footer-Box">
          <h1>Shop</h1>
          <ul>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Kids</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Box">
          <h1>Coorporate info</h1>
          <ul>
            <li>
              <Link>Careers at ρούχα</Link>
            </li>
            <li>
              <Link>About ρούχα group</Link>
            </li>
            <li>
              <Link>Investor relations</Link>
            </li>
            <li>
              <Link>Corporate gevornance</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Box">
          <h1>Help</h1>
          <ul>
            <li>
              <Link>Customer service</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Report scam</Link>
            </li>
            <li>
              <Link>Legal & privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="socials">
          <ul>
            <li>
              <AiFillFacebook />{' '}
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <AiFillYoutube />
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div>
            <img src={myImg} alt="no" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
