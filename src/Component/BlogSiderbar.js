import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const BlogSiderbar = ({info, onCategorySelect}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sortedPosts = info
    .map(blog => ({
      bid: blog.bid,
      title: blog.title,
      date: new Date(blog.date), 
      imageUrl: blog.imageUrl
    }))
    .sort((a, b) => b.date - a.date);

  const recentPosts = sortedPosts.slice(0, 3);



  const handleCategoryClick=(category)=>{
    setSelectedCategory(category);
    onCategorySelect(category);
  }

  const categoryCount = info.reduce((acc, blog) => {
    acc[blog.category] = (acc[blog.category] || 0) + 1;
    return acc;
  }, {});

  const categories = ['All', ...Object.keys(categoryCount)];

  const onClickBlogSearch =()=>{
    
  }

  return (
    <div>
        <div className='sidebar '>
        <div className="cr-blog-sideview p-[24px] bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] sticky top-[30px]">
        {/* <div className="cr-serch-box mb-[25px]">
          <form className="cr-search relative">
          <input className="search-input w-full h-[44px] pl-[20px] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] outline-[0] max-[1199px]:pl-[8px]" type="text" placeholder="Search here..." />
          <a onClick={onClickBlogSearch} className="search-btn w-[44px] flex items-center justify-center bg-[#004f4e] absolute right-[0] top-[0] bottom-[0] rounded-r-[5px]">
          <IoMdSearch className='text-white text-[23px]'/>
          </a>
          </form>
        </div> */}
        <div className="cr-blog-categories">
            <div className="blog-heading pb-[20px]">
            <h4 className="mb-[0] font-Poppins text-[16px] font-medium leading-[1] text-[#2b2b2d]">Category</h4>
            </div>
            <div className="cr-blog-categories-content pb-[30px]">
            <ul>
              {
                categories.map((category)=>{
                  return(
                  <li onClick={() => handleCategoryClick(category === 'All' ? null : category)}  className="cursor-pointer p-[12px] relative font-Poppins text-[14px] leading-[1] text-[#7a7a7a] border-[1px] border-solid border-[#e9e9e9] rounded-[5px] flex items-center max-[1199px]:text-[12px] max-[991px]:text-[14px] mb-[5px]">{category} {category !== 'All' && `(${categoryCount[category]})`}</li>
                  )
                })
              }
              </ul>
            </div>
        </div>
        <div className="cr-blog-recent-posts mb-[30px]">
            <div className="blog-heading pb-[20px]">
            <h4 className="mb-[0] font-Poppins text-[16px] font-medium leading-[1] text-[#2b2b2d]">Recent Posts</h4>
            </div>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex gap-1 cr-blog-recent-post mb-[10px] p-[12px] border-b border-solid border-bottom border-[#e9e9e9] rounded-[5px]">
              <div className="cr-blog-recent-image w-1/4 relative mr-1">
                <img src={post.imageUrl} alt={post.title} className="rounded-[5px] h-16 object-cover" />
              </div>
              <div className="cr-blog-recent-content text-left">
                <span className="font-Poppins text-[13px] text-[#64b496] leading-[2.5]">{new Date(post.date).toLocaleDateString()}</span>
                <Link to={`/blog/${post.bid}`}>  {/* Use 'bid' here */}
                  <h4 className="mb-[0] pb-[5px] font-Poppins text-[14px] font-bold text-[#2b2b2d] leading-[1.2]">{post.title}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
    </div>
  )
}

export default BlogSiderbar