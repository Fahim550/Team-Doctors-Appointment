import { createContext, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./components/routes/router";
export const StateContext = createContext({});

function App() {
  const routers = createBrowserRouter([...router]);
  const [
    stateData,
    setStateData,
    service,
    setService,
    catagory,
    setCatagory,
    appoinment,
    setAppoinment,
    adminAppoinment,
    setAdminAppoinment,
    bookingStatus,
    setBookingStatus,
    doctors, 
    setDoctors
  ] = useState({});
  return (
    <StateContext.Provider
      value={[
        stateData,
        setStateData,
        service,
        setService,
        catagory,
        setCatagory,
        appoinment,
        setAppoinment,
        adminAppoinment,
        setAdminAppoinment,
        bookingStatus,
        setBookingStatus
      ]}
    >
      <RouterProvider router={routers} />
    </StateContext.Provider>
  );
}

export default App;
