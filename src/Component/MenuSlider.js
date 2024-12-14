import React from 'react';
import { RESTAURANT_GRID_URL, RESTAURANT_IMG_URL } from '../utils/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';

const MenuSlider = () => {
  const { data, loading, error } = useFetchRestaurantData(RESTAURANT_GRID_URL);

  const categoryData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];

  const setting = {
    spaceBetween: 50,
    slidesPerView: 7,
    nav:false,
    pagination: {
      clickable: true, 
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,  
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
    modules: [Pagination, Autoplay],  
  };

  return (
    <div>
      <section className="section-popular-product-shape relative pb-[30px] pt-[70px]">
        <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="mb-[10px]">
                <div className="cr-banner mb-[10px] text-center">
                  <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">
                    What's on your mind?
                  </h2>
                </div>
                <div className="cr-banner-sub-title w-full">
                  <p className="max-w-[600px] m-auto font-Poppins text-[16px] text-[#6b6b6b] leading-[22px] text-center max-[1199px]:w-[80%] max-[991px]:w-full">
                    Craving something delicious? Order your favorite meal now!
                  </p>
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
              <p className="text-xl text-red-500">
              Content isn't loading due to CORS restrictions. Please enable the 'Allow CORS' feature in your browser to view the content.
              </p>
            </div>
          )}

          {/* No Data Found State */}
          {!loading && !error && categoryData.length === 0 && (
            <div className="flex justify-center items-center w-full py-12">
              <p className="text-xl text-gray-500">No categories found at the moment. Please check back later.</p>
            </div>
          )}

          {/* Display Categories if Data is Available */}
          {!loading && !error && categoryData.length > 0 && (
            <div className="flex flex-wrap w-full mb-[-24px] no-arrow">
              <Swiper {...setting} navigation>
                {categoryData.map((category) => (
                  <SwiperSlide key={category.id}>
                    <div className="flex justify-center">
                      <img
                        src={RESTAURANT_IMG_URL + category.imageId || "Image Not Found"}
                        alt={category.description || 'Category Image'}
                      />
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

export default MenuSlider;
