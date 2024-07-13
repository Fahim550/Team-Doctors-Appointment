import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../App";
import Layout from "../layout/Layout";

export default function DoctorCatagory() {
  const [service, setStateData] = useContext(StateContext);
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    console.log("doctrocatagory", catagory);
    getDoctors();
    // console.log("service🙌", stateData);
  }, []);
  async function getDoctors() {
    const response = await fetch(
      `https://doctorsappointment-9ogk.onrender.com/catagory/${service}`
    );
    const doctorsResponseData = await response.json();
    console.log("doctorsResponseData", doctorsResponseData.doctors);
    console.log("catagory", catagory);
    if (doctorsResponseData.doctors) {
      setCatagory(doctorsResponseData.doctors);
      // await navigate("/doctorCatagory/" + ser.name)
    } else {
      setCatagory([]);
    }
  }
  const handleDoctor = (catagore) => {
    console.log("handleDoctor", doctor);
    setStateData(catagore);
  };
  return (
    <div>
      <Layout>
        {/* <h3>hello</h3> */}
        <div className=" w-10/12 h-screen justify-center mx-auto ">
          {catagory ? (
            <div className="  my-2 dark:bg-gray-900 dark:text-gray-100 hover:drop-shadow-xl">
              {catagory.map((catagore, i) => (
                // console.log("doctor", doctor.name),
                <Link
                  to={"/doctor/" + catagore.name}
                  key={i}
                  className="grid grid-cols-12 gap-4 mb-2 border-2"
                  onClick={() => setStateData(catagore)}
                >
                  <div className="grid grid-cols-3 col-span-9 p-4 space-y-4 md:space-y-0 md:space-x-6 ">
                    <img
                      src={catagore.image}
                      alt=""
                      className="col-span-1 self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="flex flex-col col-span-1 ">
                      <h4 className="text-lg font-semibold text-center  md:text-left">
                        {catagore.name}
                      </h4>
                      <p className="text-gray-800 dark:text-gray-400 ">
                        {catagore.graduation}
                      </p>
                      <p className="text-gray-500">Specilities</p>
                      <p className="">{catagore.specilities}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-500">Working in</p>
                      <p>{catagore.workDetails}</p>
                      <p className="text-gray-500">Total Experience</p>
                      <p>{catagore.experience}</p>
                    </div>
                  </div>
                  <div className="col-span-3 bg-gray-100  p-4">
                    <h3 className="flex text-4xl font-semibold hover:text-blue-500">
                      {catagore.consultationFee}
                      <p className="mt-4 text-sm text-gray-800">(incl,Vat)</p>
                      <svg
                        className="mt-4 ml-4"
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
                      >
                        <g>
                          <path
                            d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                            fill="#727272"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </h3>
                    <p>pre consultation</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div>there is no doctors</div>
          )}
        </div>
      </Layout>
    </div>
  );
}
