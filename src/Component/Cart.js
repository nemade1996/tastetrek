import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/cartSlice';
import { MdOutlineCurrencyRupee, MdOutlineDeleteOutline } from "react-icons/md";
import { RESTAURANT_IMG_URL } from '../utils/constant';
import Breadcrumb from './Breadcrumb';
import emptycart from "../images/empty-cart.png"
import { updateItemQuantity } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  
  // Select items from the Redux store
  const cartItems = useSelector(state => state.cart.items);

  const removeItemHandle = (item) => {
    dispatch(removeItem({ id: item.id }));
  };

  const increaseQuantity = (item) => {
    dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  
  return (
    <>
      <Breadcrumb title="Cart" />
      <section className="section-cart pt-[70px] pb-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              {cartItems.length === 0 ? (
                <>
                <img src={emptycart} className='w-[200px] m-auto' />
                <div className="text-center py-4 font-bold text-[30px] text-teal-900">Your cart is empty.</div>
                </>
              ) : (
                <div className="cr-cart-content max-[767px]:overflow-x-scroll aos-init aos-animate">
                  <div className="flex flex-wrap w-full max-[767px]:w-[700px]">
                    <form action="#" onSubmit={handleSubmit} className="w-full">
                      <div className="cr-table-content overflow-auto">
                        <table className="w-full border-[1px] border-solid border-[#e9e9e9] rounded-[5px] overflow-hidden">
                          <thead>
                            <tr className="border-[1px] border-solid border-[#e9e9e9]">
                              <th className="p-[15px] text-[#444] text-[15px] font-semibold text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9]">Product</th>
                              <th className="p-[15px] text-[#444] text-[15px] font-semibold text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9]">Price</th>
                              <th className="p-[15px] text-[#444] text-[15px] font-semibold text-center capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9]">Quantity</th>
                              <th className="p-[15px] text-[#444] text-[15px] font-semibold text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9]">Total</th>
                              <th className="p-[15px] text-[#444] text-[15px] font-semibold text-left capitalize align-middle whitespace-nowrap leading-[1] tracking-[0] bg-[#e9e9e9]">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item, index) => (
                              <tr className="border-b-[1px] border-solid border-[#e9e9e9]" key={index}>
                                <td className="cr-cart-name w-[200px] md:w-[40%] py-[7px] px-[7px] text-[#444] text-[16px] text-left bg-[#f7f7f8]">
                                  <p className="text-[#444] font-medium text-[14px] block md:flex leading-[1.5] tracking-[0.6px] items-center">
                                    <img src={`${RESTAURANT_IMG_URL}${item.imageId}`} alt={item.name} className="cr-cart-img mr-[20px] w-[60px] h-[60px] object-cover border-[1px] border-solid border-[#e9e9e9] rounded-[5px]" />
                                    <p>{item.name}</p>
                                  </p>
                                </td>
                                <td className="cr-cart-price py-[25px] px-[14px] text-[#555] text-[15px] font-medium text-left bg-[#f7f7f8]">
                                  <span className="amount text-[#555] text-[15px] flex items-center font-medium text-left"><MdOutlineCurrencyRupee /> {item.price.toFixed(2)}</span>
                                </td>
                                <td className="cr-cart-qty py-[25px] px-[14px] text-[#444] text-[16px] text-left bg-[#f7f7f8]">
                                  <div className="flex items-center">
                                    <button onClick={() => decreaseQuantity(item)} className="bg-gray-200 p-1 rounded">-</button>
                                    <input type="number" value={item.quantity} min="1" className="quantity w-[30px] text-center mx-2" readOnly />
                                    <button onClick={() => increaseQuantity(item)} className="bg-gray-200 p-1 rounded">+</button>
                                  </div>
                                </td>
                                <td className="cr-cart-subtotal py-[25px] px-[14px] text-[#555] font-medium text-[15px] text-left bg-[#f7f7f8]">{(item.price * item.quantity).toFixed(2)}</td>
                                <td className="cr-cart-remove py-[25px] px-[14px] w-[90px] text-[#555] font-medium text-[15px] text-right bg-[#f7f7f8]">
                                  <p className="cursor-pointer transition-all duration-[0.3s] ease-in-out my-[0] mx-auto text-[#555] hover:text-[#fb5555]">
                                    <MdOutlineDeleteOutline className='text-2xl text-[#004f4e]' onClick={() => removeItemHandle(item)} />
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex flex-wrap w-full">
                        <div className="w-full">
                          <div className="cr-cart-update-bottom pt-[30px] flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
                            <Link to="/" className="cr-links text-[#444] inline-block underline-[1px] text-[15px] leading-[20px] font-medium tracking-[0.8px]">Continue Shopping</Link>
                            <Link to="/checkout" className="cr-button h-[40px] font-bold transition-all duration-[0.3s] ease-in-out py-[8px] px-[22px] text-[14px] font-Manrope capitalize leading-[1.2] bg-[#64b496] text-[#fff] border-[1px] border-solid border-[#64b496] rounded-[5px] flex items-center justify-center hover:bg-[#000] hover:border-[#000]">
                              Check Out
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
