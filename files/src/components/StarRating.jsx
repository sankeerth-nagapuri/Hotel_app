import React from 'react';
import { assets } from '../assets/assets'; // adjust path if needed

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5).fill('').map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
          alt="star-icon"
          className="w-4.5 h-4.5"
        />
      ))}
    </div>
  );
};

export default StarRating;
