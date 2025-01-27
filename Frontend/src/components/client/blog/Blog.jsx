import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/Blog"); // Replace with your API URL
        const data = await response.json(); // Parse the JSON data from the response
        setBlogs(data); // Set the fetched data into the blogs state
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  console.log("", blogs?.blog);
  return (
    <div className="w-11/12 mx-auto mb-6">
      <section className="flex gap-12 items-center">
        <div className="w-3/12 items-center">
          <h1 className="font-bold text-2xl leading-10 text-gray-700">
            Read top articles from health experts
          </h1>
          <p className=" text-md leading-7 text-gray-600">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <button className="bg-blue-500 px-8 py-2 rounded-lg mt-4 text-white text-md font-bold">
            See All Article
          </button>
        </div>
        <div className="w-9/12">
          <Swiper
            slidesPerView={1}
            // sm:slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Small screens (mobile)
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // Medium screens (tablet)
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              // Large screens (desktop)
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {blogs.blog?.map((blog, i) => (
              <SwiperSlide
                key={i}
                className=" p-6 rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-50"
              >
                <Link to="/blogs" className="min-h-[320px]">
                  <img
                    src={blog?.image}
                    alt=""
                    className="w-full rounded-md object-cover object-center dark:bg-gray-500"
                  />
                  <p className="pt-4">{blog?.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
