
const Reconamdations = () => {
  return (
    <div className="max-w-7xl w-[90%]  py-16 mx-auto">
      <div className="items-center justify-between lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg space-y-5">
            <h1 className="text-4xl font-Lora uppercase  text-gray-800 dark:text-white lg:text-4xl">
              We are committed to exellent and complete patient care
            </h1>

            <p className="mt-3 text-gray-600 text-xl dark:text-gray-400">
            At our clinic, we prioritize your health and well-being with exceptional and thorough patient care. Our expert team offers a wide range of medical services, ensuring you receive personalized and professional treatment.
            </p>
            <h2 className=" text-2xl inline-block border-b-4 border-[#00d2d3] rounded-sm pb-1">Why choice us?</h2>
             <ul className=" text-xl flex list-disc pl-8 flex-col gap-3">
             <li>Comprehensive Services </li>
             <li>Expert Team </li>
             <li>State-of-the-Art Facilities</li>
             <li>Welcoming Environment</li>
             </ul>
             <p className=" text-xl">Experience the difference of excellent, patient-centered care. Visit us today for a healthier, happier you!</p>
          </div>
        </div>

        <div className="flex items-center rounded-md justify-center  lg:justify-end w-full mt-6 lg:mt-0 lg:w-1/2">
          <img className="max-w-[500px] w-full  rounded-lg max-h-[400px] lg:max-w-3xl" src="https://i.ibb.co/6m3x1x3/2234-R0l-VIEFOTi-Aw-Njkt-Mj-E.jpg" alt="Catalogue-pana.svg" />
        </div>
      </div>
    </div>
  );
};

export default Reconamdations;