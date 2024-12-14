import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
    // Calculate the number of full stars, half stars, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    // Generate arrays to render stars
    const stars = [
        ...Array(fullStars).fill('full'),
        ...(hasHalfStar ? ['half'] : []),
        ...Array(emptyStars).fill('empty')
    ];

    return (
        <div className="flex">
            {stars.map((type, index) => {
                if (type === 'full') {
                    return <FaStar key={index} className="text-yellow-500" />;
                } else if (type === 'half') {
                    return <FaStarHalfAlt key={index} className="text-yellow-500" />;
                } else {
                    return <FaRegStar key={index} className="text-yellow-500" />;
                }
            })}
        </div>
    );
};

export default Rating