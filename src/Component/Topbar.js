import React from 'react';
import logo from "../images/logo-black.png";
import { IoMdSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../utils/userSlice'; 
import { IoLogOut } from "react-icons/io5";


const Topbar = () => {
  const user = useSelector((state) => state.user);
  const cartCount = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()); 
    navigate('/login');
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="top-header py-[10px] flex flex-row gap-[10px] justify-between border-b-[1px] border-solid border-[#e9e9e9] relative z-[4] max-[640px]:py-[5px] max-[640px]:block">
              <Link to="/" className="cr-logo max-[640]:mb-[15px] max-[640]:flex max-[640]:justify-center">
                <img src={logo} alt="logo" className="logo block w-[200px] max-[640]:w-[180px] max-sm:mx-auto"/>
              </Link>

              <div className="cr-right-bar flex max-sm:justify-center max-sm:mt-[10px]">
                <Link to="/search" className="cr-right-bar-item pr-[10px] md:pr-[30px]  flex items-center">
                  <IoMdSearch className="ri-heart-3-line pr-[5px] text-[21px] leading-[17px]"/>
                  <span className=" font-Poppins text-[15px] leading-[15px] hidden md:block font-medium text-[#000]">Search</span>
                </Link>

                {user.fullname ? (
                  <div className="flex items-center pr-[30px]">
                    <FiUser className="ri-heart-3-line pr-[5px] text-[21px] leading-[17px]"/>
                    <span className=" font-Poppins text-[15px] leading-[15px] font-medium text-[#000]">{user.fullname}</span>
                    <button 
                      onClick={handleLogout} 
                      className="ml-[10px]  text-[15px] text-[#000] underline"
                    >
                      <IoLogOut className="text-red-700 font-bold"/>
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="cr-right-bar-item pr-[10px] md:pr-[30px]  flex items-center">
                    <FiUser className="ri-heart-3-line pr-[5px] text-[21px] leading-[17px]"/>
                    <span className=" font-Poppins text-[15px] leading-[15px] hidden md:block font-medium text-[#000]">Sign Up</span>
                  </Link>
                )}

                <Link to="/cart" className="cr-right-bar-item Shopping-toggle  flex items-center">
                  <LuShoppingCart className="ri-shopping-cart-line pr-[5px] text-[21px] leading-[17px]"/>
                  <span className=" font-Poppins text-[15px] leading-[15px] hidden md:block font-medium text-[#000]">Cart {cartCount.items.length==0 ? "" : `(${cartCount.items.length})` }</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
