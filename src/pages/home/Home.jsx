import React from 'react';
import Hero from './hero/Hero';
import Hotels from './hotels/Hotels';
import Partners from '../partners/Partners';
import Destination from './destination/Destination';
import FeaturedTours from './featuredTours/FeaturedTours';
import Offers from './offers/Offers';
import TopHotels from './topHotels/TopHotels';
import topHotelsBackground from "../../assets/topHotelsBackground/topHotelsBackground.png"
import FindWithAi from './findWithAi/FindWithAi';
import PaymentMethods from './paymentMethods/PaymentMethods';

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
      <div>
        <img className='bg-[#009AC533] relative' src={topHotelsBackground} alt="" />
        <div className='relative z-10 -mt-150 '>
            <TopHotels></TopHotels>
        </div>
      </div>
      <FindWithAi></FindWithAi>
      <PaymentMethods></PaymentMethods>
    </div>
  );
};

export default Home;