import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import bannerImg from '../assets/restauranfood.jpg';

const lorem = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.`;

const Banner = () => {
  return (
    <Box className="banner">
      <HStack className="banner-row">
        <VStack className="banner-column banner-content">
          <Heading className="banner-heading" as="h1">Little Lemon</Heading>
          <Heading className="banner-subheading" as="h3">Chicago</Heading>
          <Text className="banner-description">{lorem}</Text>
          <Button className="banner-button">
            Reserve a Table
          </Button>
        </VStack>
        <Box className="banner-column img-translate">
          <Image className='banner-img' src={bannerImg} boxSize="400px" objectFit="cover" alt="Restaurant Banner"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Banner;
