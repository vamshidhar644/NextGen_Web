import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

import { useLogout } from '../context_hooks/useLogout';
import { useAuthContext } from '../context_hooks/AuthContext';

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import Search from './Search';
import WomenDropdown from './NavDropdown';
import { MenDropDown } from './NavDropdown';

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  defineElement(lottie.loadAnimation);

  const handleClick = () => {
    logout();
  };

  const [showDropdownWomen, setShowDropdownWomen] = useState(false);
  const [showDropdownMen, setShowDropdownMen] = useState(true);
  const divRef = useRef(null);

  const handleMouseEnterWomen = () => {
    setShowDropdownWomen(true);
  };
  const handleMouseEnterMen = () => {
    setShowDropdownMen(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowDropdownWomen(false);
        setShowDropdownMen(false);
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);

  return (
    <div className="navigation-container">
      <div className="navbar-nav">
        <div className="navbar-nav-section2">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>ρούχα</h1>
          </Link>
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
                <NavLink
                  to="/women"
                  onMouseEnter={handleMouseEnterWomen}
                  ref={divRef}
                >
                  Women
                </NavLink>
                {showDropdownWomen && <WomenDropdown />}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/men"
                  onMouseEnter={handleMouseEnterMen}
                  ref={divRef}
                >
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kids">Kids</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/beauty">Beauty</NavLink>
              </li>
              <li className="nav-item">
                <Search />
              </li>
              <li>
                <div className="input-wrapper">
                  <Link className="login-section-icons" to="/favorites">
                    <lord-icon
                      trigger="hover"
                      src="https://cdn.lordicon.com/iwaotjbp.json"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Link>
                  {user && (
                    <div className="login-user">
                      <p className="user-firstname">Hello! {user.firstName}</p>
                      <Link className="login-section-icons">
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
                  <Link className="login-section-icons" to="/your-bag">
                    <lord-icon
                      src="https://cdn.lordicon.com/rmzhcgbh.json"
                      trigger="hover"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
