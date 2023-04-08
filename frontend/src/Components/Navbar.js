import React from 'react';
import '../Styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom';

import { useLogout } from '../context_hooks/useLogout';
import { useAuthContext } from '../context_hooks/AuthContext';

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  defineElement(lottie.loadAnimation);

  const handleClick = () => {
    logout();
  };
  return (
    <div className="navigation-container">
      <div className="navbar-nav">
        <div className="navbar-nav-section1">
          
        </div>
        <div className="navbar-nav-section2">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>pouxa</h1>
          </Link>
        </div>
        <div className="navbar-nav-section3">
          <div className="input-wrapper">
            <Link className="login-section-icons" to='/favorites'>
              <lord-icon
                trigger="hover"
                src="https://cdn.lordicon.com/iwaotjbp.json"
                style={{ width: '40px', height: '40px' }}
              />
            </Link>
            {user && (
              <div className="login-user">
                <p className="user-firstname">Hello! {user.firstName}</p>
                <Link className='login-section-icons'>
                <lord-icon
                  onClick={handleClick}
                  src="https://cdn.lordicon.com/twopqjaj.json"
                  trigger="hover"                  
                  style={{ width: '45px', height: '45px' }}
                />
                </Link>
              </div>
            )}
            {!user && (
              <div className="logout-user">
                <Link
                  to="/login"
                  style={{ textDecoration: 'none' }}
                  className="login-section-icons"
                >
                  <lord-icon
                    trigger="hover"
                    src="https://cdn.lordicon.com/ajkxzzfb.json"
                    style={{ width: '45px', height: '45px' }}
                  />
                </Link>
              </div>
            )}
            <Link className='login-section-icons' to='/your-bag'>
            <lord-icon
              src="https://cdn.lordicon.com/rmzhcgbh.json"
              trigger="hover"
              style={{ width: '40px', height: '40px' }}
            />
            </Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new-arrivals">NEW ARRIVALS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sample-sale">SAMPLE SALE</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
