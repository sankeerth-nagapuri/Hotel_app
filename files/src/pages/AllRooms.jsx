import React, { useState } from 'react';
import { roomsDummyData, assets, facilityIcons } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

// Reusable Filter Box Component
const FilterBox = ({ onClear }) => {
  const [selectedFilters, setSelectedFilters] = useState({
      popular: [],
      priceRange: [],
      sortBy: '',
   });

   const handleCheckboxChange = (category, option) => {
      setSelectedFilters((prev) => {
         const updatedList = prev[category].includes(option)
            ? prev[category].filter((item) => item !== option)
            : [...prev[category], option];
         return { ...prev, [category]: updatedList };
      });
   };

   const handleRadioChange = (value) => {
      setSelectedFilters((prev) => ({ ...prev, sortBy: value }));
   };

   const clearAll = () => {
      setSelectedFilters({
         popular: [],
         priceRange: [],
         sortBy: '',
      });
      if (onClear) onClear();
   };

   return (
      <div className="border border-gray-400 rounded-md px-4 py-4 w-full lg:w-64">
         <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-gray-800 text-lg">FILTERS</p>
            <button
               onClick={clearAll}
               className="text-sm text-blue-600 font-medium cursor-pointer"
            >
               CLEAR
            </button>
         </div>

         <div className="mb-4">
            <p className="font-semibold text-gray-800 mb-2">Popular filters</p>
            {['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'].map((item, index) => (
               <label key={index} className="flex items-center space-x-2 text-sm text-gray-700 mb-1 cursor-pointer">
                  <input
                     type="checkbox"
                     checked={selectedFilters.popular.includes(item)}
                     onChange={() => handleCheckboxChange('popular', item)}
                     className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span>{item}</span>
               </label>
            ))}
         </div>

         <div className="mb-4">
            <p className="font-semibold text-gray-800 mb-2">Price Range</p>
            {['$ 0 to 500', '$ 500 to 1000', '$ 1000 to 2000', '$ 2000 to 3000'].map((range, index) => (
               <label key={index} className="flex items-center space-x-2 text-sm text-gray-700 mb-1 cursor-pointer">
                  <input
                     type="checkbox"
                     checked={selectedFilters.priceRange.includes(range)}
                     onChange={() => handleCheckboxChange('priceRange', range)}
                     className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span>{range}</span>
               </label>
            ))}
         </div>

         <div>
            <p className="font-semibold text-gray-800 mb-2">Sort By</p>
            {['Price Low to High', 'Price High to Low', 'Newest First'].map((option, index) => (
                <label key={index} className="flex items-center space-x-2 text-sm text-gray-700 mb-1 cursor-pointer">
                  <input
                     type="radio"
                     name="sort"
                     checked={selectedFilters.sortBy === option}
                     onChange={() => handleRadioChange(option)}
                     className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span>{option}</span>
               </label>
            ))}
         </div>
      </div>
   );
};

const AllRooms = () => {
   const navigate = useNavigate();
   const [showFilters, setShowFilters] = useState(false);

   return (
      <div className="pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
         {/* Mobile Filter Toggle */}
         <div className="lg:hidden mb-4 border border-gray-400 px-4 py-2">
            <div
               className="w-full flex justify-between items-center cursor-pointer"
               onClick={() => setShowFilters(!showFilters)}
            >
               <p className="font-semibold text-gray-800">FILTERS</p>
               <span className="text-sm font-normal text-gray-600">{showFilters ? 'HIDE' : 'SHOW'}</span>
            </div>

            {showFilters && (
               <div className="mt-4">
                  <FilterBox />
               </div>
            )}
         </div>

         {/* Header */}
         <div className="text-left mb-10">
            <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
               Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
           </p>
         </div>

         {/* Main Layout */}
         <div className="flex flex-col lg:flex-row gap-8">
            {/* Room Listings */}
            <div className="flex-1 flex flex-col gap-10">
               {roomsDummyData.map((room) => (
                  <div
                     key={room._id}
                     className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                     <img
                        src={room.images[0]}
                        alt="hotel room"
                        onClick={() => {
                           navigate(`/rooms/${room._id}`);
                           scrollTo(0, 0);
                        }}
                        className="w-full md:w-[300px] h-[200px] object-cover rounded-lg cursor-pointer"
                     />
                     <div className="flex-1">
                        <p className="text-gray-500">
                           {room.hotel.city}, {room.hotel.state}, {room.hotel.country}
                        </p>
                        <h2
                           onClick={() => {
                              navigate(`/rooms/${room._id}`);
                              scrollTo(0, 0);
                           }}
                           className="text-2xl font-playfair text-gray-800 cursor-pointer"
                        >
                           {room.hotel.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                           <StarRating />
                           <span className="text-sm text-gray-600">200+ reviews</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                           <img src={assets.locationIcon} className="w-4 h-4" alt="location" />
                           <span>{room.hotel.address}</span>
                        </div>
                        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                           {room.amenities.map((item, index) => (
                              <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F5FF]/70">
                                 <img src={facilityIcons[item]} alt={item} className="w-4 h-4" />
                                 <p className="text-xs text-gray-700 capitalize">{item.replace(/_/g, ' ')}</p>
                              </div>
                          ))}
                        </div>
                        <div className="mt-4 text-lg font-semibold text-gray-800">
                           ${room.pricePerNight} <span className="text-gray-500 text-sm">/day</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Desktop Filter */}
            <div className="hidden lg:block">
               <FilterBox />
            </div>
         </div>
      </div>
   );
};

export default AllRooms;
