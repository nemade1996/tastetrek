import React, { useRef } from 'react'
import Breadcrumb from './Breadcrumb'
import { useSelector } from 'react-redux'
import { RESTAURANT_IMG_URL } from '../utils/constant';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import payment from "../images/payment.png"
import { useState } from 'react';
import { OffersData } from '../utils/constant';
import { useEffect } from 'react';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [successMessage, setSuccessMessage] = useState("");
  const [coupanMsg, setCoupanMsg] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const postalcodeRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const coupancodeRef = useRef(null);

  useEffect(() => {
    setTotalPrice(subtotal); // Initialize totalPrice with subtotal
  }, [cartItems, subtotal]);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (!fnameRef.current || !lnameRef.current || !addressRef.current || !cityRef.current || !postalcodeRef.current || !countryRef.current || !stateRef.current) {
      // console.error("One or more refs are not attached properly");
      return;
    }
    
    const billingDetails = {
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      postalCode: postalcodeRef.current.value,
      country: countryRef.current.value,
      state: stateRef.current.value,
    };
    setSuccessMessage("Success")
  }

  const applyCoupan = () => {
    const couponCodeInfo = coupancodeRef.current.value;
    const offer = OffersData.flatMap(category => category.offers).find(offer => offer.couponCode === couponCodeInfo);
  
    if (offer) {
      const discountAmount = offer.discountAmount || (subtotal * offer.discountPercentage) / 100;
   
      if (subtotal >= (offer.discountAmount ? 500 : 0)) { 
        const discountedTotal = subtotal - discountAmount;
        setCoupanMsg("Coupon applied successfully");
        setTotalPrice(discountedTotal);
      } else {
        setCoupanMsg(`Minimum order amount not met for this coupon.`);
      }
    } else {
      setCoupanMsg("Invalid coupon code.");
    }
  };


  return (
    <div>
      <Breadcrumb title="Checkout"/>
      <div className="flex flex-wrap justify-between relative py-[70px] items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="cr-checkout-rightside w-full md:w-[33.33%] px-[12px] mb-[24px]">
            <div className="cr-sidebar-wrap border-[1px] border-solid border-[#e9e9e9] mb-[30px] p-[15px] bg-[#fff] rounded-[5px]">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title">
                  <h3 className="cr-sidebar-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">Summary</h3>
                </div>
                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                  <div className="cr-checkout-pro mt-[34px]">
                    {
                      cartItems.map(item=>(
                        <div className="w-full mb-[15px]">
                          <div className="cr-product-inner flex flex-row items-center">
                            <div className="cr-pro-image-outer w-[80px] mr-[15px]">
                              <div className="cr-pro-image overflow-hidden">
                                <p className="image">
                                <img className="main-image h-[80px]" src={`${RESTAURANT_IMG_URL}${item.imageId}`} alt="Product w-full"/>
                                </p>
                              </div>
                            </div>
                            <div className="cr-pro-content cr-product-details justify-start w-[calc(100%-143px)] p-[0] flex flex-col border-[0]">
                              <h5 className="cr-pro-title text-left mb-[.5rem] pr-[15px] text-[15px] leading-[1.2] max-[1199px]:mb-[0]">
                                <p className="text-[15px] text-[#000] font-medium leading-[1.2]">{item.name}</p>
                              </h5>
                              <p className="cr-price font-Poppins text-[16px] leading-[1] text-[#7a7a7a] text-left max-[1199px]:text-[14px]">
                                <span className="new-price flex items-center text-[#64b496] font-bold"><MdOutlineCurrencyRupee />{item.price} X {item.quantity}</span>
                                <span className="old-price ml-[5px] text-[13px] max-[1199px]:text-[12px]">Total = {item.price * item.quantity}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="cr-checkout-summary border-t-[1px] border-solid border-[#e9e9e9] py-5 mt-5">
                    <div className="flex justify-between items-center mb-[10px]">
                      <span className="text-left text-[#7a7a7a] text-[14px] leading-[24px] tracking-[0]">Sub-Total</span>
                      <span className="flex items-center text-right text-[#000] text-[15px] leading-[24px] font-medium"><MdOutlineCurrencyRupee /> {subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center mb-[10px]">
                      <span className="text-left text-[#7a7a7a] text-[14px] leading-[24px] tracking-[0]">Delivery Charges</span>
                      <span className="flex items-center text-right text-[#000] text-[15px] leading-[24px] font-medium"><MdOutlineCurrencyRupee /> Free</span>
                    </div>
                    <div className="cr-checkout-summary-total flex justify-between items-center mb-[0] border-t-[1px] border-solid border-[#e9e9e9] pt-[19px] mt-[16px]">
                      <span className="text-left font-Manrope text-[16px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]">Subtotal</span>
                      <span className="flex items-center text-right font-Manrope text-[16px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]"> {subtotal}</span>
                    </div>
                    <span className="flex gap-1 align-middle border-t-[1px] border-solid border-[#e9e9e9] pt-[19px] mt-[16px]">
                      <input ref={coupancodeRef} type="text" id="offercode" placeholder='Enter Offer Code' className='border-[1px] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a]' />
                      <button onClick={applyCoupan} className='h-[50px] bg-[#004f4e] text-white font-medium text-[16px] rounded-[5px] hover:bg-[#111] px-2'>Apply</button>
                    </span>
                    {coupanMsg && <div className="text-green-600">{coupanMsg}</div>}
                    <div className="cr-checkout-summary-total flex justify-between items-center mb-[0] border-t-[1px] border-solid border-[#e9e9e9] pt-[19px] mt-[16px]">
                      <span className="text-left font-Manrope text-[22px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]">Total</span>
                      <span className="flex items-center text-right font-Manrope text-[22px] font-semibold text-[#2b2b2d] leading-[24px] tracking-[0]"><MdOutlineCurrencyRupee /> {totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cr-sidebar-wrap cr-checkout-pay-wrap border-[1px] border-solid border-[#e9e9e9] mb-[30px] p-[15px] bg-[#fff] rounded-[5px]">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title">
                  <h3 className="cr-sidebar-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">Payment Method</h3>
                </div>
                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                  <div className="cr-checkout-pay">
                    <form action="#" className="payment-options flex flex-col">
                      <span className="cr-pay-option">
                      <span>
                      <input type="radio" id="pay1" name="radio-group"/>
                      <label for="pay1" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">Cash On Delivery</label>
                      </span>
                      </span>
                      <span className="cr-pay-option">
                      <span>
                      <input type="radio" id="pay2" name="radio-group"/>
                      <label for="pay2" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">UPI</label>
                      </span>
                      </span>
                      <span className="cr-pay-option">
                      <span>
                      <input type="radio" id="pay3" name="radio-group"/>
                      <label for="pay3" className="mb-[0] relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#7a7a7a] tracking-[0] text-[14px]">Bank Transfer</label>
                      </span>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="cr-sidebar-wrap cr-check-pay-img-wrap border-[1px] border-solid border-[#e9e9e9] mb-[0] p-[15px] bg-[#fff] rounded-[5px]">
              <div className="cr-sidebar-block">
                <div className="cr-sb-title text-[20px] font-semibold tracking-[0] mb-[0] relative text-[#000] leading-[1.2]">
                  <h3 className="cr-sidebar-title">Payment Mode</h3>
                </div>
                <div className="cr-sb-block-content mb-[0] mt-[15px]">
                  <div className="cr-check-pay-img-inner flex justify-between w-full flex-wrap">
                    <div className="cr-check-pay-img">
                      <img src={payment} alt="payment" className="w-full"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-checkout-leftside w-full md:w-[66.66%] px-[12px] mb-[24px]">
            <div className="cr-checkout-content">
              <div className="cr-checkout-inner">
                <div className="cr-checkout-wrap p-[24px] border-[1px] border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px]">
                  <div className="cr-checkout-block cr-check-bill">
                    <h3 className="cr-checkout-title text-[20px] font-semibold tracking-[0] mb-[26px] relative block text-[#2b2b2d] text-manrope leading-[1.2] max-[575px]:text-[18px]">Billing Details</h3>
                    <div className="cr-bl-block-content">
                      <div className="cr-check-bill-form mb-[-24px]">
                      <form onSubmit={handleSubmit} method="post" className="flex flex-row flex-wrap mx-[-15px]">
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">First Name*</label>
                          <input ref={fnameRef} type="text" name="firstname" placeholder="Enter your first name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required />
                        </span>
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Last Name*</label>
                          <input ref={lnameRef} type="text" name="lastname" placeholder="Enter your last name" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" required />
                        </span>
                        <span className="cr-bill-wrap w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Address</label>
                          <input ref={addressRef} type="text" name="address" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Address Line 1" />
                        </span>
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">City *</label>
                          <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">
                            <select ref={cityRef} name="cr_select_city" id="cr-select-city" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]" required>
                              <option value="" disabled selected>City</option>
                              <option value="1">Mumbai</option>
                              <option value="2">Pune</option>
                              <option value="3">Bhusawal</option>
                            </select>
                          </span>
                        </span>
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Post Code</label>
                          <input ref={postalcodeRef} type="text" name="postalcode" className="h-[50px] bg-transparent border-[1px] border-solid border-[#e9e9e9] text-[#2b2b2d] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px]" placeholder="Post Code" required />
                        </span>
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Country *</label>
                          <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">
                            <select ref={countryRef} name="cr_select_country" id="cr-select-country" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]" required>
                              <option value="" disabled selected>Country</option>
                              <option value="1">India</option>
                              <option value="2">Pakistan</option>
                            </select>
                          </span>
                        </span>
                        <span className="cr-bill-wrap cr-bill-half w-[50%] max-[575px]:w-full px-[15px]">
                          <label className="mb-[7px] inline-block text-[#2b2b2d] text-[15px] font-medium tracking-[0] leading-[1]">Region State</label>
                          <span className="cr-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#e9e9e9] text-[14px] p-[0] mb-[24px] rounded-[5px]">
                            <select ref={stateRef} name="cr_select_state" id="cr-select-state" className="cr-bill-select appearance-none outline-[0] border-[0] bg-[#fff] flex-[1] px-[10px] text-[#7a7a7a] cursor-pointer rounded-[5px]" required>
                              <option value="" disabled selected>State</option>
                              <option value="1">Maharastra</option>
                              <option value="2">Kerala</option>
                            </select>
                          </span>
                        </span>
                        
                        <span className="cr-bill-wrap w-full px-[15px]">
                          <button type="submit" className="w-full h-[50px] bg-[#004f4e] text-white font-medium text-[16px] rounded-[5px] hover:bg-[#111] transition-all">
                            Submit
                          </button>
                        </span>
                      </form>

                      {
                        successMessage == "Success" ? <h2 className='text-lg font-semibold py-3 text-center text-green-600'>Your order has been placed successfully!</h2> : ""
                      }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout