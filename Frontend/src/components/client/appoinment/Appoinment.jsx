import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../App";
import Layout from "../layout/Layout";

export default function Appoinment() {
  const [stateData, adminAppoinment] = useContext(StateContext);
  const [timeSolt, setTimeSolt] = useState([]);
  const [bookAppoinment, setBookAppoinment] = useState();
  const [selectTimeSolt, setSelectTimeSolt] = useState();
  const [button, setButton] = useState(false);
  const navigate = useNavigate();
  const login = sessionStorage.getItem("email");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    // console.log("stateData",stateData);
    if (!stateData.name) {
      navigate("/doctors");
    }
    getTime();
    // onAppoinment()
    // console.log("tiemslot", timeSolt);
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    setTimeSolt(timeList);
    // console.log("timelist",timeList);
  };

  // console.log("stateData", stateData);
  const onAppoinment = async (data) => {
    console.log("data", data);
    // if (data) {
    //   setButton(true);
    // } else {
    //   setButton(false);
    // }
    const appoinments = {
      user: data,
      patient:
        sessionStorage.getItem("email") || sessionStorage.getItem("Adminemail"),
      name: stateData.name,
      image: stateData.image,
      graduation: stateData.graduation,
      specilities: stateData.specilities,
      consultationFee: stateData.consultationFee,
      status: "pending",
      id: Math.round(1 + Math.random() * (100 - 1)),
    };
    // setAppoinment(appoinments)
    saveUserToDb(appoinments);
    console.log("appoinment", appoinments);
    // setAppoinment(bookAppoinment)
  };
  const saveUserToDb = async (data) => {
    await postData(
      `https://doctorsappointment-9ogk.onrender.com/appoinments`,
      data
    ).then((data) => {
      console.log("responseData", data);
      navigate("/payment");
    });
  };
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json", // Adjusted Accept header
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    } catch (error) {
      console.error("Error while fetching:", error);
      throw error; // Propagate the error further
    }
  }
  return (
    <div>
      <Layout>
        <div className="h-screen p-4 bg-gray-100">
          <div className="w-10/12 bg-white rounded p-2 flex mx-auto gap-4 text-lg font-bold items-center justify-start">
            Available Time Solts Of{" "}
            <img
              className="w-16 h-12 rounded-lg"
              src={stateData.image}
              alt=""
            />{" "}
            <div className="flex-col">
              <h2>{stateData.name}</h2>
              <h2 className="text-pink-500">{stateData.specilities}</h2>
            </div>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onAppoinment)}>
            <div className="flex justify-center gap-8 mt-3">
              <div className="flex flex-col">
                <label className="flex gap-2 m-2" for="date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    // style="enable-background:new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <circle
                        cx="386"
                        cy="210"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <path
                        d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <path
                        d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                      <circle
                        cx="299"
                        cy="210"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="212"
                        cy="297"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="125"
                        cy="210"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="125"
                        cy="297"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="125"
                        cy="384"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="212"
                        cy="384"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                      <circle
                        cx="212"
                        cy="210"
                        r="20"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></circle>
                    </g>
                  </svg>
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  // value={date}
                  min="2024-03-01"
                  max="2024-12-31"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-red-700">date field is required</span>
                )}
              </div>
              <div>
                <label className="flex gap-2 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    x="0"
                    y="0"
                    viewBox="0 0 510 510"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
                        // style="fill-opacity:0.9;"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z"
                        // style="fill-opacity:0.9;"
                        fill="#093f87"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                  Select Time Slot
                </label>
                <select
                  className="grid grid-cols-6 gap-2 border-2 rounded-lg p-4"
                  type="text"
                  name="time"
                  id="time"
                  {...register("time", { required: true })}
                >
                  {timeSolt.map((time, index) => (
                    <option
                      className={`p-4 rounded-full border-2 mx-auto hover:bg-blue-600 hover:text-white 
                      ${
                        time.time == selectTimeSolt && "bg-blue-900 text-white"
                      }`}
                      onClick={() => setSelectTimeSolt(time.time)}
                      key={index}
                      value={time.time}
                    >
                      {time.time}
                    </option>
                  ))}
                  {errors.time && (
                    <span className="text-red-700">time field is required</span>
                  )}
                </select>
              </div>
            </div>
            <button
              type="submit"
              // disabled={button}
              className="bg-blue-600 text-white text-xl rounded-xl mx-auto mt-2  py-2 px-6"
            >
              Confirm
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
