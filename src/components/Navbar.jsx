import { Box } from "lucide-react";
import React from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-xl flex prosto-one-regular justify-between">
        <div className="flex gap-2 text-2xl font-bold">
          <Box />
          TabSense
        </div>
        <div>
          <button className="-my-4 button">
            <IoExtensionPuzzleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
