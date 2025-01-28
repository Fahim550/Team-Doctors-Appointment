import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';

import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../../App";
export default function DoctorsTeam() {
  useEffect(() => {
    Aos.init();
  });
  const [doctors, setDoctors] = useState([]);
  const [stateData, setStateData] = useContext(StateContext);
  const navigate = useNavigate();
  useEffect(() => {
    getDoctors();
  }, [stateData]);
  async function getDoctors() {
    const cancerResponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Cancer/"
    );
    const cancerResponseData = await cancerResponse.json();
    const cancer = cancerResponseData?.doctors[0];
    console.log("doctorsResponseData", cancerResponseData.doctors);

    const childCareresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Child-Care/"
    );
    const childCareResponseData = await childCareresponse.json();
    const childCare = childCareResponseData?.doctors[0];
    console.log("doctorsResponseData", childCareResponseData.doctors);

    const generalPhysicianresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/General-Physician/"
    );
    const generalPhysicianResponseData = await generalPhysicianresponse.json();
    const general = generalPhysicianResponseData?.doctors[0];
    console.log("general", general);
    console.log(
      "generalPhysiciaResponseData",
      generalPhysicianResponseData.doctors[0]
    );

    const gastroenterologyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Gastroenterology/"
    );
    const gastroenterologyResponseData = await gastroenterologyresponse.json();
    const gastroenterology = gastroenterologyResponseData?.doctors[0];
    console.log("doctorsResponseData", gastroenterologyResponseData.doctors);

    const orthopedicsresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Orthopedics/"
    );
    const orthopedicsResponseData = await orthopedicsresponse.json();
    const orthopedics = orthopedicsResponseData?.doctors[0];
    console.log("doctorsResponseData", orthopedicsResponseData.doctors);

    const psychologyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Psychology/"
    );
    const psychologyResponseData = await psychologyresponse.json();
    const psychology = psychologyResponseData?.doctors[0];
    console.log("doctorsResponseData", psychologyResponseData.doctors);

    const skinresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Skin/"
    );
    const skinResponseData = await skinresponse.json();
    const skin = skinResponseData?.doctors[0];
    console.log("doctorsResponseData", skinResponseData.doctors);

    const gynaeresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Gynae/"
    );
    const gynaeResponseData = await gynaeresponse.json();
    const gynae = gynaeResponseData?.doctors[0];
    console.log("doctorsResponseData", gynaeResponseData.doctors);

    const kidneyresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Kidny/"
    );
    const kidneyResponseData = await kidneyresponse.json();
    const kidny = kidneyResponseData?.doctors[0];
    console.log("doctorsResponseData", kidneyResponseData.doctors);

    const diabetesresponse = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/catagory/Diabetes/"
    );
    const diabetesResponseData = await diabetesresponse.json();
    const diabetes = diabetesResponseData?.doctors[0];
    console.log("doctorsResponseData", diabetesResponseData.doctors);

    setDoctors([
      cancer,
      childCare,
      general,
      gastroenterology,
      orthopedics,
      skin,
      gynae,
      kidny,
      diabetes,
    ]);
    console.log("doctor", doctors);
  }
  const handleDoctor = (doctor) => {
    console.log("handleDoctor", doctor);
    setStateData(doctor);
  };
  return (
    <section className="bg-gray-100 dark:bg-gray-900 my-4">
      <div className="py-8 px-4 lg:py-16 lg:px-6  w-10/12 mx-auto">
        <div className="mx-auto  text-center mb-8 lg:mb-16">
          <h2
            className="mb-4 text-4xl tracking-tight font-extrabold text-blue-800 dark:text-white"
            data-aos="zoom-out"
          >
            Meet Our Top Doctors
            <hr className="w-28 h-1 mx-auto bg-blue-700 border-0 rounded mt-4 dark:bg-blue-700"></hr>
          </h2>
          {/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p> */}
        </div>

        {doctors && doctors.length > 0 ? (
          // console.log("doctor",doctors),
          <Swiper
            slidesPerView={1}
            // sm:slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Small screens (mobile)
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Medium screens (tablet)
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              // Large screens (desktop)
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1850: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {doctors.map((doctor, i) => (
              <SwiperSlide
                key={i}
                onClick={() => {
                  navigate("/doctor/"+ doctor.name);handleDoctor(doctor);
                  scrollTo(0, 0);
                }}
                
                className="min-h-[380px] max-w-[274px] p-6 rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-50"
              >
                <img
                  src={doctor?.image}
                  alt=""
                  className="w-full h-[280px] rounded-md object-cover object-top sm:object-center
    sm:h-[320px] lg:h-[350px] dark:bg-gray-500"
                />
                <div className=" mb-2">
                  <span className="block text-xs font-medium uppercase tracking-wide dark:text-violet-400">
                    {doctor?.name}
                  </span>
                  <h2 className="text-xl font-semibold">
                    {doctor?.specilities}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="min-h-[350px] mt-5 mx-auto relative w-12 rounded-full">
            <div className=" w-12 aspect-square  rounded-full border-8 border-blue-300 border-r-orange-400 animate-l2"></div>
          </div>
        )}
      </div>
    </section>
  );
}
