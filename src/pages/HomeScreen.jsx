import React from "react";

const HomeScreen = () => {
  function handleClick() {
    window.open(
      "https://chromewebstore.google.com/detail/tabsense/pgnhdikopgdnekgcdaabhffbppabbfcn",
      "_blank"
    );
  }

  return (
    <div className=" flex flex-col lg:flex-row items-center px-4 py-12 lg:py-0 lg:px-12 text-white">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:w-1/2 px-6 lg:px-24">
        <h1 className="text-[28px] md:text-4xl lg:text-5xl font-medium tracking-wide dark:text-[#151e2d]">
          <span className="text-[#6daafe]">AI-Powered </span>Tabs,
          <br />
          <span>That Think for You.</span>
        </h1>
        <p className="text-sm md:text-lg lg:text-xl tracking-wide font-medium pt-4 pb-8 lg:pt-6 dark:text-[#151e2d]">
          Declutter & Organize your tabs in just{" "}
          <span className="text-[#6daafe] font-semibold lg:text-2xl">
            One Click.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <button
            className="hover:scale-110 bg-[#6daafe] text-white w-40 p-3 rounded-lg transition-all duration-300 ease-in-out tracking-tight font-semibold"
            onClick={handleClick}
          >
            Add Extension
          </button>
          <div className="fake-cursor hidden lg:block"></div>
          <div className="w-full lg:w-auto justify-center items-center flex space-x-2">
            <img src="/chrome.png" alt="" className="w-6 h-6" />
            <img src="/edge.png" alt="" className="w-6 h-6" />
            <img src="/brave.png" alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Right Video Content */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-2/3 object-cover dark:block hidden rounded-lg"
        >
          <source src="/TSFinalLight.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:w-2/3 object-cover block dark:hidden rounded-lg"
        >
          <source src="/TSFinalDark.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default HomeScreen;
