import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const Main = () => {
  // Sample data for dishes
  const dishes = [
    {
      name: 'Dish 1',
      image: 'dish1.jpg',
      price: '$10.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Dish 2',
      image: 'dish2.jpg',
      price: '$12.99',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Dish 3',
      image: 'dish3.jpg',
      price: '$9.99',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <FullScreenSection mt={80}>
    <Box padding={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h2" size="lg">
          This Week's Special
        </Heading>
        <Button colorScheme="teal" variant="solid">
          Order Now
        </Button>
      </Flex>

      <Flex justifyContent="space-between" mt={8}>
        {dishes.map((dish, index) => (
          <Box key={index} maxWidth="30%" borderWidth="1px" borderRadius="md" p={4}>
            <Image src={dish.image} alt={dish.name} />
            <Heading as="h3" size="md" mt={4}>
              {dish.name}
            </Heading>
            <Text color="teal" mt={2}>
              {dish.price}
            </Text>
            <Text mt={2}>{dish.description}</Text>
          </Box>
        ))}
      </Flex>

      <Box mt={8} textAlign="center">
        <Button colorScheme="teal" variant="solid">
          Order a Delivery
        </Button>
      </Box>
    </Box>
    </FullScreenSection>
  );
};

export default Main;
