import React from 'react';
import { OffersData } from '../utils/constant';
import Breadcrumb from './Breadcrumb';

const Offers = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Coupon code copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy coupon code: ', err);
      }
    );
  };

  return (
    <>
    <Breadcrumb title="Offers"/>
    <section className="relative pb-[70px] pt-[70px]">
      <div className="relative mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
        <div className='text-center'>
          <h1 className='heading poppins-bold mb-9 block text-[#2b2b2d] text-[42px] leading-[1.5] font-medium'>
            Special Offers
          </h1>
        </div>
        <div className='flex flex-wrap w-full'>
          {OffersData.flatMap((category) =>
            category.offers.map((offer, index) => (
              <div
                key={`${category.category}-${index}`}
                className="lg:w-[33%] md:w-[50%] w-[100%] px-[12px] mb-[24px]"
              >
                <div className='flex items-center bg-[#f7f7f8] border-[1px] p-2 border-solid border-[#e9e9e9] rounded-[5px] overflow-hidden'>
                  <div className='flex-shrink-0'>
                    <img src={offer.image} alt={offer.offerName} className='w-full h-[60px]'/>
                  </div>
                  <div className='p-4'>
                    <h2 className='text-xl font-bold'>{offer.offerName}</h2>
                    <p className='text-sm text-gray-700'>{offer.offerSubheading}</p>
                    <p className='text-sm text-gray-800 font-bold'>Valid till - {offer.deadline}</p>
                    <h4 onClick={() => copyToClipboard(offer.couponCode)} className='mt-1 text-[14px] font-semibold cursor-pointer bg-[#004f4e] text-white inline-block px-2 py-1 rounded-md'>{offer.couponCode}</h4>                 
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Offers;
