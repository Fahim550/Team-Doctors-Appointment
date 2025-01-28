import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
    blog,
    setBlog,
    appoinment,
    setAppoinment,
    adminAppoinment,
    setAdminAppoinment,
    bookingStatus,
    setBookingStatus,
    doctors,
    setDoctors,
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
        blog,
        setBlog,
        appoinment,
        setAppoinment,
        adminAppoinment,
        setAdminAppoinment,
        bookingStatus,
        setBookingStatus,
      ]}
    >
      <RouterProvider router={routers} />
    </StateContext.Provider>
  );
}

export default App;
