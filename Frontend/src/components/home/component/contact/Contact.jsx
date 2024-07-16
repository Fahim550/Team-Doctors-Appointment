import React, { useEffect, useState } from "react";
import contact from "../../../../assets/contact.svg";
import Aos from "aos";

import emailjs from "@emailjs/browser";

import "aos/dist/aos.css";
import { useForm } from "react-hook-form";
import Navbars from "../../../shared/navbar/Navbars";
export default function Contact() {
   // sent email______------------
   const [loding, setLoding] = useState(false);
   const [suessmsg, setSuccess] = useState("");

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm();

   const onSend = (data) => {
      setLoding(true);
      const templateParams = {
         email: data.email,
         name: data.name,
         number: data.number,
         from_massage: data.massage,
      };
      console.log(data);
      setTimeout(() => {
         emailjs
            .send(
               "bddoctors_4af", // Replace with your EmailJS Service ID
               "template_1r42b2l", // Replace with your EmailJS Template ID
               templateParams,
               "kIApM3udTjCJfksyq" // Replace with your EmailJS User ID
            )
            .then(
               (response) => {
                  console.log("SUCCESS!", response.status, response.text);
                  // alert("Email sent successfully!");
               },
               (error) => {
                  console.log("FAILED...", error);
                  alert("Failed to send message.");
               }
            );
         setLoding(false);
         reset();
         setSuccess("Massage sent successfully");
         setTimeout(() => {
            setSuccess("");
         }, 2000);
      }, 1500);
   };

   useEffect(() => {
      Aos.init();
   });
   return (
      <>
         <Navbars />
         <div className="flex  flex-col w-10/12  mx-auto mb-3">
            <h2
               className="text-4xl font-extrabold leadi lg:text-5xl text-blue-800 mx-auto"
               data-aos="zoom-out">
               Book Your Visit!
               <hr class="w-20 h-1 mx-auto bg-blue-700 mb-2 border-0 rounded mt-4 dark:bg-blue-700"></hr>
            </h2>
            <div className=" flex flex-col lg:flex-row lg:justify-around justify-center ">
               <img
                  src={contact}
                  alt=""
                  className="p-4 h-52 md:h-64 sm:w-4/12 bg-sky-600 "
                  data-aos="fade-right"
               />

               <form onSubmit={handleSubmit(onSend)} action="">
                  <ul className=" flex flex-col">
                     <ul className=" w-full flex flex-col lg:flex-row">
                        <li>
                           <input
                              type="text"
                              placeholder="Full Name"
                              {...register("name", { required: true })}
                              className=" border shadow-lg m-1 mx-0.5  rounded-md bg-gray-200 text-black  placeholder:text-gray-700  placeholder:font-bold p-3 w-full"
                           />
                        </li>
                        <li>
                           <input
                              type="email"
                              placeholder="Email"
                              {...register("email", { required: true })}
                              className=" border shadow-lg m-1 mx-1  rounded-md bg-gray-200 text-black  placeholder:text-gray-700  placeholder:font-bold p-3 w-full"
                           />
                        </li>
                     </ul>
                     <li>
                        <input
                           type="number"
                           placeholder="Phone "
                           {...register("number", { required: true })}
                           className=" border shadow-lg m-1 mx-1  rounded-md bg-gray-200 text-black  placeholder:text-gray-700  placeholder:font-bold p-3 w-full"
                        />
                     </li>
                     <li>
                        {" "}
                        <textarea
                           id="message"
                           type="text"
                           placeholder="Massage"
                           {...register("massage", { required: true })}
                           className="  shadow-lg m-1  rounded-md bg-gray-200 text-black placeholder:text-gray-700  placeholder:font-bold p-3 min-h-[15vh] w-full"></textarea>
                     </li>

                     {loding ? (
                        <button className=" animate-pulse border p-2 rounded-md  duration-200 bg-blue-700 text-white font-bold">
                           SENDING......
                        </button>
                     ) : (
                        <button className=" border p-2 rounded-md hover:bg-blue-500 duration-200 bg-blue-700 text-white font-bold">
                           SEND
                        </button>
                     )}
                     <span className=" text-center text-blue-700">{suessmsg}</span>
                  </ul>
               </form>
            </div>
         </div>
      </>
   );
}
