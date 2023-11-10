import React from "react";
import "./App.css";
import Routing from "./Routing/Routing";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Index.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col place-items-center overflow-hidden">
        <NavBar />
        <Routing />
      </div>
      <Footer />
      <div className=" bottom-0 left-0 z-[100]  w-full h-16 shadow-2xl flex justify-center font-medium place-items-center bg-yellow-400">
        © Copyright Immersive Animator 2022.
      </div>
    </>
  );
};

export default App;
