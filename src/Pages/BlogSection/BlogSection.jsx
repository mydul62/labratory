import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const BlogSection = () => {
  const axiosCommon = useAxiosCommon()
  const {data:blogs}=useQuery({
  queryKey:["blogs"],
  queryFn:async()=>{
  const {data}=await axiosCommon.get("/blogs");
  return data;
  }
  })
  return (
    <div className="  ">
   <div className="bg-[#00d3d398]">
   <div className=" py-16 lg:h-[400px] flex flex-col   max-w-7xl mx-auto w-[90%]">
    <div className=" mt-16 lg:mt-28 w-full lg:w-[60%] space-y-4 ">
   <div>
   <h5 className=" text-sm font-bold capitalize ">about our services</h5>
   <h1 className=" text-3xl font-medium font-Lora ">Our Commitment to Excellence
</h1>
   </div>
    <p className=" text-xl">This version maintains a professional tone while emphasizing uniqueness and a commitment to personalized care, which can resonate more effectively with your audience.</p>
    </div>
    </div>
   </div>
    
    <div className=" max-w-7xl w-[90%] mx-auto">
    
   
    <div className=" flex flex-col gap-6 my-16  justify-center">
     <h1 className=" text-3xl">Explore Our Blogs</h1>
    {
    blogs?.map(blog=>(
      <section key={blog?._id} className="bg-white  dark:bg-gray-900 ">
      <div className=" px-6 py-10 ">
         

          <div className=" lg:-mx-6 lg:flex lg:items-center">
              <img 
                  className="object-cover w-full  lg:w-1/2 rounded-xl h-72 lg:h-96" 
                  src={blog?.blogImage} 
                  alt=""
              />

              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                  <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                      {blog?.title}
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                     {blog?.blogText}
                  </p>

                  <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                  <div className="flex items-center mt-6">
                      <img 
                          className="object-cover object-center w-10 h-10 rounded-full" 
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
                          alt=""
                      />

                      <div className="mx-4">
                          <h1 className="text-sm text-gray-700 dark:text-gray-200">{blog?.hostName}</h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{blog?.role}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    ))
    
    }
    </div>
    </div>
    </div>
  );
};

export default BlogSection;