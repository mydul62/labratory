import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div>
      <div
        style={{
            backgroundImage: `linear-gradient(to left top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://img.freepik.com/premium-photo/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.jpg?w=1380)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        className="min-h-[400px] w-full flex items-center justify-center"
      >
        <div>
          <h2 className="text-4xl text-center text-white  font-bold font-Lora">
            CONTACT US
          </h2>
        </div>
        
      </div>
      <div>
        <section className="bg-white">
            <div className="max-w-7xl w-[90%] px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="font-medium text-[#00d2d3]">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">We’d love to hear from you</h1>
                    <p className="mt-3 text-gray-500">Chat to our friendly team.</p>
                </div>
                <img
                    className=" w-full min-h-[300px] mt-10 rounded-lg lg:h-96"
                    src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?t=st=1718704771~exp=1718705371~hmac=f2c01ac7c57be4586e4d608456cdf6fd09fce207500a1ef910a7233553899f66"
                    alt=""
                />
                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="p-4 rounded-lg bg-[#00d3d33d] md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FiMail className="w-5 h-5" />
                        </span>
                        <h2 className="mt-4 text-base font-medium text-gray-800">Chat to sales</h2>
                        <p className="mt-2 text-sm text-gray-500">Speak to our friendly team.</p>
                        <p className="mt-2 text-sm text-blue-500">mahimcse@gmail.com</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#00d3d33d]  md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FiMapPin className="w-5 h-5" />
                        </span>
                        <h2 className="mt-4 text-base font-medium text-gray-800">Visit us</h2>
                        <p className="mt-2 text-sm text-gray-500">Visit our office HQ.</p>
                        <p className="mt-2 text-sm text-blue-500">100 Smith Street Collingwood VIC 3066 AU</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#00d3d33d]  md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FiPhone className="w-5 h-5" />
                        </span>
                        <h2 className="mt-4 text-base font-medium text-gray-800">Call us</h2>
                        <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-sm text-blue-500">+1 (555) 000-0000</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-white">
            <div className="max-w-7xl w-[90% px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">
                    <div className="lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            Contact us for <br /> more info
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <FiMapPin className="w-6 h-6 mx-2 text-blue-500" />
                                <span className="mx-2 text-gray-700 truncate w-72">
                                    Cecilia Chapman 711-2880 Nulla
                                    St. Mankato Mississippi 96522
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <FiPhone className="w-6 h-6 mx-2 text-blue-500" />
                                <span className="mx-2 text-gray-700 truncate w-72">(257) 563-7401</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <FiMail className="w-6 h-6 mx-2 text-blue-500" />
                                <span className="mx-2 text-gray-700 truncate w-72">acb@example.com</span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-600">Follow us</h3>

                            <div className="flex mt-4 -mx-1.5 ">
                                <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform " href="#">
                                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                    </svg>
                                </a>

                                <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform " href="#">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                        <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                        <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                    </svg>
                                </a>

                                <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform " href="#">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                    </svg>
                                </a>

                                <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform " href="#">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.9536 8.51563C19.6474 7.82588 19.1956 7.22302 18.6385 6.6645C18.08 6.10743 17.4771 5.65561 16.7874 5.34945C15.9603 4.97635 15.0377 4.7557 14.1047 4.70313C13.2591 4.64082 13.0033 4.62711 11.9293 4.62711H11.9239C10.8506 4.62711 10.5915 4.64082 9.7468 4.70313C8.8138 4.7557 7.89124 4.97635 7.06414 5.34945C6.37438 5.65561 5.77152 6.10743 5.21444 6.6645C4.65691 7.22302 4.20509 7.82588 3.89894 8.51563C3.52583 9.34275 3.30518 10.2653 3.25262 11.1982C3.19031 12.0438 3.1766 12.2997 3.1766 13.373V13.3784C3.1766 14.4517 3.19031 14.7108 3.25262 15.5555C3.30518 16.4885 3.52583 17.4111 3.89894 18.2382C4.20509 18.9279 4.65691 19.5308 5.21444 20.0878C5.77152 20.6463 6.37438 21.0981 7.06414 21.4043C7.89124 21.7774 8.8138 21.998 9.7468 22.0506C10.5925 22.1129 10.8515 22.1266 11.9293 22.1266H11.9347C13.0033 22.1266 13.2624 22.1129 14.1047 22.0506C15.0377 21.998 15.9603 21.7774 16.7874 21.4043C17.4771 21.0981 18.08 20.6463 18.6385 20.0878C19.1956 19.5308 19.6474 18.9279 19.9536 18.2382C20.3267 17.4111 20.5473 16.4885 20.5999 15.5555C20.6622 14.7108 20.6759 14.4517 20.6759 13.3784V13.373C20.6759 12.2997 20.6622 12.0438 20.5999 11.1982C20.5473 10.2653 20.3267 9.34275 19.9536 8.51563ZM17.8957 15.5904C17.8257 15.8162 17.7301 16.0326 17.6115 16.2347C17.4002 16.5958 17.1184 16.9061 16.7845 17.1477C16.4446 17.3925 16.0481 17.5626 15.6239 17.6466C15.3926 17.6953 14.9024 17.7186 13.9247 17.7631C13.1817 17.7996 12.7285 17.8093 11.9292 17.8093C11.1299 17.8093 10.6767 17.7996 9.93367 17.7631C8.95604 17.7186 8.4658 17.6953 8.23444 17.6466C7.81029 17.5626 7.41377 17.3925 7.07387 17.1477C6.73995 16.9061 6.45822 16.5958 6.24695 16.2347C6.12838 16.0326 6.03282 15.8162 5.96282 15.5904C5.70767 14.7532 5.70767 12.9928 5.70767 12.2405C5.70767 12.0368 5.73201 11.7288 5.73201 11.5243C5.73201 10.7719 5.73201 9.01163 5.96282 8.1748C6.03282 7.94896 6.12838 7.73257 6.24695 7.5305C6.45822 7.16945 6.73995 6.85915 7.07387 6.61751C7.41377 6.37269 7.81029 6.20253 8.23444 6.11851C8.4658 6.06988 8.95604 6.04659 9.93367 6.00192C10.6767 5.96542 11.1299 5.95566 11.9292 5.95566C12.7285 5.95566 13.1817 5.96542 13.9247 6.00192C14.9024 6.04659 15.3926 6.06988 15.6239 6.11851C16.0481 6.20253 16.4446 6.37269 16.7845 6.61751C17.1184 6.85915 17.4002 7.16945 17.6115 7.5305C17.7301 7.73257 17.8257 7.94896 17.8957 8.1748C18.1513 9.01163 18.1513 10.7719 18.1513 11.5243C18.1513 11.7288 18.1269 12.0368 18.1269 12.2405C18.1269 12.9928 18.1269 14.7532 17.8957 15.5904Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-xl border-2 dark:bg-gray-900 lg:max-w-xl">
                            <h1 className="text-lg font-medium text-gray-700 dark:text-gray-400">What do you want to ask</h1>

                            <form className="mt-6">
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea className="block w-full h-32 px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button className="flex btn bg-[#00d2d3] text-center items-center justify-between w-full px-6 py-3 mt-6 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                 <h1 className=' text-center'>Send Message</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.81L4.28 9.78a.75.75 0 11-1.06-1.06l6-6a.75.75 0 011.06 0l6 6a.75.75 0 11-1.06 1.06L10.75 4.81V17.25A.75.75 0 0110 18z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </div>
    </div>
  );
};

export default ContactPage;