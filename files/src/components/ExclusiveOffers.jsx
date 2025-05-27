import React, { useState } from 'react';
import Title from './Title';
import arrowIcon from '../assets/arrowicon.svg'; 
import cardImg1 from '../assets/exclusiveOfferCardImg1.png';
import cardImg2 from '../assets/exclusiveOfferCardImg2.png';
import cardImg3 from '../assets/exclusiveOfferCardImg3.png';




function ExclusiveOffers() {
  const [exclusiveOffers, setExclusiveOffers] = useState([
    // Sample data (you can replace this with fetched data or props)
    {
      _id: '1',
      image: cardImg1,
      priceOff: 20,
      title: 'Romantic Getaway',
      description: 'Enjoy a romantic escape with exclusive perks.',
      expirydate: '2025-06-30',
    },
    {
      _id: '2',
      image: cardImg2,
      priceOff: 15,
      title: 'Family Package',
      description: 'Special rates for families with children.',
      expirydate: '2025-07-15',
    },
    {
      _id:'3',
      image: cardImg3,
      priceOff: 10,
      title: 'bachelor trip',
      description: 'have a blast with friends.',
      expirydate: '2025-08-23'

    },
  ]);

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-8'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-2'>
          View All Offers
          <img src={arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
              {item.priceOff}% OFF
            </p>
            <div>
              <p className='text-2xl font-medium font-playfair'>{item.title}</p>
              <p>{item.description}</p>
              <p className='text-xs text-white/70 mt-3'>Expire {item.expirydate}</p>
            </div>
            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'>
              View Offers
              <img className='invert group-hover:translate-x-1 transition-all' src={arrowIcon} alt="arrow-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExclusiveOffers;
