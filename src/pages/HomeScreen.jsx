import React from "react";

const HomeScreen = () => {
  return (
    <div className="h-[80vh] rounded-t-xl flex p-8 justify-center text-[#fff] gap-32 leading-none poppins ">
      <div class="grid grid-cols-6 w-full h-1/2 py-0 justify-center items-center">
        <div class="col-start-1 col-end-4  font-medium px-20">
          <div class=" text-5xl tracking-wide text-wrap font-medium ">
            <span className="text-[#6daafe] text-5xl ">AI-Powered {"  "} </span>{" "}
            Tabs, <br />
            <span className="text-justify">That Think for You.</span>
            {/* your browsing with{" "}
            <span className="text-[#6daafe] font-bold"> AI.</span> */}
          </div>

          <div class="text-xl tracking-wide font-medium pt-16 justify-start items-start leading-0">
            Declutter & Organize your tabs in just{" "}
            <span className="text-[#6daafe] caveat text-2xl">One Click. </span>
            <div class="fake-cursor"></div>
          </div>
        </div>
        <div class="col-span-3 col-end-7 text-4xl font-medium  pr-12">
          <img src="qwe.gif" alt="" className="rounded-xl w-5/6 pl-20" />
        </div>
        <button className="bg-transparent border-2 border-[#464b54] mt-4 text-[#464b54] hover:text-[#6daafe] hover:border-[#6daafe] w-36 p-4 rounded-lg transition-all duration-300 ease-in-out delay-100 tracking-tight font-semibold ml-20">
          Watch Demo
        </button>{" "}
        <button className="hover:scale-110 mt-4 bg-[#6daafe] text-white w-36 p-4 rounded-lg transition-all duration-300 ease-in-out delay-100  tracking-tight font-semibold">
          Add Extension
        </button>{" "}
      </div>
    </div>
  );
};

export default HomeScreen;
