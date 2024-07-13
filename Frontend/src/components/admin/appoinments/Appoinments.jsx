import React, { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";

export default function Appoinments() {
  const [adminAppoinment, setAdminAppoinment] = useState();
  useEffect(() => {
    getDoctors();
  }, []);
  async function getDoctors() {
    const response = await fetch(
      "https://doctorsappointment-9ogk.onrender.com/appoinment"
    );
    const appoinmentResponseData = await response.json();
    console.log("doctorsResponseData", appoinmentResponseData.doctors);
    if (appoinmentResponseData) {
      setAdminAppoinment(appoinmentResponseData);
    } else {
      setAdminAppoinment([]);
    }
  }
  return (
    <div>
      <div className="relative overflow-x-auto ">
        <Dashboard />
      </div>
    </div>
  );
}
