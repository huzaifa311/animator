import React from "react";
import { motion } from 'framer-motion';
import bgIndex from '../../Images/bgIndex.jpg'
import bgIndex1 from '../../Images/bgIndex1.jpg'
import motu from '../../Images/motu.png'
import digital from '../../Images/digitalmarketing.png'

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
        <div className="flex flex-col items-center">
            <div className="relative lg:h-[640px] sm:h-[400px] h-[300px] w-full">
                <img
                    src={images[activeIndex]}
                    alt={`Image ${activeIndex + 1}`}
                    className="absolute top-0 left-0 h-full w-full object-cover"
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
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`rounded-full h-6 w-6 bg-white ${activeIndex === index ? "bg-black" : ""
                            }`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

const MyCarousel = () => {
    const images = [
        bgIndex1,
        bgIndex
    ];
    const texts = [
        <div className="w-full">
            <div className="flex py-2 px-4 ">
                <div className="flex flex-col justify-center md:place-items-start place-items-center w-[700px]  md:h-auto h-[280px] ">
                    <h1 className="lg:text-4xl md:text-left text-2xl text-center font-bold tracking-wider">Our goal is to make 3D animation accessible to everyone. </h1>
                    <button className="sm:mt-9 mt-2 text-xl w-44 bg-yellow-500  hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded text-left">Read More<i className="px-2 fas fa-long-arrow-alt-right"></i></button>
                </div>

                {/* <motion.img src={motu} alt="motu" initial={{ x: 100, y: -1 }} animate={{ x: 10, y: -5 }} transition={{ repeat: Infinity, duration: 50, repeatType: 'reverse' }} className="lg:h-[600px] lg:w-[600px] a-pulse p-0 md:mt-0 md:p-0 md:w-[300px] md:h-[300px] bg-gree hidden md:inline-flex" /> */}
                <img src={motu} alt="motu" className="lg:h-[600px] lg:w-[600px] a-pulse p-0 md:mt-0 md:p-0 md:w-[320px] md:h-[350px] md:inline-flex hidden " />

            </div>
        </div>,
        <div className="w-full">
            <div className="flex justify-around">
                <div className="lg:mt-[150px] mt-[18px] md:text-left text-center">
                    <h1 className="lg:text-5xl text-4xl font-bold">Immersive Digital World</h1>
                    <p className="md:mt-9 mt-6 md:text-2xl text-lg font-bold">Immersive Animator is a design studio that codes, creates, and invents solutions for the present and future.</p>
                    <button className="md:mt-9 mt-6 text-xl bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded">Read More<i className="px-2 fas fa-long-arrow-alt-right"></i></button>
                </div>
                <motion.img src={digital} initial={{ x: -1, y: 10 }} animate={{ x: 10, y: -5 }} transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }} alt="" className="lg:h-[400px] lg:w-[900px]  p-0 md:mt-0 lg:mt-[50px] md:p-0 md:w-[400px] md:h-[300px] hidden md:inline-flex" />
            </div>
        </div>
    ];

    return (
        <div className="mt-[112px]">
            <Carousel images={images} texts={texts} />
        </div>
    );
}

export default MyCarousel;