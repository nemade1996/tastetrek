import React from 'react'
import { testimonials } from '../utils/constant'
import stras from "../images/rating.png"

const CustomerBox = () => {


  return (
    <>
      <section className="section-popular-product-shape relative pb-[70px] pt-[70px] md:pt-[0] md:pb-[70px]">
        <div className="popular-product-container flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full md:gap-5">
            <div className="w-full px-[12px]">
              <div className="mb-[30px]">
                <div className="cr-banner mb-[15px] text-center">
                  <h2 className="font-Manrope text-[38px] font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]">Customer Review</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            {
              testimonials.map((testimonial,name)=>(
                <div key={testimonial.name} className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] max-w-full">
              <div className="card border-[2px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px]">
                <div className="card-body p-[30px]">
                  <blockquote className="text-[15px]">
                    <img src={stras} className='w-4/12 mb-3'/>
                    <p className='text-[#7a7a7a] mb-2'>{testimonial.content}</p>
                    <div className="flex items-center text-left">
                      <div className="info !pl-0">
                        <h5 className="!mb-1 text-[.95rem] tracking-[normal] text-[#004f4e] font-semibold !leading-[1.5]">{testimonial.name}</h5>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomerBox