import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT_DETAIL_URL } from '../utils/constant';
import { FaPlus, FaMinus } from "react-icons/fa";
import { RESTAURANT_IMG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Rating from './Rating';
import dummy from "../images/dummy.jpg"


const RestaurantMenu = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [restaurantMenu, setRestaurantMenu] = useState([]); 
    const [openItems, setOpenItems] = useState({});
    const dispatch = useDispatch();
    const { resId } = useParams();
    const [addedItem, setAddedItem] = useState([]);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [resId]); 

    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(RESTAURANT_DETAIL_URL + resId);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const rawData = await response.json();
        const menuData = rawData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const filterOnlyCategories = menuData.filter((c) => 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        setRestaurantMenu(filterOnlyCategories);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
    };

    const toggleAccordion = (index) => {
      setOpenItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const limitedDescription = (text, limitOfWords) => {
        if (!text) return '';
        return text.length > limitOfWords ? text.slice(0, limitOfWords) + "..." : text;
    };

    const handleAddToCart = (item) => {
      const id = item.card.info.id;
      const name = item.card.info.name;
      const price = parseFloat(item.card.info.price) / 100 || 0; // Ensure it’s a number and in correct format
      const imageId = item.card.info.imageId || 'default-image-id.jpg'; // Fallback
  
  
      dispatch(addItem({ id, name, price, imageId }));
      setAddedItem(prev=> [...prev,id])


      //let prevArray = []; 
      // const addItem = (prev, item) => {
      //     return [...prev, item]; 
      // };
      // prevArray = addItem(prevArray, 1); // Add 1
  };

    return (
        <div>
            <section className="relative pb-[0px] pt-[70px] px-3 md:px-0">
                <div className="relative mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className='text-center'>
                        <h1 className='font-Manrope text-[30px] mb-7 font-bold leading-[1.2] text-[#2b2b2d] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px]'>Check Our Menu</h1>
                    </div>
                </div>

                {restaurantMenu.map((restaurantMenuItem, index) => (
                    <div className="border border-gray-200 rounded-lg mb-2" key={restaurantMenuItem.card.card.id}>
                        <button 
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
                        >
                            <span className="text-lg font-semibold">
                                {restaurantMenuItem?.card?.card?.title || 'Menu Title'}
                            </span>
                            {openItems[index] ? (
                                <FaMinus className="text-gray-500" />
                            ) : (
                                <FaPlus className="text-gray-500" />
                            )}
                        </button>
                        {openItems[index] && (
                            <div className="p-4 border-t border-gray-200">
                                <div className='flex flex-wrap gap-4'>
                                    {restaurantMenuItem?.card?.card?.itemCards?.length > 0 ? (
                                        restaurantMenuItem.card.card.itemCards.map((item) => (
                                            <div className='flex flex-wrap w-full sm:w-[48%] md:w-[32%] bg-slate-200 p-3 border-[1px] border-solid border-[#e9e9e9] rounded-[5px]' key={item.card.info.id}>
                                                <div className='w-3/4 pr-1'>
                                                    <h2 className="text-lg font-bold">{item?.card?.info?.name || 'Item Name'}</h2>
                                                    <p>{
                                                      item?.card?.info?.ratings?.aggregatedRating?.rating !== undefined ? <Rating rating={item?.card?.info?.ratings?.aggregatedRating?.rating}/> :<p>No Rating Available</p>
                                                      }
                                                       </p>
                                                    <h4 className='text-base flex items-center'><MdOutlineCurrencyRupee /> {(item?.card?.info?.price / 100).toFixed(2)}</h4>
                                                    <p className='text-sm'>{limitedDescription(item?.card?.info?.description, 80)}</p>
                                                </div>
                                                <div className='w-1/4 relative'>
                                                  {
                                                    item?.card?.info?.imageId !== undefined ? <img src={`${RESTAURANT_IMG_URL}${item?.card?.info?.imageId}`} className='w-24 ' /> : <img src={dummy} className='w-24 ' />
                                                  }
                                                  <button onClick={() => handleAddToCart(item)} 
                                                      className={`cr-shopping-bag inline-block w-full md:w-auto absolute bottom-[-16px] items-center justify-center p-0 ${addedItem.includes(item.card.info.id) ? 'bg-gray-500' : 'bg-[#004f4e]'} text-[#fff] py-1 m-0 md:m-2 px-4 rounded`} 
                                                      disabled={addedItem.includes(item.card.info.id)}
                                                  >
                                                      {addedItem.includes(item.card.info.id) ? 'Added' : 'Add +'}
                                                  </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No items available</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RestaurantMenu;
