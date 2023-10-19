import chefsMarioAndAdrianAImage from '../assets/Mario and Adrian A.jpg';
import chefsMarioAndAdrianBImage from '../assets/Mario and Adrian b.jpg';
import React from 'react';
import './OurStory.css';

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
culpa qui officia deserunt mollit anim id est laborum. Sed ut 
perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
inventore veritatis et quasi architecto beatae vitae dicta sunt 
explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
voluptatem sequi nesciunt.
`
const OurStory = () => {
  return (
    <section className="container our-story my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="our-story-description">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              {content}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="our-story-chefs row align-items-end">
            <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian A" className="img-fluid" />
            <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian B" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
