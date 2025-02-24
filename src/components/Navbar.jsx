import React from "react";

const Navbar = () => {
  return (
    <div className="p-12 tracking-tighter rounded-full">
      <div className=" rounded-xl flex prosto-one-regular justify-between ">
        <div className="flex text-2xl font-bold text-[#6daafe] justify-center items-center gap-2">
          <img src="tabsenselogoimg.png" alt="" className="w-12" />
          <p>
            tab
            <span className="font-medium text-white">sense</span>
          </p>
        </div>
        <button className="hover:scale-110 bg-[#6daafe] text-white w-36 p-2 rounded-lg transition-all duration-300 ease-in-out delay-100 poppins tracking-tight font-semibold">
          Get in touch
        </button>{" "}
      </div>
    </div>
  );
};

export default Navbar;
