import React from "react";
import { motion } from "framer-motion";

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
        {/* {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`rounded-full h-6 w-6 bg-black ${activeIndex === index ? "bg-black" : ""
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))} */}
      </div>
    </div>
  );
};

const MyCarousel = () => {
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
          initial={{ x: 3, y: 50 }}
          animate={{ x: 10, y: -5 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          className="hidden md:inline-flex lg:w-[400px]"
        />
        {/* <img src={'/motu.png'} alt="motu" className="lg:h-[600px] lg:w-[600px] a-pulse p-0 md:mt-0 md:p-0 md:w-[320px] md:h-[350px] md:inline-flex hidden " /> */}
      </div>
    </div>,
    <div className="w-full">
      <div className="flex lg:justify-around md:justify-between justify-center place-items-center h-[300px] sm:h-[390px] md:h-[500px] px-0 md:px-10">
        <div className="flex flex-col md:w-[100%] lg:w-[55%] md:place-items-start place-items-center sm:w-[70%] w-full text-center md:text-left font-bold">
          <h1 className="lg:text-5xl text-4xl font-bold hidden md:inline-flex">
            Immersive Digital World
          </h1>
          <p className="md:mt-9 mt-6 md:text-2xl text-lg font-bold">
            Immersive Animator is a design studio that codes, creates, and
            invents solutions for the present and future.
          </p>
          <button className="bg-yellow-500 w-32 py-2 mt-5 hover:bg-yellow-600 rounded flex justify-around place-items-center">
            Read More<i className="px-2 fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <motion.img
          src={"/digitalmarketing.png"}
          initial={{ x: 3, y: 50 }}
          animate={{ x: 10, y: -5 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          alt=""
          className="lg:h-[400px] lg:w-[500px] a-pulse p-0 md:mt-0 md:p-0 md:w-[320px] md:h-[350px] md:inline-flex hidden"
        />
      </div>
    </div>,
  ];

  return (
    <div className="mt-[80px]">
      <Carousel images={images} texts={texts} />
    </div>
  );
};

export default MyCarousel;
