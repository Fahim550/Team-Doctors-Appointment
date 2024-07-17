import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PaymentForm({ appoinment }) {
  const id = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterDoctor = async (data) => {
    // saveUserToDb(data);
    console.log("app", appoinment);
    console.log(data);
    data.productId = appoinment._id;
    try {
      fetch("http://localhost:8080/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          window.location.replace(result.url);
        });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      // const result = await response.json();
      // console.log("response", result);

      // // Redirect to the URL provided by the server
      // if (result.url) {
      //   window.location.replace(result.url);
      // }
    } catch (error) {
      console.error("Error making payment:", error);
    }

    // try {
    //   const response = await axios
    //     .post("http://localhost:8080/payment", data)

    //   console.log("response", response.data);

    //   // Redirect to URL if provided by the server
    //   if (response.data.url) {
    //     window.location.replace(response.data.url);
    //   }
    // } catch (error) {
    //   console.error("Error making payment:", error);
    // }
  };
  return (
    <div>
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
            placeholder="Enter Your Name"
            required=""
          />
          {errors.name && (
            <span className="text-red-700">user-name field is required</span>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required=""
          />
          {errors.email && (
            <span className="text-red-700">email field is required</span>
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
            <span className="text-red-700">phone field is required</span>
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
  );
}
