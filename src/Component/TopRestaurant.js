import React, { useEffect, useState } from 'react';
import { RESTAURANT_GRID_URL, RESTAURANT_IMG_URL } from '../utils/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import 'swiper/css';
import 'swiper/css/navigation';
import { GoStarFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

const TopRestaurant = () => {
  const { data, loading, error } = useFetchRestaurantData(RESTAURANT_GRID_URL);

  const restaurantData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  const titleRestaunrantData = data?.data?.cards[1]?.card?.card?.header?.title;

  const topRestaurantSliderSetting = {
    spaceBetween: 20,
    slidesPerView: 7,
    breakpoints: {
      360: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 10 },
      991: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
      1200: { slidesPerView: 5, spaceBetween: 30 },
    },
  };

  return (
    <div>
      <section className="section-popular-product-shape relative pb-[80px] md:pb-[60px] md:pt-[60px]">
        <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="mb-[30px]">
                <div className="cr-banner mb-[10px] text-center">
                  <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">{titleRestaunrantData || "Top Restaurants"}</h2>
                </div>
                <div className="cr-banner-sub-title w-full">
                  <p className="max-w-[600px] m-auto font-Poppins text-[17px] text-[#6b6b6b] leading-[22px] text-center max-[1199px]:w-[80%] max-[991px]:w-full">Uncover top spots for your favorite local eats in your town!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center w-full py-12">
              <p className="text-xl text-gray-500">Loading...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex justify-center items-center w-full py-12">
              <p className="text-xl text-red-500">Content isn't loading due to CORS restrictions. Please enable the 'Allow CORS' feature in your browser to view the content.</p>
            </div>
          )}

          {/* No Data Found State */}
          {!loading && !error && restaurantData.length === 0 && (
            <div className="flex justify-center items-center w-full py-12">
              <p className="text-xl text-gray-500">No restaurants found at the moment. Please check back later.</p>
            </div>
          )}

          {/* Display Restaurants if Data is Available */}
          {!loading && !error && restaurantData.length > 0 && (
            <div className="flex flex-wrap w-full">
              <Swiper modules={[Navigation]} {...topRestaurantSliderSetting} navigation>
                {restaurantData.map((restaurant) => (
                  <SwiperSlide key={restaurant.info.id || restaurant.info.name || restaurant.id}>
                    <div className='cr-product-card h-full border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden max-[480px]:w-full'>
                      <div className="w-full cr-product-image rounded-[5px] flex items-center justify-center relative">
                        <img src={RESTAURANT_IMG_URL + restaurant.info.cloudinaryImageId} className='w-full' />
                        <Link to={"/restaurants/" + restaurant.info.id} className="cr-shopping-bag h-[35px] w-[35px] absolute bottom-[-16px] flex items-center justify-center m-0 p-0 bg-[#f7f7f8] hover:bg-[#004f4e] hover:text-[#fff] hover:border-[#004f4e] border-[1px] border-solid border-[#e9e9e9] rounded-[100%]">
                          <MdArrowOutward />
                        </Link>
                      </div>
                      <div className='flex flex-col p-3 pt-5'>
                        <h2 className='title text-[20px] poppins-semibold mb-2 leading-tight font-medium text-[#111] hover:text-[#004f4e] flex justify-left'>{restaurant.info.name || "Name Not Found"}</h2>
                        <p className='flex pb-3 justify-left items-center gap-1 border-b text-[#565656] border-[#e9e9e9]'>
                          <MdLocationOn className='flex-none text-[#004f4e]' /> {restaurant.info.areaName}
                        </p>
                        <p className='flex justify-left poppins-semibold items-center gap-1 text-[#565656] pt-3 pb-1'>
                          <GoStarFill className='flex-none text-yellow-500' /> <span>{restaurant.info.avgRating}</span> | <span>{restaurant.info.totalRatingsString}</span>
                        </p>
                        <p className="flex word-break items-start gap-2 text-[#565656] text-[15px]">
                          <ImSpoonKnife className="text-[#004f4e] mt-2" />
                          <p className="flex-1 break-words">
                            {restaurant.info.cuisines + ", "}
                          </p>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TopRestaurant;
