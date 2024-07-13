import { Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../App";
import AdminLayout from "../layout/AdminLayout";
export default function Dashboard() {
  const login = sessionStorage.getItem("Adminemail");

  const [appoinments, setAppoinments] = useState([]);
  const [stateData, setStateData] = useContext(StateContext);
  const bookingStatuss = ["Pending", "Accept", "Rejected"];
  useEffect(() => {
    fetchAppointments();
    handleUpdateStatus();
    if (!appoinments) {
      navigate("/appoinment");
    }
  }, []);
  async function fetchAppointments() {
    const response = await fetch(
      `https://doctorsappointment-9ogk.onrender.com/admin/appoinment`
    );
    const dashboardResponseData = await response.json();
    console.log("dashboardResponseData", dashboardResponseData.appoinments);
    if (dashboardResponseData.appoinments) {
      setAppoinments(dashboardResponseData.appoinments);
      console.log("appoinment", appoinments);
    } else {
      setAppoinments([]);
    }
  }

  async function handleUpdateStatus(appointmentId, value) {
    const updatedAppointments = appoinments.map((appointment) =>
      appointment.id === appointmentId
        ? { ...appointment, status: value }
        : appointment
    );
    // const updatedAppointments = setAppoinments((appoinments) =>
    //   appoinments.map((appointment) =>
    //     appointment.id === appointmentId
    //       ? { ...appointment, status: e.target.value }
    //       : appointment
    //   )
    // );
    // setStateData(updatedAppointments);

    await postData(
      `https://doctorsappointment-9ogk.onrender.com/admin/appoinment/confirm`,
      updatedAppointments
    ).then((updatedAppointments) => {
      console.log("data", updatedAppointments);
      if (updatedAppointments.code == 200) {
        fetchAppointments();
      } else {
        alert("You are not able to change the order request");
      }
      // console.log("responseData", updatedOrder);
    });
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
  }

  // const { isAuthenticated, admin } = useContext(Context);
  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <div>
      <AdminLayout>
        {/* <div className="ml-64 ">Welcome to Admin Panel</div>{" "} */}
        <div className="flex flex-col ml-64 overflow-x-hidden">
          <h5 className="mx-auto my-4 text-xl font-bold text-sky-600">
            Appointments
          </h5>
          <table className="w-full">
            <thead>
              <tr className="">
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appoinments.map((appoinment, id) => (
                <tr key={id}>
                  <td className="text-sm ">{appoinment.patient}</td>
                  <td>{appoinment.user?.date}</td>
                  <td>{appoinment.user?.time}</td>
                  <td>{appoinment.name}</td>
                  <td>{appoinment.specilities}</td>
                  <td>
                    <Select
                      defaultValue="Pending"
                      style={{
                        width: 120,
                      }}
                      onChange={handleUpdateStatus}
                      options={[
                        {
                          value: "Pending",
                          label: "Pending",
                        },
                        {
                          value: "Accepted",
                          label: "Accepted",
                        },
                        {
                          value: "Rejected",
                          label: "Rejected",
                        },
                      ]}
                    />
                    {/* <select
                      className={
                        appoinment.status === "Pending"
                          ? "value-pending"
                          : appoinment.status === "Accepted"
                          ? "value-accepted"
                          : "value-rejected"
                      }
                      value={appoinment.status}
                      onClick={(e) => handleUpdateStatus(appoinment.id, e)}
                    >
                      {bookingStatuss.map((depart, index) => {
                        return (
                          <option value={depart} key={index}>
                            {depart}
                          </option>
                        );
                      })}
                    </select> */}
                  </td>
                  {/* <td>
                    {appoinment.hasVisited === true ? (
                      <GoCheckCircleFill className="green" />
                    ) : (
                      <AiFillCloseCircle className="red" />
                    )}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          {}
        </div>
      </AdminLayout>
    </div>
  );
}
