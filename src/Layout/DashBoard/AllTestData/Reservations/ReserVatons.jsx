import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { RxCross2, RxVercelLogo } from "react-icons/rx";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const ReserVatons = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [email, setEmail] = useState("");
  const { data: reservations = [], refetch } = useQuery({
    queryKey: ["datas", id,email],
    queryFn: async () => {
      if (!email) {
        const { data } = await axiosSecure.get(
          `/alltest/Booking/reservations/${id}`
        );
        return data;
      }else{
       const {data} =await handleSearch()
       return data;
      }
    },
  });

  const handleSearch = async () => {
    if (email && id) {
    
      try {
        const { data } = await axiosSecure.get(
          "/alltest/Booking/reservations/search/search-item",
          {
            params: { id, email },
          }
        );
        return {data}
      } catch (error) {
        console.error("Error fetching data", error);
      }
    } else {
      console.error("Both id and email are required for searching");
    }
  };

  const handlestatus = async (status, id) => {
    const newStatus = status;
    try {
      await axiosSecure.patch(`/allTests/booking/statusUpdate/status/${id}`, {
        status: newStatus,
      });
      refetch(); // refetch data to get the updated status
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const handleStatusChange = async (status, appointment, id) => {
    try {
      handlestatus(status, id);
      console.log("Status changed to:", status);

      const reservations = {
        ...appointment,
        status, // Ensure status is included
      };

      console.log("Updated reservations:", reservations);

      if (reservations.status === "delivared") {
        const { data } = await axiosSecure.post(
          "/allTests/booking/booking-result/submit-result",
          reservations
        );
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sevices Delivared",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire("already inserted!");

        }
      }
    } catch (error) {
      console.error("Error handling status change:", error);
    }
  };
  // --------------------------------cancel
  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/alltest/Booking/Delete/${id}`);
    console.log(data);
    refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error deleting banner:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting your file.",
            icon: "error"
          });
        }
      }
    });
  };

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.jpg?w=1380)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
        className="max-h-48 w-full flex items-center justify-center"
      >
        <div>
          <h2 className="text-3xl text-center font-bold font-Lora">
            All Reservations
          </h2>
        </div>
      </div>

      <div className="py-12">
        <div className="flex justify-center items-center">
          <label className="input w-[600px] input-bordered flex items-center gap-2">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full"
              placeholder="Enter proper email to search"
            />
          </label>
        </div>
      </div>
      <div>
        <section className="bg-white px-4">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Reservations
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {reservations?.length} Reservations
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Image</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Appointment Name</span>
                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.3"
                              />
                            </svg>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Patient's Info</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeWidth="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Appointment Date</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeWidth="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span className="flex items-center gap-2 justify-center">
                              Status
                              <MdOutlineBrowserUpdated size={15} />
                            </span>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Cancel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {reservations?.map((appointment) => (
                        <tr key={appointment?._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover lg:w-24 lg:h-24 h-16 w-16 rounded-r-xl rounded-l-xl"
                                  src={appointment?.image}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="px-3 py-1 rounded-full">
                              <h2 className="md:text-xl md:max-w-[300px] font-leto">
                                {appointment?.title}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <h2>{appointment?.userName}</h2>
                            <h2>{appointment?.userEmail}</h2>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {appointment?.appontmentData}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <button
                              disabled={appointment?.status == "delivared"}
                              className=" btn btn-sm bg-green-400 text-white"
                              onClick={() =>
                                handleStatusChange(
                                  "delivared",
                                  appointment,
                                  appointment?._id
                                )
                              }
                            >
                              {appointment?.status}
                            </button>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <button
                              onClick={() => handleCancel(appointment?._id)}
                              className="btn btn-sm rounded-full text-[red]"
                            >
                              <RxCross2 size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReserVatons;
