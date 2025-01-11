import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function SignUp() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(false);

  const togglePassword = () => {
    setPassword(!password);
};

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onRegisterUser = async (data) => {
    saveUserToDb(data);
  };
  const saveUserToDb = async (data) => {
    await postData(
      "https://doctorsappointment-9ogk.onrender.com/users",
      data
    ).then((data) => {
      console.log("responseData", data); // JSON data parsed by `data.json()` call
      navigate("/login");
    });
  };
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      
      <a
          href="#"
          className="flex pt-5 items-center justify-center text-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="h-12 mr-2" src={logo} alt="logo" />
          CareHive
        </a>
      <Tabs>
    <TabList>
      <div className="flex justify-center gap-10 pt-2">
      <Tab><button className="border-2 rounded-md px-2 font-semibold">Normal User</button></Tab>
      <Tab><button className="border-2 rounded-md px-2 font-semibold">Doctor</button></Tab>
      </div>
    </TabList>



{/* 1st tab */}

    <TabPanel>
    <div className="flex justify-center flex-col max-w-md p-6 rounded-md mx-auto dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-2 text-center">
		<h1 className=" text-4xl font-bold">Registration</h1>
	</div>
	

  <form className="w-full">


<div className="flex items-center justify-center mt-2">
</div>
<div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-1">

    {/* Full Name field */}
    <div className="relative flex items-center mt-8">
        <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>

        <input type="text" name="name" className="block w-full py-3 text-black bg-white  rounded-lg px-10 " placeholder="Full Name" required />
    </div>

    {/* Image field */}
    <div>
        <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white rounded-lg text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>


            <input id="dropzone-file" type="file" name="image" {...register("image", {
                required: "Upload a your image"
            })}
                onChange={(e) => setProfilePhoto(e.target.files[0])}
                className="hidden" />
        </label>
    </div>

    {/* Email field */}
    <div className="relative flex items-center mt-6">
        <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </span>

        <input type="email" name="email"  className="block w-full py-3  bg-white border rounded-lg
        px-10 text-black" required placeholder="Email address" />
    </div>
    {/* Phone Number Field */}
    <div className="relative flex items-center mt-6">
        <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </span>

        <input type="number" name="number"  className="block w-full py-3  bg-white border rounded-lg px-10 text-black" required placeholder="Number (WhatsApp)" />
    </div>

    {/* Password */}
    <div className="relative flex items-center mt-4">
        <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        </span>

        <input type={password ? "text" : "password"} name="password"  className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Password" />
        <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 text-2xl top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
            {password ? "🙊" : "🙈"}
        </button>
       
    </div>


    {/* Confirm Password */}
    <div className="relative flex items-center mt-4">
        <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        </span>

        <input type={passwordVisible ? "text" : "password"} name="conpassword" className="block w-full px-10 py-3 text-black bg-white border rounded-lg " required placeholder="Confirm Password" />
        <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 text-2xl top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
            {passwordVisible ? "🙊" : "🙈"}
        </button>
        {/* <button onClick={() => setShowPass(!showPass)} className="absolute ml-[235px] text-black">{showPass ? "" : ""}</ button> */}
    </div>

   

</div>

{/* Button for registration */}

<div className="mt-6">
    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600">
        Sign Up
    </button>
    
    {/* If you have an account then go to the login page */}
    <div className="mt-6 text-center ">
        <a href='/login' className="text-sm text-white hover:underline bg-purple-600 p-2 rounded-lg">
            Already have an account?
        </a>
    </div>
</div>
</form>


</div>
    </TabPanel>


    {/* 2nd tab */}
    <TabPanel>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-4  lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              onSubmit={handleSubmit(onRegisterUser)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="username"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  {...register("name", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your name"
                  required=""
                />
                {errors.name && (
                  <span className="text-red-700">
                    user-name field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  for="email"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {errors.email && (
                  <span className="text-red-700">email field is required</span>
                )}
              </div>
              <div>
                <label
                  for="password"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {errors.password && (
                  <span className="text-red-700">
                    password field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  for="phone"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder=""
                  {...register("phone", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {errors.phone && (
                  <span className="text-red-700">phone field is required</span>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
      

    </section>
  );
}
