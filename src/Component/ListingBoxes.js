import React, { useState } from 'react';
import { RESTAURANT_GRID_URL } from '../utils/constant';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';

const ListingBoxes = () => {
  const { data, loading, error } = useFetchRestaurantData(RESTAURANT_GRID_URL);
  const [visibleItems, setVisibleItems] = useState(7);

  // Handle loading and error states
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full py-12">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full py-12">
        <p className="text-xl text-red-500">
        Content isn't loading due to CORS restrictions. Please enable the 'Allow CORS' feature in your browser to view the content.
        </p>
      </div>
    );
  }

  // Access the restaurant data safely
  const cards = data?.data?.cards || [];
  const listingBoxCard = cards[6]?.card?.card || {};
  const listingBoxTitle = listingBoxCard?.title || "Default Title";
  const listingBoxList = listingBoxCard?.brands || [];

  // Handle Show More functionality to reveal more items
  const handleShowMore = () => {
    setVisibleItems(listingBoxList.length);
  };

  // No data state if no items exist in the listing
  if (!loading && !error && listingBoxList.length === 0) {
    return (
      <div className="flex justify-center items-center w-full py-12">
        <p className="text-xl text-gray-500">No items available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="section-popular-product-shape relative pb-[0px] md:pb-[70px]">
        <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="mb-[30px]">
                <div className="cr-banner mb-[15px] text-center">
                  <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">
                    {listingBoxTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* List items */}
          <div className="flex flex-wrap w-full mb-[-24px] list-none">
            {listingBoxList.slice(0, visibleItems).map((listItem, index) => (
              <li className="w-full md:w-1/4 text-center" key={index}>
                <p className="text-[17px] p-4 m-2 text-[#373737] border-[1px] border-solid border-[#e6e6e6] rounded-[5px] max-[1199px]:text-[12px]">
                  {listItem.text}
                </p>
              </li>
            ))}

            {/* Show More Button */}
            {visibleItems < listingBoxList.length && (
              <div className="w-full md:w-1/4 flex items-center">
                <button className="bg-[#004f4e] text-[#fff] py-4 m-2 px-4 rounded w-full" onClick={handleShowMore}>
                  Show More +
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingBoxes;
