import { Box, Button, Heading, HStack, Image, Textarea, VStack } from "@chakra-ui/react";

import bannerImg from '../assets/restauranfood.jpg';

const lorem = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.`;

const Banner = () => {
  return (
    <Box backgroundColor='#49SE57' mt={80} width='100%' py={8} textAlign={['center', 'left']}>
      <HStack justifyContent={['center', 'space-around']} width='100%' flexWrap={['wrap', 'nowrap']}>
        <VStack align={['center', 'left']}>
          <Heading as="h1" fontSize={['2xl', '4xl', '6xl']}>Little Lemon</Heading>
          <Heading as="h3" fontSize={['md', 'lg', 'xl']}>Chicago</Heading>
          <Textarea value={lorem} readOnly />
          <Button backgroundColor="#F4Ce14" color="#000" _hover={{ backgroundColor: '#F4Ce14' }}>
            Reserve a Table
          </Button>
        </VStack>
        <Image src={bannerImg} boxSize={['150px', '200px']} alt="Restaurant Banner" />
      </HStack>
    </Box>
  );
};

export default Banner;
