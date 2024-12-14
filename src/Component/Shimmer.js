import React from "react";

const Shimmer = ({ type }) => {
  const shimmerTypes = {
    banner : (
      <section className="shimmer banner py-4">
        <div className="relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex justify-center gap-4">
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-[350px] bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    ),
    circle: (
      <section className="shimmer-circle py-4">
        <div className="relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex justify-center gap-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full md:w-2/12 bg-white rounded-lg overflow-hidden">
                <div className="h-12 w-12 md:h-40 md:w-40 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 animate-pulse mb-2 w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    grid: (
      <section className="shimmer-grid py-4">
        <div className="relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex justify-center gap-7">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-full md:w-2/6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-300 animate-pulse mb-4 w-5/6"></div>
                  <div className="h-10 bg-gray-300 animate-pulse w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    list: (
      <section className="shimmaer-list py-4">
        <div className="relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex justify-center gap-7">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-full md:w-2/6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-14 bg-gray-300 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 animate-pulse mb-2 w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
  }


  return shimmerTypes[type] || <div>Invalid shimmer type</div>;
};

export default Shimmer;
