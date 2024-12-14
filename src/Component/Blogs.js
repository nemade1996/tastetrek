import React, { useState } from 'react'
import { blogs } from '../utils/constant'
import BlogSiderbar from './BlogSiderbar'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [showMinBlog, setShowMinBlog] = useState(4)

  const handleCategorySelect=(category)=>{
    if(category){
      setFilteredBlogs(blogs.filter(blog => blog.category === category));
    } else {
      setFilteredBlogs(blogs); // Show all blogs if no category is selected
    }
  }

    const handleLoadMore = () =>{
      setShowMinBlog(showMinBlog+4);
    }



  return (
    <div>
      <Breadcrumb title="Blogs"/>
      <section className="section-blog-Classic py-[70px]">
        <div className="flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px] p-4">
              <div className="md:col-span-4 rounded-md">
                <BlogSiderbar info={blogs} onCategorySelect={handleCategorySelect}/>
              </div>

              <div className="md:col-span-8 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
                  {
                      filteredBlogs.slice(0,showMinBlog).map((blog)=>(
                    <div className="cr-blog-classic bg-[#fff] border-[1px] border-solid border-[#e9e9e9] rounded-[5px]">
                      
                      <div className="cr-blog-image relative overflow-hidden rounded-b-[5px]">
                        <img src={blog.imageUrl} alt="blog-1" className="h-[200px] object-cover transition-all duration-[0.5s] ease-in-out rounded-b-[5px] w-full scale-[1] hover:scale-[1.1]"/>
                      </div>
                      <div className="cr-blog-classic-content text-left p-[24px] max-[575px]:p-[30px] max-[360px]:p-[5px]">
                        <div className="cr-comment pb-[10px]">
                          <span className="font-Poppins text-[12px] text-[#64b496] leading-[1]">{blog.author} 
                            <span className="font-Poppins text-[12px] text-[#7a7a7a]"> / {blog.category}</span>
                            <span className="font-Poppins text-[12px] text-[#7a7a7a]"> / {blog.date}</span>
                            </span>
                        </div>
                        <Link to={"/blog/"+blog.bid}><h4 className="mb-[0] pb-[15px] font-Manrope text-[24px] font-bold leading-[1.2] text-[#2b2b2d] max-[575px]:text-[18px]">{blog.title}</h4></Link>
                        <p className="mb-[0] font-Poppins text-[14px] text-[#7a7a7a] leading-[1.75] pb-[10px] max-[575px]:text-[14px]">{blog.content.join(" ").slice(0,100)+"..."}</p>
                        <Link to={"/blog/"+blog.bid} className="font-Manrope text-[14px] font-bold leading-[1.875] uppercase text-[#64b496] relative">read more</Link>
                      </div>
                    </div>
                    )
                    )
                  }
                </div>
                {showMinBlog < filteredBlogs.length && ( 
                  <div className="cr-pagination mt-[24px] flex justify-center w-full">
                    <h2 onClick={handleLoadMore} className="font-semibold cursor-pointer border-b-2 border-b-green-500 text-[#64b496]">Load More</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs