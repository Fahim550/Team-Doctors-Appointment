import React, { useEffect } from "react";

import { Avatar, Blockquote } from "flowbite-react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Testimonial() {
   useEffect(() => {
    Aos.init();
  });
  return (
    <div className="flex flex-col w-10/12 mx-auto mb-4 " data-aos="zoom-out">
      <h2 class="mb-4 mx-auto text-4xl tracking-tight font-extrabold text-blue-800 dark:text-white ">
        Testimonials
        <hr class="w-20 h-1 mx-auto bg-blue-700 border-0 rounded mt-4 dark:bg-blue-700"></hr>
      </h2>
      <div className="flex flex-col gap-8 max-h-[350px] overflow-auto overflow-x-hidden sm:flex-row">
      <figure className="mx-auto max-w-screen-md text-center" data-aos="flip-right"
     data-aos-duration="2000">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
            "I've been a patient of Dr. Jones for years and I've always had a
            positive experience. He's a very skilled and compassionate doctor.
            His staff is also very friendly and helpful. I highly recommend this
            practice."
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar
            rounded
            size="xs"
            img="https://i.pinimg.com/originals/e6/30/3d/e6303d720e94a087c39bd4056655a6be.jpg"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              John D.
            </cite>
          </div>
        </figcaption>
      </figure>
      <figure className="mx-auto max-w-screen-md text-center" data-aos="flip-left"
     data-aos-duration="2000">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote>
          <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
            "Dr. Smith and his staff were so professional and friendly. They
            made me feel comfortable and at ease during my appointment. The
            doctor took the time to listen to my concerns and explain my
            treatment options thoroughly. I highly recommend this practice."
          </p>
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar
            rounded
            size="xs"
            img="https://tse3.mm.bing.net/th?id=OIP.SMMeMmpl3XaKrsSfP9peNQHaLG&pid=Api&P=0&h=220"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">
              Sarah J.
            </cite>
          </div>
        </figcaption>
      </figure>
      </div>
    </div>
  );
}
