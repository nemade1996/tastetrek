import React from 'react'
import aboutimg from "../images/aboutapp.jpg"
import { FaRegClock } from "react-icons/fa6";
import { features } from '../utils/constant';
import Breadcrumb from './Breadcrumb';


const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us"/>
      <section className="section-about py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="md:w-[50%] w-full px-[12px]">
              <div className="cr-about h-full flex flex-col justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <h4 className="heading mb-[16px] font-Manrope text-[36px] font-bold leading-[46px] max-[1199px]:text-[28px] max-[1199px]:leading-[38px] max-[991px]:text-[25px] max-[991px]:leading-[35px] max-[767px]:text-[22px] max-[767px]:leading-[32px]">About The TasteTrek</h4>
                <div className="cr-about-content mt-[5px]">
                  <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[991px]:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                    necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                    rerum quod. Tempora magni autem a voluptatibus neque.
                  </p>
                  <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[991px]:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                    accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit
                    voluptatum eius perferendis amet!.
                  </p>
                  <p className="mb-[24px] text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] max-[991px]:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                    architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero
                    nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt
                    sed blanditiis quod aspernatur! Iusto?
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] w-full px-[12px] max-[991px]:mt-[30px]">
              <div className="cr-about-image sticky top-[0] aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                <img src={aboutimg} alt="side-view" className="w-full rounded-[5px]"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-about pb-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full gap-[2%]">
            {
              features.map((feature)=>(
                <div className="xl:w-[23%] mx-2 md:mx-0 lg:w-[23%] md:w-[49%] sm:w-full w-full px-[12px] mb-[24px] p-[24px] bg-[#f7f7f8] rounded-[5px] border-[1px] border-solid border-[#e9e9e9] flex flex-col justify-center">
                  <div className="mt-auto mr-auto mb-[12px] ml-auto block">
                  {feature.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="mb-[5px] text-[18px] font-Poppins text-[#004f4e] leading-[1.667] font-bold text-center">{feature.title}</h4>
                    <p className="font-Poppins text-[14px] leading-[22px] font-light text-center text-slate-900">{feature.subtitle}</p>
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

export default AboutUs