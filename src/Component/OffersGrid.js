import React, { useEffect, useState } from 'react';
import { RESTAURANT_IMG_URL } from '../utils/constant';

const OffersGrid = ({ offers }) => {

  const [visibleOffers, setVisibleOffers] = useState(4);

    const showMoreOffers=()=>{
      setVisibleOffers((prev) => prev + 4)
    }

    return (
      <>
      <div className='grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        
      {offers.slice(0,visibleOffers).map((offer, index) => (
        <>
        <div key={index} className='h-full p-[12px] text-center border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col'>
          <img
              src={RESTAURANT_IMG_URL + offer?.info?.offerLogo}
              alt={offer?.info?.header}
              className='w-[60px] h-[60px] mb-2 m-auto' // Adjust max-width as needed
          />
          <h2 className='text-center text-lg font-semibold mb-1 '>{offer?.info?.header}</h2>
          <p className='text-center text-[#565656] text-[15px]'>{offer?.info?.description}</p>
        </div>
        </>
      ))}
  </div>
  {
    visibleOffers<offers.length && (
      <div className='text-center mt-4'>
        <button onClick={showMoreOffers} className='m-auto cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#004f4e] text-[#fff] border-[1px] border-solid border-[#004f4e] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]'>
          See More Offers
        </button>
      </div>
    )
  }</>
    );
};

export default OffersGrid;
