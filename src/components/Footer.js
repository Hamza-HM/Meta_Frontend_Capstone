import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { Image } from '@chakra-ui/react';
import logoSrc from '../assets/Logo.svg';

const doormatNav = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/' },
  { title: 'Menu', path: '/' },
  { title: 'Reservations', path: '/reservations' },
  { title: 'Order Online', path: '/' },
  { title: 'Login', path: '/' },
];

const contact = [
  { title: 'Address', path: '/' },
  { title: 'Phone Number', path: '/' },
  { title: 'Email', path: '/' },
];

const social = [
  { title: '', path: '#', icon: faFacebook },
  { title: '', path: '#', icon: faTwitter },
  { title: '', path: '#', icon: faInstagram },
];


const Footer = () => {
  return (
    <footer className="container">
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-12 col-md-3">
          <Image className='img img-fluid rounded' src={logoSrc}
          alt="Your Logo" />
        </div>

        <div className="col-12 col-md-3">
          <h5>Doormat Navigation</h5>
          <ul className='footer-list'>
            {doormatNav.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-3">
          <h5>Contact</h5>
          <p>Your Restaurant Address</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>

        <div className="col-12 col-md-3">
          <h5>Follow Us</h5>
          <ul className='footer-list'>
            {social.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon && <FontAwesomeIcon icon={item.icon} />} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
