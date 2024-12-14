import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../utils/constant';
import Breadcrumb from './Breadcrumb';

const BlogDetail = () => {

  const { bid } = useParams();
  
  const blog = blogs.find(blog => blog.bid === Number(bid));

  if (!blog) {
    return <div>Blog not found!</div>;
  }


  return (
    <div>
      <Breadcrumb title={blog.title}/>
      <section className="blog-details py-[70px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="cr-blog-details">
                <div className="cr-blog-details-image relative mb-[30px]">
                  <img src={blog.imageUrl} alt="blog-1" className="w-full rounded-[5px]"/>
                </div>
                <div className="cr-blog-details-content">
                  <div className="cr-admin-date pb-[15px]">
                    <span className="font-Poppins text-[15px] font-semibold leading-[2] text-[#7a7a7a]">{blog.category} / {blog.date} / {blog.author}</span>
                  </div>
                  <div className="cr-banner mb-[15px] text-center">
                    <h2 className="font-Manrope text-[32px] font-bold text-[#2b2b2d] leading-[1.2] mb-[.5rem] max-[1199px]:text-[28px] max-[991px]:text-[25px] max-[767px]:text-[22px] text-left">{blog.title}</h2>
                  </div>
                  <p className="text-[14px] font-Poppins text-[#7a7a7a] leading-[1.75] mb-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia
                    {blog.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail