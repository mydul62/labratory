import React, { useState } from 'react';
import { BiDonateBlood } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { auth } from "../../Firebase/firebase-config";
import { updateProfile } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

const Registration = () => {
  const { registerWithPassword } = useAuthProvider();
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();
  
  const [passwordError, setPasswordError] = useState('');
  const [profileUpdateError, setProfileUpdateError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const {data: districts} = useQuery({
    queryKey: "districts",
    queryFn: async () => {
      const { data } = await axiosCommon.get("/district");
      return data;
    }
  });

  const {data: upazillas} = useQuery({
    queryKey: "upazillas",
    queryFn: async () => {
      const { data } = await axiosCommon.get("/upazillas");
      return data;
    }
  });

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const profilePhoto = form.profilePhoto.files[0];
    const emailAdress = form.emailAdress.value;
    const bloodGrupe = form.bloodGrupe.value;
    const districts = form.districts.value;
    const upazilas = form.upazilas.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const formData = new FormData();
    formData.append("image", profilePhoto);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_iMGBB_API_KEY}`,
      formData
    );
    
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    registerWithPassword(emailAdress, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: data.data.display_url,
          bloodGrupe: bloodGrupe,
          districts: districts,
          upazilas: upazilas
        })
          .then(() => {
            const userInfo = {
              name: userName, 
              emailAdress, 
              bloodGrupe, 
              districts, 
              upazella: upazilas,
              image: data.data.display_url,
              status: 'active',
              role: 'user'
            };
            axiosCommon.post("/allusers", userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  Swal.fire("Registered successfully");
                }
              })
              .catch(error => {
                console.error('Error occurred:', error);
                setProfileUpdateError("Something went wrong while updating the profile");
              });
            navigate('/');
          })
          .catch((error) => {
            console.error("Error updating profile", error);
            setProfileUpdateError("Something went wrong while updating the profile");
          });
      })
      .catch((error) => {
        console.error("Error during registration", error);
        setRegistrationError("Registration failed");
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen mx-auto">
        <form onSubmit={handleRegistration} className="w-full max-w-lg">
          <div className="flex items-center justify-center mt-6">
            <a href="#" className="w-1/3 pb-4 font-medium text-center text-2xl text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              sign up
            </a>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input type="text" required name="userName" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
          </div>

          <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <h2 className="mx-3 text-gray-400">Profile Photo</h2>
            <input id="dropzone-file" required type="file" name="profilePhoto" />
          </label>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input type="email" required name="emailAdress" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <BiDonateBlood size={25} className="text-gray-300 ml-3" />
            </span>
            <select name="bloodGrupe" required className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option selected disabled value="Blood">Blood</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <BiDonateBlood size={25} className="text-gray-300 ml-3" />
            </span>
            <select name="districts" required className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option selected disabled value="District">District</option>
              {districts?.map(district => (
                <option key={district?._id} value={`${district?.name}`}>{district?.name}</option>
              ))}
            </select>
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <BiDonateBlood size={25} className="text-gray-300 ml-3" />
            </span>
            <select name="upazilas" required className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option selected disabled value="upazila">Upazilas</option>
              {upazillas?.map(upazilla => (
                <option key={upazilla?._id} value={`${upazilla?.name}`}>{upazilla?.name}</option>
              ))}
            </select>
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input name="password" required type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input name="confirmPassword" required type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
          </div>

          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
          {profileUpdateError && <p className="text-red-500 text-sm mt-2">{profileUpdateError}</p>}
          {registrationError && <p className="text-red-500 text-sm mt-2">{registrationError}</p>}

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div className="my-6 text-center">
              <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
                <span className="underline"> Sign in</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
