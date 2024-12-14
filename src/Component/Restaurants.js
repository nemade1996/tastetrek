import React from 'react';
import Breadcrumb from './Breadcrumb';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import { RESTAURANT_GRID_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import Rating from './Rating';
import { RESTAURANT_IMG_URL } from '../utils/constant';

const Restaurants = () => {
  // const { data, loading, error } = useFetchData(RESTAURANT_GRID_URL);
  const { data, loading, error } = useFetchRestaurantData(RESTAURANT_GRID_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  // Check if the data is structured as expected and extract the restaurants array
  const restaurants = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  if (restaurants.length === 0) return <p>No Data Available</p>;
  

  return (
    <>
      <Breadcrumb title="Restaurants" />
      <section className="section-popular-product-shape relative pt-[60px] pb-[70px]">
        <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="cr-banner mb-[30px] text-center">
                <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">Discover Famous Restaurants </h2>
              </div>
              <div className='flex flex-wrap'>
              {restaurants.map((restaurant, index) => (
                  <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-3">
                    <div className="w-full cr-product-card h-full border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                      <div className="w-full cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <div className="w-full h-full flex items-center justify-center relative overflow-hidden max-[991px]:pointer-events-none">
                          <img className="w-full h-56 object-cover" alt="Restaurant Image" src={RESTAURANT_IMG_URL+restaurant?.info?.cloudinaryImageId || 'default-image-url'} />
                        </div>
                        <Link className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] hover:bg-[#004f4e] hover:text-[#fff] hover:border-[#004f4e] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]" to={`/restaurants/${restaurant?.info?.id}`}>
                          <MdArrowOutward />
                        </Link>
                      </div>
                      <div className="cr-product-details pt-[24px] text-center overflow-hidden max-[1199px]:pt-[20px]">
                        <Link className="leading-tight title text-[20px] poppins-semibold font-medium text-[#2b2b2d] hover:text-[#004f4e] flex justify-center" to={`/restaurants/${restaurant?.info?.id}`}>{restaurant?.info?.name || 'Restaurant Name'}</Link>
                        <div className="cr-brand">
                          <p className="mb-[5px] text-[16px] text-[#6c6c6c] flex justify-center">{restaurant?.info?.areaName || 'Address'}</p>
                          <div className="cr-star mb-[1px] flex justify-center items-center">
                            <div className="flex">
                              <Rating rating={restaurant?.info?.avgRating || 0} />
                            </div>
                            <p className="text-[#999] text-[14px] ml-1">{restaurant?.info?.avgRating || 'N/A'}</p>
                          </div>
                        </div>
                        <p className="cr-price font-Poppins text-[16px] text-[#7a7a7a] max-[1199px]:text-[14px] mb-2"><span className="new-price font-Poppins text-[16px] leading-[1.75] max-[1199px]:text-[14px] font-bold text-[#004f4e]">{restaurant?.info?.sla?.deliveryTime + "Min" || 'Delivery Time'}</span><span className="old-price font-Poppins ml-[5px] leading-[1.75] text-[13px] text-[#7a7a7a] max-[1199px]:text-[12px]">{restaurant?.info?.sla?.lastMileTravelString || 'Delivery Time Range'}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
