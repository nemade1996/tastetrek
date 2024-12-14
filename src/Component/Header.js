import React from 'react'
import { useState } from 'react';
import Topbar from './Topbar';
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { location } from '../utils/constant';
import { IoMdMenu } from "react-icons/io";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
return (
  <>
    <Topbar/>
      <div className="cr-fix shadow-md">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="cr-menu-list w-full px-[12px] relative flex items-center flex-row justify-between gap-2">
            <div className="cr-category-icon-block py-[10px]">
              <div className="cr-category-menu relative">
                <div className="cr-category-toggle w-[35px] h-[35px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] cursor-pointer flex items-center justify-center">
                  <GrLocation className="ri-menu-2-line text-[22px] text-[#2b2b2d] leading-[14px] block"/>
                </div>
              </div>
              <div className="cr-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[80%] md:w-[600px] mt-[15px] p-[15px] absolute bg-[#fff] opacity-0 invisible left-[12px] z-[10] rounded-[5px] border-[1px] border-solid border-[#e9e9e9]">
                <div className="cr-cat-block">
                  <div className="cr-cat-tab flex">
                    <div className="flex flex-wrap w-full">
                      {Object.entries(location).map(([category, { cities }], index) => (
                      <div className="w-[50%] md:w-[140px] px-[10px]" key={index}>
                        <h6 className="cr-col-title h-auto mb-[5px] pb-[5px] text-[#004f4e] text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#e9e9e9]">{category}</h6>
                        <ul className="cat-list">
                          {cities.map((city, i) => (
                          <li key={i} className="transition-all duration-[0.3s] ease-in-out bg-[#fff] rounded-[5px] text-left h-auto py-[5px] text-[#777] capitalize leading-[15px] font-normal text-[13px] block border-[0]">
                            {city}
                          </li>
                          ))}
                        </ul>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="justify-between  flex flex-wrap items-center ">
              <p onClick={toggleMenu} className="block md:hidden navbar-toggler py-[7px] px-[14px] text-[16px] leading-[1] max-[991px]:flex max-[991px]:p-[0] max-[991px]:border-[0]" onClick={toggleMenu}>
                <IoMdMenu className="ri-menu-3-line max-[991px]:text-[20px]" />
              </p>
              <div className={`items-center ${isOpen ? 'block' : 'hidden'} w-full md:block absolute top-[50px] left-0 md:relative md:top-auto md:left-auto`}>
                <ul className="navbar-nav flex items-start px-[15px] md:items-center  m-auto relative z-[3] flex-col md:flex-row w-full bg-white">
                  <li className="nav-item relative ml-0 md:ml-[25px]">
                    <Link className="nav-link font-Poppins text-[16px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item relative ml-0 md:ml-[25px]">
                    <Link to="/about" className="nav-link font-Poppins text-[16px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item relative ml-0 md:ml-[25px]">
                    <Link to="/offers" className="nav-link font-Poppins text-[16px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]">
                      Offers
                    </Link>
                  </li>
                  <li className="nav-item relative ml-0 md:ml-[25px]">
                    <Link to="/restaurants" className="nav-link font-Poppins text-[16px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]">
                      Restaurants
                    </Link>
                  </li>
                  <li className="nav-item relative ml-0 md:ml-[25px]">
                    <Link to="/blog" className="nav-link font-Poppins text-[16px] font-medium block text-[#000] z-[1] flex items-center relative py-[11px] px-[8px] max-[1199px]:py-[8px] max-[1199px]:px-[0]">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="cr-calling flex justify-end items-center">
              <BsTelephone className="ri-phone-line pr-[5px] text-[20px]"/>
              <Link to="Tel:+919876543210" className="text-[15px] font-medium">
              +91 98765 43210</Link>
            </div>
          </div>
        </div>
      </div>
  </>
);
}
export default Header