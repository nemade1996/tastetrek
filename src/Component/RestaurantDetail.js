import React, { useEffect, useState } from 'react'
import { RESTAURANT_DETAIL_URL } from '../utils/constant'
import { useParams } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { TbBowlSpoon } from "react-icons/tb";
import OffersGrid from './OffersGrid';
import RestaurantMenu from './RestaurantMenu';


const RestaurantDetail = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [restaurantDetail, setRestaurantDetail] = useState(null);
    const [offers, setOffers] = useState([]);

    const {resId} = useParams();

    useEffect(()=>{
        fetchRestaurantDetails();
    },[])
    
    const fetchRestaurantDetails= async ()=>{
        try{
            const response = await fetch(RESTAURANT_DETAIL_URL+resId);
            if(!response.ok){
                throw new Error('Network response was not ok');
              }
            const rawData = await response.json();

            setRestaurantDetail(rawData?.data?.cards[2]?.card?.card?.info || {});
 
            setOffers(rawData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
        

        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    const { name, cuisines,totalRatingsString,sla, totalRatings, multiOutlet, costForTwoMessage, isOpen, avgRating, locality, areaName, costForTwo, slaString } = restaurantDetail || {};


  return (
    <div>
        <section className="relative pb-[70px] pt-[70px]">
          <div className="relative mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
            <div className='text-center'>
              <h1 className='heading poppins-bold mb-9 block text-[#2b2b2d] text-[42px] leading-[1.5] font-medium max-[1399px]:text-[26px] max-[991px]:text-[20px]'>{name}</h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap  justify-between relative items-center border-t border-b border-gray-300 py-3 mb-5">
              <div className='flex flex-col'>
                <p className='flex items-center'><FaRegStar className='mr-1'/><p className='font-medium text-[#004f4e] poppins-semibold text-[18px]'>Rating : </p> {avgRating} | {totalRatingsString} | {totalRatings}</p>  
              </div>
              <div className='flex flex-col'>
                <p className='flex items-center'><IoLocationOutline /> <p className='font-medium text-[#004f4e] poppins-semibold text-[18px]'>Locality : </p> {isOpen ? "Open Now" : "Close Now"} | {locality} | {areaName}</p>
              </div>          
            </div>
            <div className='flex flex-col items-center'>
              <p className='flex items-center text-[20px] font-medium text-[#004f4e] poppins-semibold'><TbBowlSpoon />  {cuisines+ ", "} | {costForTwoMessage} | {multiOutlet ? "MultiCuisins" : "No MultiCuisins"}</p>  
            </div> 
            <OffersGrid offers={offers}/>
            <RestaurantMenu/>
          </div>
        </section>
    </div>
  )
}

export default RestaurantDetail