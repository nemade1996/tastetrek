import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/slider2.jpg"

const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slider1} alt="Slide 1" className="w-full h-96 object-cover"/>
            <div className="absolute top-1/3 left-0 text-black-100 cr-left-side-contain md:left-24 mx-2 md:mx-0">
              <h5 className="mb-[20px] text-[15px] md:text-[20px] font-Poppins font-bold leading-[1.2]"><span className="mr-[5px] text-[#004f4e] border-b-[2px] border-solid border-[#004f4e] font-bold">100%</span> Organic Vegetables</h5>
              <h1 className="mb-[25px] text-[35px] md:text-[55px] font-Manrope font-extrabold leading-[40px] md:leading-[68px] text-[#004f4e] relative ">The best way to stuff your wallet.</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slider2} alt="Slide 2" className="w-full h-96 object-cover"/>
            <div className="absolute top-1/3 left-0 text-black-100 cr-left-side-contain md:left-24 mx-2 md:mx-0">
              <h5 className="mb-[20px] text-[15px] md:text-[20px] font-Poppins font-bold leading-[1.2]"><span className="mr-[5px] text-[#004f4e] border-b-[2px] border-solid border-[#004f4e] font-bold">100%</span> Organic Vegetables</h5>
              <h1 className="mb-[25px] text-[35px] md:text-[55px] font-Manrope font-extrabold leading-[40px] md:leading-[68px] text-[#004f4e] relative ">The best way to stuff your wallet.</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroSlider