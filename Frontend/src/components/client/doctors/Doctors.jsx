import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../App";
import Layout from "../layout/Layout";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [stateData, setStateData] = useContext(StateContext);
  useEffect(() => {
    getDoctors();
  }, [stateData]);
  async function getDoctors() {
    const cancerResponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Cancer/"
    );
    const cancerResponseData = await cancerResponse.json();
    console.log("doctorsResponseData", cancerResponseData.doctors);

    const childCareresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Child-Care/"
    );
    const childCareResponseData = await childCareresponse.json();
    console.log("doctorsResponseData", childCareResponseData.doctors);

    const generalPhysicianresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/General-Physician/"
    );
    const generalPhysicianResponseData = await generalPhysicianresponse.json();
    console.log(
      "generalPhysiciaResponseData",
      generalPhysicianResponseData.doctors
    );

    const gastroenterologyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Gastroenterology/"
    );
    const gastroenterologyResponseData = await gastroenterologyresponse.json();
    console.log("doctorsResponseData", gastroenterologyResponseData.doctors);

    const orthopedicsresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Orthopedics/"
    );
    const orthopedicsResponseData = await orthopedicsresponse.json();
    console.log("doctorsResponseData", orthopedicsResponseData.doctors);

    const psychologyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Psychology/"
    );
    const psychologyResponseData = await psychologyresponse.json();
    console.log("doctorsResponseData", psychologyResponseData.doctors);

    const skinresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Skin/"
    );
    const skinResponseData = await skinresponse.json();
    console.log("doctorsResponseData", skinResponseData.doctors);

    const gynaeresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Gynae/"
    );
    const gynaeResponseData = await gynaeresponse.json();
    console.log("doctorsResponseData", gynaeResponseData.doctors);

    const kidneyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Kidney/"
    );
    const kidneyResponseData = await kidneyresponse.json();
    console.log("doctorsResponseData", kidneyResponseData.doctors);

    const diabetesresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Diabetes/"
    );
    const diabetesResponseData = await diabetesresponse.json();
    console.log("doctorsResponseData", diabetesResponseData.doctors);

    setDoctors([
      ...cancerResponseData?.doctors,
      ...childCareResponseData?.doctors,
      ...gastroenterologyResponseData?.doctors,
      ...generalPhysicianResponseData?.doctors,
      ...orthopedicsResponseData?.doctors,
      ...psychologyResponseData?.doctors,
      ...skinResponseData?.doctors,
      ...gynaeResponseData?.doctors,
      ...kidneyResponseData?.doctors,
      ...diabetesResponseData?.doctors,
    ]);
  }
  const handleDoctor = (doctor) => {
    console.log("handleDoctor", doctor);
    setStateData(doctor);
  };
  return (
    <div>
      <Layout>
        <div className=" w-10/12 justify-center mx-auto ">
          {doctors && doctors.length > 0 ? (
            <div className="  my-2 dark:bg-gray-900 dark:text-gray-100 hover:drop-shadow-xl">
              {doctors.map((doctor, i) => (
                // console.log("doctor", doctor.name),
                <Link
                  to={"/doctor/" + doctor.name}
                  key={i}
                  onClick={() => handleDoctor(doctor)}
                  className="grid grid-cols-12 gap-4 mb-2 border-2"
                >
                  <div className="grid grid-cols-3 col-span-9 p-4 space-y-4 md:space-y-0 md:space-x-6 ">
                    <img
                      src={doctor.image}
                      alt=""
                      className="col-span-1 self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="flex flex-col col-span-1 ">
                      <h4 className="text-lg font-semibold text-center  md:text-left">
                        {doctor.name}
                      </h4>
                      <p className="text-gray-800 dark:text-gray-400 ">
                        {doctor.graduation}
                      </p>
                      <p className="text-gray-500">Specilities</p>
                      <p className="">{doctor.specilities}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-500">Working in</p>
                      <p>{doctor.workDetails}</p>
                      <p className="text-gray-500">Total Experience</p>
                      <p>{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="col-span-3 bg-gray-100  p-4">
                    <h3 className="flex text-4xl font-semibold hover:text-blue-500">
                      {doctor.consultationFee}
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
            <div class="h-screen mt-5 mx-auto relative w-12 rounded-full">
    <div class=" w-12 aspect-square  rounded-full border-8 border-blue-300 border-r-orange-400 animate-l2"></div>
  </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
