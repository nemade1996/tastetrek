import React, { useRef, useState } from 'react'
import logo from "../images/logo-black.png"
import { SlSocialFacebook } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailRef = useRef();
  const [newsletterMsg, setNewsletterMsg] = useState("")

  const handleNewsletter=(e)=>{
    e.preventDefault();
    const emailValue = emailRef.current.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue  && emailPattern.test(emailValue)) {
      setNewsletterMsg("Thank you for subscribing to our newsletter!")
    }else{
      setNewsletterMsg("Please enter a valid email address.")
    }
    
  }

  return (
    <>
    <footer className='flex px-4 md:px-[10px] flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]'>
      <div className="border-y border-default-200">
        <div className="container py-16">
          <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="xl:col-span-2 md:col-span-3">
              <div>
                <img src={logo} alt="logo" className="h-10 flex dark:hidden" />
                <p className="text-[15px] text-default-800 mt-6">Subscribe now for insights, news, and special offers just for you! Feel free to adjust the wording to better fit your brand voice!</p>
                <form className="space-y-2 mt-6">
                  <div className="relative w-full">
                    <div className="relative w-full">
                      <input ref={emailRef} type="email" placeholder="Enter Your Email" className="px-3 border-[1px] border-solid border-[#e9e9e9] focus:ring-0 focus:border-default-200 py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100" />
                      <button onClick={handleNewsletter} type="submit" className="inline-flex items-center justify-center gap-2 px-7 absolute top-[6px] end-[6px] h-10 bg-primary/20 text-primary rounded-md transition-all duration-500 bg-[#004f4e] text-[#fff] hover:bg-[#111] hover:text-white" >Send </button>
                    </div>
                    <p>{newsletterMsg ? <p className="text-green-600">{newsletterMsg}</p> : <p className="text-green-600">{newsletterMsg}</p> }</p>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <h5 className="poppins-semibold xl:text-xl lg:text-lg font-medium text-default-800 mb-2">Company</h5>
                <li><Link className=" text-[15px] text-default-700 hover:text-default-950 transition-all" to="/">Home</Link></li>
                <li><Link className=" text-[15px] text-default-700 hover:text-default-950 transition-all" to="/about">About Us</Link></li>
                <li><Link className=" text-[15px] text-default-700 hover:text-default-950 transition-all" to="/offers">Offers</Link></li>
                <li><Link className=" text-[15px] text-default-700 hover:text-default-950 transition-all" to="/restaurants">Restaurants</Link></li>
                <li><Link className=" text-[15px] text-default-700 hover:text-default-950 transition-all" to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>

              <ul className="flex flex-col gap-2">
                <h5 className="xl:text-xl lg:text-lg poppins-semibold font-medium text-default-800 mb-2">Social Media</h5>
                <li className="flex items-center gap-3 group">
                  <Link className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg hover:text-[#004f4e]" to="#">
                    <SlSocialFacebook />
                  </Link>
                  <h5 className="text-base font-medium text-default-800">Facebook</h5>
                </li>
                <li className="flex items-center gap-3 group">
                  <Link className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg hover:text-[#004f4e]" to="#">
                  <FiInstagram />
                  </Link>
                  <h5 className="text-base font-medium text-default-800">Instagram</h5>
                </li>
                <li className="flex items-center gap-3 group">
                  <Link className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg hover:text-[#004f4e]" to="#">
                  <FaXTwitter />
                  </Link>
                  <h5 className="text-base font-medium text-default-800">Twitter</h5>
                </li>
                <li className="flex items-center gap-3 group">
                  <Link className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg hover:text-[#004f4e]" to="#">
                  <FiLinkedin />
                  </Link>
                  <h5 className="text-base font-medium text-default-800">Linkedin</h5>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <h5 className="xl:text-xl lg:text-lg poppins-semibold font-medium text-default-800 mb-2">Legal &amp; Press</h5>
                <li><Link className="text-[15px] text-default-700 hover:text-default-950 transition-all" to="#">Privacy Policy</Link></li>
                <li><Link className="text-[15px] text-default-700 hover:text-default-950 transition-all" to="#">Terms &amp; Conditions</Link></li>
                <li><Link className="text-[15px] text-default-700 hover:text-default-950 transition-all" to="#">Presskit</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 m-auto">
        <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
          <p className="text-base text-default-900">2024  © TasteTrek. Crafted and Coded with&nbsp;<span className="text-red-500">❤️</span> by India</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer