import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import "react-datepicker/dist/react-datepicker.css";
import AllTestCard from "./AllTestCard";
import { useLocation } from "react-router-dom";

const AllTest = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const [searchDate, setSearchDate] = useState();
  const formattedDate = startDate.toISOString().split('T')[0];
  const location = useLocation();
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const { data ,refetch} = useQuery({
    queryKey: ["datas", searchDate, currentPage, itemPerPage],
    queryFn: async () => {
      const params = {
        page: currentPage,
        limit: itemPerPage,
        ...(searchDate && { search: searchDate }),
      };
      const { data } = await axiosSecure.get("/alltests", { params });
      return data;
    },
  });

  const handleSearch = () => {
    setSearchDate(formattedDate);
    setCurrentPage(0);  // Reset to first page after search
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.total / itemPerPage) - 1));
  };

  const numPages = Math.ceil(data?.total / itemPerPage);

  const handleAll = () => {
    window.location.reload();
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to left top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://img.freepik.com/free-photo/copy-space-glasses-stethoscope_23-2148519794.jpg?w=1380&t=st=1718458369~exp=1718458969~hmac=9d53d94ec5fdf8a7e6ef02178272f81ea3b054cd0493ed43e52094135a80f5ce)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex items-center min-h-[400px]"
      >
        <div className="w-full mx-auto justify-start">
          <div className="max-w-7xl mx-auto mt-10 space-y-6">
            <h2 className="md:text-6xl text-5xl text-[#004552] font-Lora">
              Our services
            </h2>
            <h2 className="text-2xl text-[#595959]">
              Get the answers you need for a healthier you at our medical diagnostic center.
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl px-6 py-10 mx-auto">
          <div className="justify-center flex">
            <h1 className="text-2xl font-semibold rounded-b-lg text-gray-800 text-center border-b-4 border-[#00d2d3] inline-block capitalize lg:text-3xl dark:text-white">
              Our All Services
            </h1>
          </div>
          <div className="flex gap-16 items-center pt-12">
            <DatePicker
              className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <button onClick={handleSearch} className="py-3 px-8 rounded-lg bg-[#00d2d3] border">
              Search
            </button>
            <button onClick={handleAll} className="py-3 px-8 rounded-lg bg-[#00d2d3] border">
             All
            </button>
          </div>
          {data?.result?.length ? (
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
              {data.result.map((test) => (
                <AllTestCard key={test._id} data={test} />
              ))}
            </div>
          ) : (
            <div className="flex-col flex justify-center items-center h-[calc(100vh-600px)]">
              <h3 className="text-3xl font-bold">Data not found</h3>
              <p>Enter a valid date</p>
            </div>
          )}
        </div>

        {/* Pagination section */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className="btn btn-outline btn-circle"
          >
            <GrLinkPrevious size={20} className="inline-block mr-2" />
          </button>
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`mx-2 text-2xl ${currentPage === i ? "underline" : ""}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === numPages - 1}
            className="btn btn-outline btn-circle"
          >
            <GrLinkNext size={20} className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTest;
