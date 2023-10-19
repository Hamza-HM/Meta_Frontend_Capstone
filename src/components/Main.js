import React from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import Card from './Card';
import { Link } from 'react-router-dom';

const Main = () => {
  // Sample data for dishes
  const dishes = [
    {
      name: 'Greek salad',
      image: require('../assets/greek salad.jpg'),
      price: '$12.99',
      description: 'The famous Greek salad of crispy lettuce, pepper, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      name: 'Bruschetta',
      image: require('../assets/Mario and Adrian b.jpg'),
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      name: 'Lemon Dessert',
      image: require('../assets/lemon dessert.jpg'),
      price: '5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return (
      <div className='container' style={{ marginTop: '150px' }}>
        <div className='d-flex flex-wrap mx-5 justify-content-center justify-content-md-between align-items-center'>
          <h1 style={{minWidth: '150px'}}>This weeks specials!</h1>
          <button className="btn btn-warning fw-bold rounded">
            Reserve a Table
          </button>
        </div>
        <div className="row justify-content-center">
          {dishes.map((dish, index) => (
            <div className="col-lg-4 col-md-6 col-sm-7 my-5 mx-auto w-auto" key={index}>
              <Card imgSrc={dish.image} title={dish.name} price={dish.price} description={dish.description} />
            </div>
          ))}
        </div>
      </div>
    );
  };


export default Main;
