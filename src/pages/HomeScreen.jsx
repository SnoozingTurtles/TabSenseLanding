import React from "react";

const HomeScreen = () => {
  return (
    <div className="bg-blue-300 bg-gradient-to-b from-blue-100 to-white rounded-t-xl flex p-12 items-center justify-center">
      <div className="h-fit flex flex-col items-end">
        <div className="h-fit flex gap-8">
          <div className="flex flex-col items-end">
            <h1 className="text-7xl font-medium lg:text-9xl pt-6">ipsum</h1>
            <h1 className="text-7xl font-medium lg:text-9xl pt-6">
              Lorem ipsum
            </h1>
          </div>
          <img src="logo192.png" className="w-80"/>
        </div>
        <div className="">
          <h1 className="text-7xl font-medium lg:text-9xl pt-6">Lorem ipsum</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
