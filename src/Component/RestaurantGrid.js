import React, { useEffect, useState } from 'react';
import { RESTAURANT_GRID_URL, RESTAURANT_IMG_URL } from '../utils/constant';
import { MdArrowOutward } from "react-icons/md";
import Rating from './Rating';
import { MdAccessTime } from "react-icons/md";
import { FaRegStar } from 'react-icons/fa';
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const RestaurantGrid = () => {
  const [restaurantGridData, setRestaurantGridData] = useState([]);
  const [restaurantGridTitle, setRestaurantGridTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  useEffect(() => {
    fetchRestaurantGridData();
  }, []);

  useEffect(() => {
    const filteredData = applyFilter(restaurantGridData, filter);
    setFilteredRestaurantData(filteredData);
  }, [restaurantGridData, filter]);

  const fetchRestaurantGridData = async () => {
    try {
      const response = await fetch(RESTAURANT_GRID_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const restaurantDataRaw = await response.json();
      const restaurantData = restaurantDataRaw?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantGridData(restaurantData || []);
      setRestaurantGridTitle(restaurantDataRaw?.data?.cards[2]?.card?.card?.title || '');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilter = (data, filter) => {
    let sortedData = [...data];
    switch (filter) {
      case 'deliveryTime':
        sortedData.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
        break;
      case 'rating':
        sortedData.sort((a, b) => b.info.avgRating - a.info.avgRating);
        break;
      case 'costLowToHigh':
        sortedData.sort((a, b) => {
          const costA = parseInt(a.info.costForTwo.replace('₹', '').replace('for two', '').trim());
          const costB = parseInt(b.info.costForTwo.replace('₹', '').replace('for two', '').trim());
          return costA - costB;
        });
        break;
      case 'costHighToLow':
        sortedData.sort((a, b) => {
          const costA = parseInt(a.info.costForTwo.replace('₹', '').replace('for two', '').trim());
          const costB = parseInt(b.info.costForTwo.replace('₹', '').replace('for two', '').trim());
          return costB - costA;
        });
        break;
      default:
        break;
    }
    return sortedData;
  };

  const getButtonClass = (filterType) => (filter === filterType ? 'cr-button-active' : 'cr-button');

  return (
    <div>
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center w-full py-12">
          <p className="text-xl text-gray-500">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex justify-center items-center w-full py-12">
          <p className="text-xl text-red-500">
          Content isn't loading due to CORS restrictions. Please enable the 'Allow CORS' feature in your browser to view the content.
          </p>
        </div>
      )}

      {/* No Data Found State */}
      {!loading && !error && filteredRestaurantData.length === 0 && (
        <div className="flex justify-center items-center w-full py-12">
          <p className="text-xl text-gray-500">No restaurants found at the moment. Please check back later.</p>
        </div>
      )}

      {/* Restaurant Grid */}
      {!loading && !error && filteredRestaurantData.length > 0 && (
        <section className="section-popular-product-shape relative pb-[0px] md:pb-[70px]">
          <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
            <div className="flex flex-wrap w-full">
              <div className="w-full px-[12px]">
                <div className="mb-[30px]">
                  <div className="cr-banner mb-[15px] text-center">
                    <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">
                      {restaurantGridTitle}
                    </h2>
                  </div>
                  <div className="cr-banner-sub-title w-full">
                    <p className="max-w-[600px] m-auto font-Poppins text-[17px] text-[#7a7a7a] leading-[22px] text-center max-[1199px]:w-[80%] max-[991px]:w-full">
                      Discover Best Restaurants with filtering out as per your choice!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="bg-[#d3eeee] w-full md:w-auto rounded-md p-5 flex text-center items-center justify-center mx-auto">
              <div className="flex items-center w-full justify-center space-x-0 md:space-x-2 flex-col md:flex-row">
                <button onClick={() => setFilter('deliveryTime')} className={getButtonClass('deliveryTime')}>
                  <MdAccessTime className="mr-1" /> Delivery Time
                </button>

                <button onClick={() => setFilter('rating')} className={getButtonClass('rating')}>
                  <FaRegStar className="mr-1" /> Rating
                </button>

                <button onClick={() => setFilter('costLowToHigh')} className={getButtonClass('costLowToHigh')}>
                  <FaArrowUpShortWide className="mr-1" /> Cost: Low to High
                </button>

                <button onClick={() => setFilter('costHighToLow')} className={getButtonClass('costHighToLow')}>
                  <FaArrowUpWideShort className="mr-1" /> Cost: High to Low
                </button>
              </div>
            </div>

            {/* Restaurant Cards */}
            <div className="flex flex-wrap mt-14">
              {filteredRestaurantData.map((restaurant) => (
                <div className="w-full sm:w-1/2 md:w-1/4 px-8 pb-3" key={restaurant.info.id}>
                  <div className="w-full cr-product-card h-full border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                    <div className="w-full cr-product-image rounded-[5px] flex items-center justify-center relative">
                      <div className="w-full h-full flex items-center justify-center relative overflow-hidden max-[991px]:pointer-events-none">
                        <img
                          className="w-full h-[300px] md:h-[300px] object-cover"
                          alt="Restaurant Image"
                          src={RESTAURANT_IMG_URL + restaurant.info.cloudinaryImageId}
                        />
                      </div>
                      <Link
                        to={"/restaurants/" + restaurant.info.id}
                        className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] hover:bg-[#004f4e] hover:text-[#fff] hover:border-[#004f4e] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]"
                      >
                        <MdArrowOutward />
                      </Link>
                    </div>

                    <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1199px]:pt-[20px]">
                      <Link
                        to={"/restaurants/" + restaurant.info.id}
                        className="leading-tight title text-[18px] poppins-semibold font-medium text-[#2b2b2d] hover:text-[#004f4e] flex justify-center"
                      >
                        {restaurant.info.name}
                      </Link>
                      <div className="cr-brand">
                        <p className="mb-[5px] text-[16px] text-[#6c6c6c] flex justify-center">{restaurant.info.areaName}</p>
                        <div className="cr-star mb-[1px] flex justify-center items-center">
                          <Rating rating={restaurant.info.avgRating} />
                          <p className="text-[#999] text-[14px] ml-1">{restaurant.info.avgRating}</p>
                        </div>
                      </div>
                      <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] max-[1199px]:text-[14px] mb-2">
                        <span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1199px]:text-[14px] font-bold text-[#004f4e]">
                          {restaurant.info.sla.deliveryTime} Min
                        </span>
                        <span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] text-[#7a7a7a] max-[1199px]:text-[12px]">
                          {restaurant.info.sla.slaString}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RestaurantGrid;
