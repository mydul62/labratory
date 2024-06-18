import React, { useState } from 'react';
import useAuthProvider from '../../Hooks/useAuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { SignInWithPassword } = useAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const pathform = location?.state || "/Dashboard";
    const [error, setError] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Call the SignInWithPassword function with email and password
        SignInWithPassword(email, password)
            .then(response => {
                navigate(pathform);
            })
            .catch(error => {
                setError('Error signing in. Please check your email and password.');
                console.error('Error signing in', error);
            });
    };

    return (
       <div className='flex min-h-screen justify-center items-center'>
       
       <div className="flex w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('https://i.ibb.co/JC3LbPy/vecteezy-man-entering-security-password-4689193-1.jpg')" }}></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                   <h2 className='text-3xl italic font-bold text-green-600'>Labratory</h2>
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Sign in Now
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={handleSignin} action="">
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                        <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name='email' />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" name='password' />
                    </div>

                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <Link to={'/registration'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;
