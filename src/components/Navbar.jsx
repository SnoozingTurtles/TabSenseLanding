import { Box } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-8 px-16">
      <div className="bg-white rounded-xl p-4 flex prosto-one-regular justify-between items-center">
        <div className="flex gap-2 text-xl font-bold">
          <Box />
          TabSense
        </div>
        <div >
            <ul className="flex gap-12">
                <li>
                    Home
                </li>
                <li>
                    Home
                </li>
                <li>
                    Home
                </li>
            </ul>
        </div>
        <div>
          <button>Add extension</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
