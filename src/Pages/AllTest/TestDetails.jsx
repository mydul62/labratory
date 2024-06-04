
const TestDetails = () => {
  return (
   <div >
    <div
    style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.6), rgba(110, 193, 228, 0.7), rgba(110, 193, 228, 0.1)), url('https://cdn.pixabay.com/photo/2017/04/08/11/07/nerve-cells-2213009_1280.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }} className="min-h-[250px] bg-fixed">
      here is test details
    </div>
    <div className=" max-w-7xl w-[90%] mx-auto ">
     <div className="grid grid-cols-6 py-16">
     <div  className=" col-span-4">
     <div className=" w-[770px] h-[510px] rounded-md">
     <img className=" w-[770px] h-[510px] rounded-md" src="http://holamed.like-themes.com/wp-content/uploads/2018/11/blog_11.jpg" alt="" />
     </div>
     </div>
     <div className=" col-span-2 ">
     <div className=" bg-[#d3e0e7d1]">
     gdfg
     </div>
     </div>
     </div>
    </div>
   </div>
  );
};

export default TestDetails;