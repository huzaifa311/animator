import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-2xl w-full fixed top-0 left-0 z-[100] ">
      <div
        className={`md:flex items-center justify-between bg-white py-4 md:px-16 px-7`}
      >
        <div className="font-semibold text-2xl cursor-pointer flex items-center gap-1">
          <img
            src={"/Immersive-Logo.png"}
            alt=""
            className="w-[80px] h-[80px]"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static md:z-auto z-[-1] left-0 text-black w-full h-[350%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold md:mt-0 mt-[70px]">
            <Link className={` hover:text-yellow-400 duration-500`}>HOME</Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer">
            <ScrollLink
              to="aboutSection" // This should match the id of the target section
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value to fine-tune the scrolling position
              duration={500}
              className={` hover:text-yellow-400 duration-500`}
            >
              ABOUT
            </ScrollLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer">
            <ScrollLink
              to="servicesSection" // This should match the id of the target section
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value to fine-tune the scrolling position
              duration={500}
              className={` hover:text-yellow-400 duration-500`}
            >
              SERVICES
            </ScrollLink>
          </li>

          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link className={` hover:text-yellow-400 duration-500 `}>
              CAREER
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link className={` hover:text-yellow-400 duration-500 `}>BLOG</Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link className={` hover:text-yellow-400 duration-500  `}>
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="hidden lg:block">
          {" "}
          {/* Hide the button on screens smaller than md */}
          <button className="text-lg bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
