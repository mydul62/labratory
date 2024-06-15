
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllTestCard = ({data}) => {
  return (
    <div className="bg-base-100 shadow-sm border-2 hover:scale-105 duration-700 p-4 rounded-[24px]">
      <div className="flex justify-center items-center pb-6">
        <img className="w-full h-[200px] rounded-md" src={data?.image} alt="Cover" />
      </div>
      <div className="space-y-4">
        <h5 className="mulish text-[16px] text-[#12132D99]">
          <i className="fa-regular fa-calendar-days"></i>{data?.date}
        </h5>
        <h2 className="card-title mulish text-[18px] font-extrabold text-[#12132D]">
          {data?.title}
        </h2>
        <p className="text-[#12132D99] text-[16px] mulish">
          {data?.description?.slice(0, 65)}
        </p>
        <div className="flex justify-between gap-4 items-center">
         <div className=" flex justify-center items-center gap-2">
         <div>
          <BiSolidCategoryAlt size={30} />
          </div>
          <div className=" flex justify-between">
            <div>
            <h3 className="mulish font-bold text-[#12132D]">
             {data?.category}
            </h3>
            <h5 className="text-[14px] text-[#12132D99] mulish">
             Service Charge : {data?.price}Tk
            </h5>
            </div>
          </div>
         </div>
          <div>
           <Link to={`/testdetail/${data?._id}`}> <button className=" btn text-white bg-[#00d2d3]  btn-sm">See Details</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllTestCard;