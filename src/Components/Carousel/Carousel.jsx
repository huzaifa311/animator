import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../Index.css";

const Carousel = ({ images, texts }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] sm:h-[390px] md:h-[500px]">
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className="absolute top-0 left-0 right-0 object-cover h-[300px] sm:h-[390px] md:h-[500px] w-full"
        />
        <button
          type="button"
          className="absolute top-0 left-0 h-full w-16 flex justify-center items-center"
          onClick={handlePrev}
        >
          <i className="fas fa-chevron-left text-white"></i>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 h-full w-16 flex justify-center items-center"
          onClick={handleNext}
        >
          <i className="fas fa-chevron-right w-[500px] text-white"></i>
        </button>
        <div className="absolute left-10 right-10  h-[650px] bg-opacity-[0.01] flex  text-white bg-black">
          {texts[activeIndex]}
        </div>
      </div>
      <div className="mt-4">
      </div>
    </div>
  );
};

const MyCarousel = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    slide: "div",
    cssEase: "linear",
  };
  const images = ["/bgIndex1.jpg", "/bgIndex.jpg"];
  const texts = [
    <div className="w-full">
      <div className="flex lg:justify-around md:justify-between justify-center place-items-center h-[300px] sm:h-[390px] md:h-[500px] px-0 md:px-10">
        <div className="flex flex-col md:w-[100%] lg:w-[55%] md:place-items-start place-items-center sm:w-[70%] w-full text-center md:text-left font-bold">
          <h1 className="md:text-[45px] md:leading-[50px] text-3xl">
            Our goal is to make 3D animation accessible to everyone.{" "}
          </h1>
          <button className="bg-yellow-500 w-32 py-2 mt-5 hover:bg-yellow-600 rounded flex justify-around place-items-center">
            Read More
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <motion.img
          src={"/motu.png"}
          alt="motu"
          initial={{ x: 5, y: 10 }}
          animate={{ x: -5, y: -10 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          className="hidden md:inline-flex lg:w-[400px]"
        />
      </div>
    </div>,
    <div className="w-full py-4">
      <div className="flex justify-around">
        <div className="lg:mt-[150px] mt-[18px] text-center flex flex-col justify-center place-items-center">
          <h1 className="lg:text-5xl text-4xl font-bold hidden md:inline-flex">
            Immersive Digital World
          </h1>
          <p className="md:mt-9 mt-6 md:text-2xl text-lg font-bold">
            Immersive Animator is a design studio that codes, creates, and
            invents solutions for the present and future.
          </p>
          <button className="sm:mt-9 mt-2 text-xl sm:w-44 w-[155px] bg-yellow-500  hover:bg-yellow-600 text-white font-bold py-3 sm:px-4 px-2 rounded">
            Read More<i className="px-2 fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <motion.img
          src={"/digitalmarketing.png"}
          initial={{ x: 5, y: 10 }}
          animate={{ x: -5, y: -10 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          alt=""
          className="lg:h-[400px] lg:w-[500px] a-pulse p-0 md:mt-0 md:p-0 md:w-[320px] md:h-[350px] md:inline-flex hidden"
        />
      </div>
    </div>,
  ];

  return (
    <div className="mt-[80px]">
      <Carousel {...settings} images={images} texts={texts}  />
    </div>
  );
};

export default MyCarousel










/* const MyCarousel = () => {
  var settings = {
    // autoplay: true,
    // autoplaySpeed: 5000,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      className="mt-[90px] h-[300px] sm:h-[390px] md:h-[560px] w-full"
    >
      <div className="w-full bgIndex1 px-[5%] ">
        <div className="flex h-[300px] sm:h-[390px] md:h-[560px] px-0 md:justify-between md:place-items-center bg-green-600 pr-5">
          <div className="lg:w-[700px] w-full flex justify-center place-items-center px-[5%] bg-orange-500">
            <h1 className="md:text-[45px] md:leading-[60px] text-3xl text-white">
              Our goal is to make 3D animation accessible to everyone.{" "}
            </h1>
            <button className="bg-yellow-500 w-40 px-4 py-3 mt-5 hover:bg-yellow-600 rounded flex justify-around place-items-center text-white text-lg">
              Read More
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>

          <motion.img
            src={"/motu.png"}
            alt="motu"
            initial={{ x: 5, y: 10 }}
            animate={{ x: -5, y: -10 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="w-0 md:w-auto bg-red-50 "
          />
        </div>
      </div>

      <div className="h-[300px] sm:h-[390px] md:h-[560px] w-full bgIndex bg-contain object-contain">
        <h3 className="text-black ">2</h3>
      </div>
    </Slider>
  );
};
export default MyCarousel; */
