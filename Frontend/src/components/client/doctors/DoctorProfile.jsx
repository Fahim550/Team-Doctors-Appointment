import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { StateContext } from "../../../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DoctorProfile() {
  const [stateData, setStateData] = useContext(StateContext);
  const navigate = useNavigate();
  const login = sessionStorage.getItem("email")||sessionStorage.getItem('Adminemail');
  const notify = () =>
    toast.error("To make a doctor's appointment, you need to login first!");
  useEffect(() => {
    // console.log("stateData",stateData);
    if (!stateData.name) {
      navigate("/doctors");
    }
    console.log("statedata",stateData);
  },[]);
 
  return (
    <div>
      <Layout>
        <div className=" w-6/12 sm:w-10/12 justify-center p-2 mx-auto ">
              <h1 className="text-2xl font-extrabold">Details</h1>
          <div className=" my-2 border-2 dark:bg-gray-900 dark:text-gray-100 hover:drop-shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-4 mb-2 ">
              <div className="grid grid-cols-12 col-span-8 p-4 space-y-4 md:space-y-0 md:space-x-6 ">
                <img
                  src={stateData.image}
                  alt=""
                  className="col-span-3 self-center flex-shrink-0 w-36 h-28 border rounded-lg md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex flex-col col-span-8 ">
                  <h2 className="text-xl font-bold text-center tracking-wider md:text-left">
                    {stateData.name}
                  </h2>
                  <p className="text-lg dark:text-gray-400 ">
                    {stateData.graduation}
                  </p>
                </div>
              </div>
              <div className="col-span-3 p-4">
                <h4>pre consultation</h4>
                <h3 className="flex text-4xl mb-4 font-bold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40"
                    height=""
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    // style="enable-background:new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        d="M198.4 72.3c7.9 11.6 15 30.3 15 57.9v89.6h23.9l40.1 40.9h-64v116c0 9.1 3.4 17.3 10.2 24.7s17.9 11.1 33.3 11.1c19.9 0 40.9-11.1 63.1-33.3 22.7-22.7 34.7-46 35.8-69.9l-10.2.9c-36.4 0-54.6-19.3-54.6-58 0-13.1 4.3-24.7 12.8-35 8.5-10.2 22.7-15.4 42.6-15.4 21 0 38.7 9.1 52.9 27.3 14.8 18.2 22.2 40.4 22.2 66.5 0 38.7-16.5 75.6-49.5 110.9-32.4 35.2-94.4 52.9-116 52.9-34.6 0-47.9-6.8-59.2-14.5-11.3-7.8-26.1-26.2-26.1-49.4V260.7h-40.9l-39.2-40.9h80.2v-81c0-18.1-18.1-28-29.9-29-7.2-.6-15.1 1.4-17.9 4.3-5.1-8.5-10-18.8-14.5-30.7 0 0 4-14.4 17.1-23 9-5.9 17.5-7.7 30.7-7.7 25.1-.1 36.7 11.7 42.1 19.6z"
                        fill="#3f83f8"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                  {stateData.consultationFee}
                  <p className="mt-4 text-sm text-gray-800">(incl,Vat)</p>
                </h3>
                {login?
                
                <Link
                to={"/appoinment/"+stateData.name}
                  type="button"
                  className="px-4 py-2 font-medium rounded-full text-white bg-blue-500 dark:bg-gray-800 dark:text-gray-100"
                >
                  Appoinment
                </Link>
                :<div>
                <Link onClick={notify} className="px-4 py-2 font-medium rounded-full text-white bg-blue-500 dark:bg-gray-800 dark:text-gray-100">Appoinment</Link>
                <ToastContainer position="top-right"/>
              </div>
              }
              </div>
            </div>
            <div className="grid grid-cols-3 m-2 w-10/12 ">
              <div className="col-span-1">
                <p className="text-lg dark:text-gray-400 ">Total Experience</p>
                <p className="text-xl font-bold dark:text-gray-400 ">
                  {stateData.experience} Years
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-lg dark:text-gray-400 ">Specialist in</p>
                <p className="text-xl font-bold dark:text-gray-400 ">
                  {stateData.specilities}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-lg dark:text-gray-400 ">Working at</p>
                <p className="text-xl font-bold dark:text-gray-400 ">
                  {stateData.workDetails}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              About Doctor Dr {stateData.name}-{stateData.graduation}
            </h1>
            <p className="leading-6">
              Dr. {stateData.name} warm demeanor and excellent communication
              skills foster strong doctor-patient relationships, enabling her to
              understand and address her patients' unique needs effectively. Her
              tireless dedication to staying updated on the latest medical
              advancements ensures that she delivers the highest standard of
              care. Through her unwavering compassion and clinical expertise
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
