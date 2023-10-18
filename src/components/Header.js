// Header.js
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Nav from './Nav';

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      transform={`translateY(${hidden ? '-100%' : '0'})`}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
    >
      <Box color='black' margin='0 auto'>
        <Nav />
      </Box>
    </Box>
  );
};

export default Header;
