import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 md:p-12 tracking-tighter">
      <div className="rounded-xl flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex text-xl md:text-2xl font-bold text-[#6daafe] items-center gap-2">
          <img src="tabsenselogoimg.png" alt="Logo" className="w-8 md:w-10" />
          <p>
            tab<span className="font-medium text-white">sense</span>
          </p>
        </div>

        {/* Button */}
        {/* <button className="contactbutton mt-4 md:mt-0 hover:scale-110 bg-[#6daafe] text-white w-32 md:w-36 p-2 rounded-lg transition-all duration-300 ease-in-out poppins tracking-tight font-semibold hidden md:block">
          Get in touch
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
