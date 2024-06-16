
const AboutUs = () => {
  return (
    <div>

     <div
        style={{
            backgroundImage: `linear-gradient(to left top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://concepto.de/wp-content/uploads/2018/04/celula-e1523472422656.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment:'fixed'
          }}
        className="min-h-[400px] w-full flex items-center justify-center"
      >
        <div>
          <h2 className="text-4xl text-center text-white  font-bold font-Lora">
            About Us
          </h2>
        </div>
        
      </div>
      
      <div className=" flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto w-[90%] my-16">
      
     <div className=" *:mb-6 w-full lg:w-[40%]">
     <h4 className=" text-xl font-bold font-Lora text-[#00d2d3]" >About us</h4>
      <h2 className=" text-4xl lg:text-5xl font-bold font-Lora text-[#010101]">Why patients choice our team</h2>
      <p className=" text-[#515151] text-xl font-Lora font-semibold">Patients choose our team for our unwavering commitment to delivering accurate diagnostics, personalized care, and utilizing cutting-edge technology. Our experienced professionals ensure precise results, compassionate service, and a seamless healthcare experience tailored to each patient’s unique needs.</p>
     </div>

      <div>
      <div className=" *:mb-4 ">
     <h4 className=" text-xl font-bold font-Lora text-[#00d2d3]" >Clinic skills
     </h4>
      <h2 className=" text-4xl lg:text-5xl font-bold font-Lora text-[#010101]">Our specialisations</h2>
     </div>
     <div className=" flex flex-col lg:flex-row items-center justify-between gap-6 my-16">
   
     <div className="radial-progress text-center text-[#00d2d3]" style={{ "--value": "85", "--size": "12rem", "--thickness": "7px" }} role="progressbar">
    <h2 className=" text-3xl font-bold"> 85%</h2>
     <h4 className=" text-xl ">Neurousurgery</h4>
     </div>
    {/* ------------ */}

     <div className="radial-progress text-center text-[#00d2d3]" style={{ "--value": "68", "--size": "12rem", "--thickness": "7px" }} role="progressbar">
    <h2 className=" text-3xl font-bold"> 68%</h2>
     <h4 className=" text-xl ">MRI-Diagonostic</h4>
     </div>

    {/* ------------ */}

     <div className="radial-progress text-center text-[#00d2d3]" style={{ "--value": "74", "--size": "12rem", "--thickness": "7px" }} role="progressbar">
    <h2 className=" text-3xl font-bold"> 74%</h2>
     <h4 className=" text-xl ">Cardiology</h4>
     </div>

    {/* ------------ */}
     
     </div>
      </div>
     
      
      </div>
      <div className="max-w-7xl mx-auto w-[90%]">
      <img className=" w-full" src="http://holamed.like-themes.com/wp-content/uploads/2018/11/team-group.jpg" alt="" />
      </div>
     
    </div>
  );
};

export default AboutUs;