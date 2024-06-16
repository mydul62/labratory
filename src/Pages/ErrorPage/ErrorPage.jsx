import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
    <div className="w-full lg:w-1/2">
      <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Sorry, the page you are looking for doesn't exist. Here are some helpful links:
      </p>

      <div className="flex items-center mt-6 gap-x-3">
     

        <Link to={'/'}><button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
          Take me home
        </button></Link>
      </div>
    </div>

    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
      <img className="w-full max-w-lg lg:mx-auto" src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090004.jpg?w=826&t=st=1718458884~exp=1718459484~hmac=3f869c350f2d4beb11ddba5182b948d7f0e9e35133ae87c5c209a0dbbd8bd035" alt="Illustration" />
    </div>
  </div>
</section>

    </div>
  );
};

export default ErrorPage;