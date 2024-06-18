import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EFF6FF] dark:bg-gray-900 ">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">
            Subscribe our newsletter to get update.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <Link to={'/registration'}
              href="#"
              className="inline-flex bg-black items-center justify-center w-full px-4 py-2 text-sm text-white duration-300  rounded-lg gap-x-3 focus:ring  focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link to={'/'}
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Home
              </Link>
              <Link to={'/aboutus'}
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Who We Are
              </Link>
              <Link to={'/alltest'}
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                All service
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Tests
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Thyroid Function Test
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                X-Ray Chest
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
               Echocardiogram
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                medical tips
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Qualified Doctors
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Ensure Best treatment
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Contact Us
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
              >
                Labratory@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h2 className=" text-3xl italic font-Lora">Labratory</h2>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © Copyright 2024. All Rights Reserved By Mahim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
