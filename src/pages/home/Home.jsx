import React from 'react';
import Hero from './hero/Hero';
import Hotels from './hotels/Hotels';
import Partners from '../partners/Partners';
import Destination from './destination/Destination';
import FeaturedTours from './featuredTours/FeaturedTours';
import Offers from './offers/Offers';

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Hero />
        <div className="-mt-24 -mb-24 relative z-10">
          <Hotels />
        </div>
      </div>

      <div className="relative">
        <Partners />
      </div>
      <Destination></Destination>
      <FeaturedTours></FeaturedTours>
      <Offers></Offers>
    </div>
  );
};

export default Home;