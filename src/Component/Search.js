import React, { useRef } from 'react'
import { IoMdSearch } from "react-icons/io";
import { RESTAURANT_GRID_URL } from '../utils/constant';
import { useState, useEffect } from 'react';
import { RESTAURANT_IMG_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const Search = () => {

  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchIntoData, setSearchIntoData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [noSearchText, setNoSearchText] = useState("")
  const [isSearched, setIsSearched] = useState(false); 

  const searchRef = useRef();


    useEffect(()=>{
      fetchRestaurantData();
    },[]);


    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(RESTAURANT_GRID_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const rawdata = await response.json();
        setSearchIntoData(rawdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const handleSearch = (e) => {
      e.preventDefault();
      const searchText = searchRef.current.value.toLowerCase();
  
      if (searchText) {
        const results = searchIntoData.filter(restaurant => {
          return restaurant.info.name.toLowerCase().includes(searchText) || 
                 restaurant.info.locality.toLowerCase().includes(searchText) ||
                 restaurant.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchText));
        });
        setSearchResult(results);
        setNoSearchText(""); 
        setIsSearched(true);
      } 
        else {
        setNoSearchText("Please enter the search text");
        setSearchResult([]); 
        setIsSearched(false);
      }
    };


  return (
    <div>
      <section className="section-about py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full justify-center">
            <div className="min-[992px]:w-[50%] w-full px-[12px] text-center">
              <div className='text-center inline-block'>
              <h3 className='title text-[20px] poppins-semibold mb-2 leading-tight font-medium text-[#111] mb-2'>Search by Name, Cuisine & Locality</h3>
              </div>
            <form className="cr-search mb-8 relative max-w-[600px] m-auto text-center">
              <input ref={searchRef} className="search-input w-full md:w-[600px] h-[45px] pl-[15px] pr-[75px] border-[1px] border-solid border-[#64b496] rounded-[5px] outline-[0] " type="text" placeholder="Enter Search"/>
              <button 
                  type="submit"  onClick={handleSearch} className="search-btn w-[45px] bg-[#64b496] absolute right-[0] top-[0] bottom-[0] rounded-r-[5px] flex items-center justify-center">
                <IoMdSearch className="ri-heart-3-line pr-[5px] text-[30px] leading-[17px] text-white"/>
              </button>
            </form>
            <p className='text-red-600'>{noSearchText}</p>
            </div>
            {isSearched && searchResult.length > 0 ? (
            <div className='w-full mb-[30px]'>
              <div className='flex flex-wrap col-100 mb-[-24px]'>
              {searchResult.map((restaurant, index) => (
                <div key={index} className="w-full lg:w-[16.5%] md:w-[33.33%] sm:w-[50%] px-[12px] cr-product-box mb-[24px]">
                  <div className='w-full cr-product-image rounded-[5px] flex items-center justify-center relative'>
                    <img src={`${RESTAURANT_IMG_URL}${restaurant.info.cloudinaryImageId}`}/>
                  </div>
                  <div className="cr-product-card p-[12px] border-[1px] mx-3 md:mx-auto border-solid border-[#e9e9e9] bg-[#fff] rounded-[5px] overflow-hidden flex-col max-[480px]:w-full">
                    <Link to={`/restaurants/${restaurant.info.id}`}> 
                      <h3 className="title text-[18px] poppins-semibold mb-2 leading-tight font-medium text-[#111] hover:text-[#004f4e] flex justify-left">{restaurant.info.name}</h3>
                    </Link>
                    <p className='pb-3 justify-left text-[14px] leading-tight items-center gap-1 border-b text-[#565656] border-[#e9e9e9]'>{restaurant.info.locality}, {restaurant.info.areaName}</p>
                    <p className='flex mt-3 text-[#565656] text-[13px]'>Cuisines: {restaurant.info.cuisines.join(', ')}</p>
                  </div>
                </div>
              ))}
              </div> 
            </div>
            )
             : isSearched && searchResult.length === 0 ? ( // Show message only after search
              <p className='w-full font-extrabold flex align-middle justify-center text-[25px] text-[#64b496]'>No result found</p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search