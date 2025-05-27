import React from 'react';
import { Link } from 'react-router-dom';
import starIconFilled from '../assets/starIconFilled.svg';
import locationIcon from '../assets/locationIcon.svg';

const HotelCard = ({ room, index }) => {
  return (
    <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)} key={room._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
      <div className="rounded-xl overflow-hidden bg-white shadow-md">
        
        {/* Image section */}
        <div className="relative">
          <img
            src={room.images[0] || '/images/placeholder.jpg'}
            alt="room"
            className="w-full h-48 object-cover"
          />
          {index % 2 === 0 && (
            <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
              Best Seller
            </p>
          )}
        </div>

        {/* Content section */}
        <div className="p-4 space-y-2">
          
          {/* Hotel Name */}
          <p className="text-xl font-playfair font-medium text-gray-800">
            {room.hotel.name}
          </p>

          {/* Address */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <img src={locationIcon} alt="location-icon" className="w-4 h-4" />
            <span>{room.hotel.address}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <img src={starIconFilled} alt="star-icon" className="w-4 h-4" />
            <span>4.5</span>
          </div>

          {/* Price and Book Now in one row */}
          <div className="flex items-center justify-between mt-2">
            <p>
              <span className="text-xl text-gray-800">${room.pricePerNight}</span>
              <span className="text-sm text-gray-600"> /night</span>
            </p>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
