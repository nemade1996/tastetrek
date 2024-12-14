import React, { useState, useEffect } from 'react';
import HeroSlider from './HeroSlider';
import MenuSlider from './MenuSlider';
import TopRestaurant from './TopRestaurant';
import RestaurantGrid from './RestaurantGrid';
import ListingBoxes from './ListingBoxes';
import CustomerBox from './CustomerBox';
import Shimmer from './Shimmer';

// Main layout component
const AppLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Shimmer type="banner" />
          <Shimmer type="circle" />
          <Shimmer type="grid" />
          <Shimmer type="grid" />
          <Shimmer type="list" />
        </>
      ) : (
        <>
          <HeroSlider />
          <MenuSlider />
          <TopRestaurant />
          <RestaurantGrid />
          <ListingBoxes />
          <CustomerBox />
        </>
      )}
    </>
  );
};

export default AppLayout;
