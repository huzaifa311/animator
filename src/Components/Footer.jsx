import React from "react";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="">
      <div className="bgGradient py-16 mt-20 px-[5%]">
        <div className="md:flex md:flex-row md:place-items-center md:justify-between flex flex-col gap-2 place-items-center h-[50%]">
          <motion.img
            initial={{ x: 3, y: 5 }}
            animate={{ x: 10, y: -5 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            src="/immersivewhite.png"
            alt=""
            className="min-h-[150px] max-h-[200px] min-w-[150px] max-w-[200px]"
          />
          <div className="">
            <h1 className="text-4xl font-semibold text-white text-left">
              Newsletter SignUp!
            </h1>
            <div className="relative mt-24">
              <input
                type="email"
                className="w-full p-4 border max-w-[800px] md:min-w-[560px] sm:min-w-[500px] min-w-[200px] border-gray-300 rounded focus:outline-none focus:border-yellow-600"
                placeholder="Your Email Address"
              />
              <button
                className="absolute right-0 focus:outline-none hover:cursor-pointer text-lg bg-yellow-400 hover:bg-yellow-500 text-white font-bold h-full md:px-20 rounded"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-20 border-[#282F61]" />
        <div className="mt-20 md:flex md:flex-row gap-14">
          <div className="md:w-[45%] w-full">
            <h1 className="text-white text-3xl text-bold">About Us</h1>
            <p className="mt-6">
              We believe that animation can inspire people and change the World.
              With Immersive Animator, you can bring your ideas to life and
              share them with the World.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="h-10 w-10 rounded-full flex place-items-center justify-center outline outline-2  outline-gray-500">
                <i className="fab fa-facebook-f "></i>
              </div>
              <div className="h-10 w-10 rounded-full flex place-items-center justify-center outline outline-2  outline-gray-500">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="h-10 w-10 rounded-full flex place-items-center justify-center outline outline-2 outline-gray-500">
                <i className="fab fa-instagram "></i>
              </div>
              {/*<i className="fab fa-instagram rounded-full"></i>
        <i className="fab fa-linkedin"></i> */}
            </div>
          </div>
          <div className="md:w-[35%] w-full md:mt-0 mt-14">
            <h1 className="text-white text-3xl text-bold">Office Address</h1>
            <address className="mt-6 font-m">
              <i className="fas fa-map-marker-alt"></i> ‎ M 03- 04 Plot no
              677,678-C. Block 2 PECHS C.C Area Tariq Road Karachi
            </address>
            <p className="mt-4">
              <i className="fas fa-phone fa-flip-horizontal"></i>‎ ‎ +92 335 1111023
            </p>
            <p className="mt-4">
              <i className="far fa-envelope"></i>‎ hello@immersiveanimator.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
