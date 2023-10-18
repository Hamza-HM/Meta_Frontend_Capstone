import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Image, Box } from '@chakra-ui/react';
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
  return (
    <nav>
      <HStack id='header' width='100%' px={16} py={2} justifyContent='center' alignItems='center'
      backgroundColor='white'
      >
        <Image src={logoSrc} boxSize="80px" mr={40} /> {/* Adjust box size and margin as needed */}
        <ul
        style={{listStyle: 'none'}}
        >
      <HStack width='100%' px={16} py={4} justifyContent='center' alignItems='center'>
        {links.map((link, index) => (
            <li key={index}>
              <Link
              style={{ marginRight: '20px', textDecoration: 'none', color: 'inherit',fontSize: '20px', fontWeight:'bold' }} to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
          </HStack>
        </ul>
      </HStack>
    </nav>
  );
};

export default Nav;
