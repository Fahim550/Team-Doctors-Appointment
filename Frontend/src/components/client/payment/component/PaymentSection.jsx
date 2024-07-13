import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripePayment from "./StripePayment";

export default function PaymentSection() {
  // const [appoinment, setAppoinment] = useContext(StateContext);
  const [appoinment, setAppoinment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!appoinment) {
      navigate("/doctors");
    }
    getAppoinments();
    // console.log("appoinment",appoinment);
  }, []);
  async function getAppoinments() {
    const response = await fetch(
      `https://doctorsappointment-9ogk.onrender.com/appoinments`
    );
    const appoinmetResponseData = await response.json();
    console.log("doctorsResponseData", appoinmetResponseData.appoinments);
    if (appoinmetResponseData.appoinments.length > 0) {
      const lastitem =
        appoinmetResponseData.appoinments[
          appoinmetResponseData.appoinments.length - 1
        ];
      setAppoinment(lastitem);
      console.log("appoinment", appoinment);
      console.log("lastitem", lastitem);
    } else {
      setAppoinment([]);
    }
  }
  return (
    <div className="grid grid-cols-6 gap-4 sm:container">
      <div className="col-span-3 p-9 sm:col-span-3">
        <div className="flex flex-col justify-center p-4 border-2 border-gray-100 hover:drop-shadow-xl dark:bg-gray-900 dark:text-gray-100">
          <div className="flex gap-4 justify-center ">
            <div className="">
              <img
                src={appoinment.image}
                alt=""
                className="col-span-3 self-center flex-shrink-0 w-16 h-20 border rounded-lg md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-center tracking-wider md:text-left">
                {appoinment.name}
              </h2>
              <h2 className="text-sm font-semibold text-center tracking-wider text-gray-700 md:text-left">
                {appoinment.graduation}
              </h2>
              <h2 className="text-sm font-bold text-center tracking-wider text-pink-500 md:text-left">
                {appoinment.specilities}
              </h2>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col mx-auto">
            <h1 className="text-lg font-bold my-2">Appoinment Schedule</h1>
            <div className="flex  gap-3">
              <div className="flex gap-2">
                <svg
                  data-v-4a71af70=""
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 10a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm1 5.167a1 1 0 1 0-2 0V10a1 1 0 0 0 .293.707l2.5 2.5a1 1 0 0 0 1.414-1.414L11 9.586v-2.92Z"
                    fill="#4D4D4D"
                  ></path>
                </svg>
                {appoinment.user?.time}
              </div>{" "}
              <div className="flex gap-2">
                <svg
                  data-v-4a71af70=""
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.333 1.667a1 1 0 1 0-2 0v.666H7.667v-.666a1 1 0 1 0-2 0v.666h-1.5A2.667 2.667 0 0 0 1.5 5v11.667a2.667 2.667 0 0 0 2.667 2.666h11.666a2.667 2.667 0 0 0 2.667-2.666V5a2.667 2.667 0 0 0-2.667-2.667h-1.5v-.666ZM16.5 7.333V5a.667.667 0 0 0-.667-.667h-1.5V5a1 1 0 1 1-2 0v-.667H7.667V5a1 1 0 0 1-2 0v-.667h-1.5A.667.667 0 0 0 3.5 5v2.333h13Zm-13 2h13v7.334a.667.667 0 0 1-.667.666H4.167a.667.667 0 0 1-.667-.666V9.333Z"
                    fill="#4D4D4D"
                  ></path>
                </svg>
                {appoinment.user?.date}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-2 p-2 border-2 border-gray-200 drop-shadow-xl">
          <h1 className="text-xl font-bold">Payment Details</h1>
          <div className="flex justify-between">
            <h1 className="text-lg  font-semibold">consultationFee</h1>
            <h1 className="font-medium">৳{appoinment.consultationFee}</h1>
          </div>
        </div>
      </div>
      <div className="mt-8 col-span-3 sm:col-span-3 ">
        <StripePayment
          money={appoinment.consultationFee}
          userInfo={sessionStorage.getItem("email")}
        />
      </div>
    </div>
  );
}
