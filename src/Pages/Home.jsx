import React from "react";
import MyCarousel from "../Components/Carousel/Carousel";
import { motion } from "framer-motion";
import Services from "../Components/Services";
import "../Index.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="max-w-[1500px] px-2%">
      <Helmet>
        <title>Home Page-Immersive Animator</title>
      </Helmet>
      <MyCarousel />
      <div className="flex justify-center flex-col overflow-hidden">
        <h1 className="text-4xl text-center text-yellow-500 font-bold">
          Our Services
        </h1>
        <div
          id="servicesSection"
          className="text-center mt-6 text-lg font-semibold text-gray-500"
        >
          <p>We are experts in digital marketing and have a team of </p>
          <p>experienced professionals who can help you take your business</p>
          <p>to the next level.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-around mt-9 px-[4%]">
          <Services
            img="/whitePaper.png"
            h1={"White Paper Animations"}
            p={
              "We offer whitepaper designs that are great for businesses. Our designers use clean and beautiful formatting that is on-brand to engage with targeted audiences to provide in-depth information about industry."
            }
          />
          <Services
            img="/socialMedia.png"
            h1={"Social Media Marketing"}
            p={
              "We can help you create and manage social media profiles for your business and promote your products and services through social media channels by applying unique strategies."
            }
          />
          <Services
            img="/graphicDesign.png"
            h1={"Creative Graphic Designs"}
            p={
              "We offer creative graphics services to help you create engaging visuals for your marketing materials. We can help you design and produce logos, illustrations, infographics, post designs and more."
            }
          />
          <Services
            img="/content.png"
            h1={"Effective Content Writing"}
            p={
              "We offer content writing services to help you create and share engaging content with your target audiences. We can help you write website content, blog posts, social media updates, and more."
            }
          />
          <Services
            img="/seo.png"
            h1={"Search Engine Optimization (SEO)"}
            p={
              "We offer search engine optimization (SEO) services to help you improve your website's ranking on search engine results pages by improving your website's architecture to get the most of your SEO efforts."
            }
          />
          <Services
            img={"/development.png"}
            h1={"Website Development"}
            p={
              "We offer web development services to help you build a website that meets your needs. We can help you design and develop a website, create custom scripts and applications, and integrate third-party services."
            }
          />
          <Services
            img={"/Software.png"}
            h1={"Software Development"}
            p={
              "We offer software development services to help you create custom applications and scripts. We can assist you in developing and implementing a bespoke application, integrating third-party services, and generating custom scripts."
            }
          />
          <Services
            img={"/animation.png"}
            h1={"2D Animations and 3D Animations"}
            p={
              "We offer professionally produced animation the latest tools to work on 3D videos, we have fully equipped technology for high-quality animations and producing characters for animations in a realistic style that looks like real human figures."
            }
          />
          <Services
            img={"/marketing.png"}
            h1={"Advance Digital Marketing"}
            p={
              "We offer digital marketing services to help you promote your business online. We can help you create and execute an online advertising campaign, develop a social media strategy, and optimize your website for search engines."
            }
          />
          <Services
            img="/advertising.png"
            h1={"Pay-Per-Click Advertising"}
            p={
              "We offer pay-per-click advertising and marketing services. This is a type of advertising that charges the advertiser by the number of clicks on either the advertisements or search results."
            }
          />
          <Services
            img={"/productions.png"}
            h1={"Pre/Post Productions"}
            p={
              "We offer pre/post production services to help you produce high-quality video and audio content. We can help you script and storyboard your videos, record and edit audio, and create motion graphics."
            }
          />
          <Services
            img={"/motivational.png"}
            h1={"Motivational Videos"}
            p={
              "We offer all the services to achieve your video project planning goals and deadlines. No matter what kind of video you need for any purpose within your company, or for your customers, we'll help you to produce and edit it properly."
            }
          />
        </div>

        <div className="">
          <div className="mt-[100px] flex flex-col md:place-items-center lg:flex-row lg:justify-center ">
            <div className="sm:px-[4%]">
              <h3
                className="text-lg text-yellow-400 font-semibold"
                id="aboutSection"
              >
                LIST OF WHAT WE DO
              </h3>
              <h1 className="mt-3  text-3xl text-gray-400 font-bold">
                Groundwork For Business <br /> Development
              </h1>
              <p className="mt-5 text-sm font-medium text-gray-500">
                Immersive Animator is a design studio that crafts, interfaces
                and animates solutions for the present and future. Our processes
                and opinions vary with the times, but our motto remains
                constant. We animate to inspire. Our passion for 3D art and
                animation is at the heart of our software development. We
                continue to develop new ways to achieve more realistic,
                life-like animations with less time and effort. <br /> Our goal
                is to make 3D animation accessible to everyone. Whether you are
                a professional animator or just getting started, Immersive
                Animator has the tools you need to create high-quality
                animations quickly and easily. <br /> We believe that animation
                can inspire people and change the world. With Immersive
                Animator, you can bring your ideas to life and share them with
                the world. <br /> We hope you enjoy using our software as much
                as we enjoyed creating it!
              </p>
              <button className="mt-6 text-base bg-yellow-400 hover:bg-yellow-600 font-semibold py-3 px-4 rounded">
                Take Our Services{" "}
                <i className="px-2 pt-1 fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
            <motion.img
              src={"/groundWork.png"}
              alt="groundWork"
              initial={{ x: 3, y: 5 }}
              animate={{ x: 10, y: -5 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
              }}
              className="h-96 a-pulse md:w-[1000px]"
            />
          </div>
        </div>

        {/* <div className="mt-14">
            <h1 className="text-5xl text-center text-yellow-400 font-bold ">
              Our Clients
            </h1>
            <p
              id="servicesSection"
              className="text-center mt-4 text-xl font-semibold text-gray-500"
            >
              We offer our clients guaranteed results within the respective{" "}
              <br /> timeline.
            </p>

            <div className="lg:h-[200px] lg:w-[1000px] h-[100%] flex justify-center lg:flex-row flex-col lg:justify-around gap-8">
              <div className="cursor-move w-[420px] bgMeezan shadow-lg h-[300px] lg:h-auto"></div>

              <div className="cursor-move w-[420px] bgtransFast shadow-lg h-[300px] lg:h-auto">
                {" "}
              </div>

              <div className="cursor-move bgxPress bg-cover w-[420px] shadow-lg h-[300px] lg:h-auto"></div>
            </div>
          </div> */}

        {/* <div className='flex gap-32 mt-[80px] px-28 justify-between place-items-center h-[260px] ' >
          <img src={meezan} alt="meezan" className='filter grayscale hover:grayscale-0 h-20 cursor-move' />
          <img src={transFast} alt="transFast" className='filter grayscale hover:grayscale-0 cursor-move' />
          <img src={xPress} alt="xPress" className='filter grayscale hover:grayscale-0 h-64 cursor-move' />
        </div> */}

        <div className="bgOptimize bg-no-repeat bg-contain mt-20 h-[800px] lg:flex lg:flex-row lg:justify-around lg:place-items-center sm:flex sm:flex-col sm:place-items-center flex flex-col justify-center place-items-center">
          <motion.img
            initial={{ x: 3, y: 5 }}
            animate={{ x: 10, y: -5 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            src={"/optimized.png"}
            alt=""
            className="lg:h-[500px] lg:w-[600px] lg:px-14 lg:py-2 sm:w-[500px] "
          />
          <div className="lg:flex lg:flex-col lg:gap-9 lg:px-48 sm:flex sm:flex-col sm:place-items-center lg:h-auto lg:w-auto lg:place-items-start">
            <div className="lg:w-[120%] ">
              <h1 className="text-white text-4xl font-bold">
                Get Your Site Optimized &{" "}
              </h1>
              <h2 className="text-4xl text-white mt-2">Converting Right Now</h2>
            </div>
            <button className="w-56 bg-yellow-400 px-6 rounded py-3 font-semibold mt-10 text-lg">
              Get A Free Audit &nbsp;{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-24 lg:justify-around lg:flex lg:flex-row place-items-center gap-12">
          <motion.img
            initial={{ x: 3, y: 5 }}
            animate={{ x: 10, y: -5 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            src={"/help.png"}
            alt="help"
            className="lg:max-h-[350px] lg:w-[600px] min-w-[250px] "
          />
          <div className="bgForm bg-contain  rounded-2xl py-10 px-4 md:px-12">
            <h1 className="text-3xl font-semibold text-white">
              Having Any Problem?
            </h1>
            <form className="mt-14 flex flex-col">
              <input
                type="text"
                name=""
                id=""
                className=" bg-transparent border-none outline-none pb-5 text-white placeholder"
                placeholder="Name *"
              />
              <input
                type="text"
                name=""
                id=""
                className="mt-10 bg-transparent border-none outline-none pb-5 text-white  placeholder"
                placeholder="Email *"
              />
              <input
                type="text"
                name=""
                id=""
                className="mt-10 bg-transparent border-none outline-none pb-5 text-white  placeholder"
                placeholder="Subject *"
              />
              <textarea
                type="text"
                name=""
                id=""
                className="mt-10 bg-transparent border-none outline-none pb-5 text-white  placeholder"
                placeholder="Message *"
              />
              <button className="text-lg mt-10 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* <div className="wave bg-contain h-52 w-full"></div> */}
      </div>
    </div>
  );
};

export default Home;
