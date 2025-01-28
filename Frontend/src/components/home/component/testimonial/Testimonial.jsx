import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial() {
  const testimonials = [
    {
      text: `"I've been a patient of Dr. Jones for years and I've always had a positive experience. He's a very skilled and compassionate doctor. His staff is also very friendly and helpful. I highly recommend this practice."`,
      author: "John D.",
      image:
        "https://i.pinimg.com/originals/e6/30/3d/e6303d720e94a087c39bd4056655a6be.jpg",
    },
    {
      text: `"Dr. Smith and his staff were so professional and friendly. They made me feel comfortable and at ease during my appointment. The doctor took the time to listen to my concerns and explain my treatment options thoroughly. I highly recommend this practice."`,
      author: "Sarah J.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SMMeMmpl3XaKrsSfP9peNQHaLG&pid=Api&P=0&h=220",
    },
    {
      text: `"The staff at Dr. Brown's clinic are outstanding. From the moment you walk in, they make you feel welcome. Dr. Brown is thorough, professional, and genuinely interested in your well-being. Highly recommend!"`,
      author: "Michael B.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: `"Dr. Taylor's practice is hands down the best medical experience I've ever had. The clinic is spotless, and the team is extremely organized. Dr. Taylor has a fantastic bedside manner!"`,
      author: "Sophia L.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: `"I had an incredible experience with Dr. Martinez. He was kind, attentive, and very knowledgeable. I can't thank him enough for the excellent care I received."`,
      author: "James C.",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];

  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="bg-gray-100">
      <div
        className="flex flex-col w-10/12 mx-auto mb-4 py-4"
        data-aos="zoom-out"
      >
        <h2 className="mb-4 mx-auto text-4xl tracking-tight font-extrabold text-blue-800 dark:text-white ">
          Testimonials
          <hr className="w-20 h-1 mx-auto bg-blue-700 border-0 rounded mt-4 dark:bg-blue-700"></hr>
        </h2>
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-10/12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="mx-auto text-center"
              // data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
              // data-aos-duration="2000"
            >
              <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                  {testimonial.text}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </cite>
                </div>
              </figcaption>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
