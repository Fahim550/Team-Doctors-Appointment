import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import AdminLayout from "../layout/AdminLayout";
export default function AddDoctors() {
  const [image, setImage] = useState("");
  const departmentsArray = [
    "General-Physician",
    "Gynae",
    "Skin",
    "Child-Care",
    "Diabetes",
    "Cancer",
    "Psychology",
    "Gastroenterology",
    "Kidny",
    "Orthopedics",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onRegisterDoctor = async (data) => {
    saveUserToDb(data);
  };
  const saveUserToDb = async (data) => {
    await postData(
      `https://doctorsappointment-9ogk.onrender.com/catagory/${data.specilities}`,
      data
    ).then((data) => {
      console.log("responseData", data); // JSON data parsed by `data.json()` call
      navigate("/doctors");
    });
  };
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        Accept: "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <>
      <AdminLayout>
        <section className="bg-gray-50 dark:bg-gray-900  flex w-screen  box-border ">
          <div className=" mx-auto lg:py-0">
            <a
              href="#"
              className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className=" h-12 mr-2" src={logo} alt="logo" />
              Zocdoc
            </a>
            <div className="w-96 bg-white rounded-lg shadow dark:border p-4 md:mt-0 dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-xl my-4  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Doctors
              </h1>
              <form
                onSubmit={handleSubmit(onRegisterDoctor)}
                className="space-y-4 md:space-y-4"
                action="#"
              >
                <div>
                  <input
                    type="text"
                    name="doctorname"
                    id="doctorname"
                    {...register("name", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Doctor Name"
                    required=""
                  />
                  {errors.name && (
                    <span className="text-red-700">
                      user-name field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doctor Email"
                    required=""
                  />
                  {errors.email && (
                    <span className="text-red-700">
                      email field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="filtext"
                    id="image"
                    {...register("image", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="image_url"
                    required=""
                  />
                  {errors.graduation && (
                    <span className="text-red-700">
                      image field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="graduation"
                    id="graduation"
                    {...register("graduation", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Graduation"
                    required=""
                  />
                  {errors.graduation && (
                    <span className="text-red-700">
                      graduation field is required
                    </span>
                  )}
                </div>
                <div>
                  <select
                    type="text"
                    name="specilities"
                    id="specilities"
                    {...register("specilities", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specilities"
                    required=""
                  >
                    <option value="">Select Specilities</option>
                    {departmentsArray.map((depart, index) => {
                      return (
                        <option value={depart} key={index}>
                          {depart}
                        </option>
                      );
                    })}
                  </select>
                  {errors.specilities && (
                    <span className="text-red-700">
                      specilities field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="workDetails"
                    id="workDetails"
                    {...register("workDetails", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Work Details"
                    required=""
                  />
                  {errors.workDetails && (
                    <span className="text-red-700">
                      work details field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    {...register("experience", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Work Experience"
                    required=""
                  />
                  {errors.experience && (
                    <span className="text-red-700">
                      experience field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="consultationFee"
                    id="consultationFee"
                    {...register("consultationFee", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Consultation Fee"
                    required=""
                  />
                  {errors.workDetails && (
                    <span className="text-red-700">
                      consultation-fee field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    {...register("phone", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.phone && (
                    <span className="text-red-700">
                      phone field is required
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
}
