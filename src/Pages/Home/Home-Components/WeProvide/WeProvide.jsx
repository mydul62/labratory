import { MdOutlineDesignServices } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { PiPencilLineLight } from "react-icons/pi";

const WeProvide = () => {
  return (
    <div className=" max-w-7xl w-[90%] mx-auto  pt-[100px]">
      <div className=" flex lg:flex-row flex-col gap-8 items-center justify-between ">
      <div className=" flex justify-center items-start gap-4">
      <span>
      <MdOutlineDesignServices  className="text-[#0767a7]" color="red" size={40} />
      </span>
      <div >
      <h2 className=" text-xl font-bold ">Hearing Tests & Aids</h2>
      <p>Built using the latest web technologies like html5, css3 & jQuery, rest assured will look smashing on every device under the sun.</p>
      </div>
      </div>
      <div className=" flex justify-center items-start gap-4">
      <span>
      <VscGraph className="text-[#0767a7]" color="red" size={40} />
      </span>
      <div >
      <h2 className=" text-xl font-bold ">Pediatric & Adult Audiology
      </h2>
      <p>Built using the latest web technologies like html5, css3 & jQuery, rest assured will look smashing on every device under the sun.</p>
      </div>
      </div>
      <div className=" flex justify-center items-start gap-4">
      <span>
      <PiPencilLineLight    className="text-[#0767a7]" size={40} />
      </span>
      <div >
      <h2 className=" text-xl font-bold ">Provision & Servicing
      </h2>
      <p>Built using the latest web technologies like html5, css3 & jQuery, rest assured will look smashing on every device under the sun.</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default WeProvide;