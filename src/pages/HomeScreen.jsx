import React from "react";

const HomeScreen = () => {

  return (
    <div className="min-h-screen rounded-t-xl flex flex-col lg:flex-row p-4 lg:p-8 lg:pt-28 justify-center text-white lg:gap-32 leading-none poppins">
      <div className="grid grid-cols-1 lg:grid-cols-6 w-full h-auto lg:h-1/2 justify-center items-center">
        {/* Left Content */}
        <div className="lg:col-start-1 lg:col-end-4 font-medium px-8 lg:px-20 text-center lg:text-left">
          <div>
            <div className="text-[28px] lg:text-5xl tracking-wide font-medium dark:text-[#151e2d]">
              <span className="text-[#6daafe]">AI-Powered </span>Tabs,
              <br />
              <span>That Think for You.</span>
            </div>

            <div className="text-sm lg:text-xl tracking-wide font-medium pt-6 pb-10 lg:pt-16 dark:text-[#151e2d]">
              Declutter & Organize your tabs in just{" "}
              <span className="text-[#6daafe] caveat lg:text-2xl">
                One Click.
              </span>
            </div>
          </div>
          <div className="hidden md:flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:order-1 lg:order-none mb-6">
            <button className="hover:scale-110 bg-[#6daafe] text-white md:w-36 lg:w-40 md:p-3 lg:p-4 rounded-lg transition-all duration-300 ease-in-out tracking-tight font-semibold">
              Add Extension
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-full lg:col-span-3 lg:col-end-7 text-4xl font-medium flex justify-center lg:justify-end pr-0 lg:pr-12">
          {/* <img
            src="qwe.gif"
            alt="Demo GIF"
            className="rounded-xl w-5/6 lg:w-full pl-0 lg:pl-20"
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto dark:block hidden"
          >
            <source src="videos/TS_1.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block dark:hidden"
          >
            <source src="videos/TS.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:hidden items-center justify-center lg:justify-start gap-4 mt-8 lg:mt-4 lg:ml-20">
          <button className="hover:scale-110 bg-[#6daafe] text-white w-32 text-sm p-3 rounded-lg transition-all duration-300 ease-in-out tracking-tight font-semibold">
            Add Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
