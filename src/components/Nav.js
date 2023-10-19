import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Center, HStack, Image, Box } from '@chakra-ui/react';
import logoSrc from '../assets/Logo.svg';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Menu', path: '/menu' },
  { title: 'Reservations', path: '/reservations' },
  { title: 'Order Online', path: '/order-online' },
  { title: 'Login', path: '/login' },
];

const Nav = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);

  const handleClick = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " id='navbar'>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul className="navbar-nav">
            <Link className="navbar-brand" to="/">
              <Image src={logoSrc} />
            </Link>
            {links.map((link, index) => (
              <li className="nav-item d-flex align-items-center fw-bold" key={index}>
                <Link
                  className={`nav-link ${index === activeLinkIndex ? 'active' : ''}`}
                  to={link.path}
                  onClick={() => handleClick(index)}
                  style={{ marginLeft: '10px' }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
