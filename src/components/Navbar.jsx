import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get the theme preference from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="p-4 md:p-12 tracking-tighter">
      <div className="rounded-xl flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex text-xl md:text-2xl font-bold text-[#6daafe] dark:text-[#151e2d] items-center gap-2">
          <img
            src="tabsenselogoimgalt.webp"
            alt="Logo"
            className="w-8 md:w-10 hidden dark:block"
          />
          <img
            src="tabsenselogoimg.webp"
            alt="Logo"
            className="w-8 md:w-10 block dark:hidden"
          />
          <p>
            tab
            <span className="font-medium text-white dark:text-[#6daafe]">
              sense
            </span>
          </p>
        </div>

        {/* Button */}
        {/* <button className="contactbutton mt-4 md:mt-0 hover:scale-110 bg-[#6daafe] text-white w-32 md:w-36 p-2 rounded-lg transition-all duration-300 ease-in-out poppins tracking-tight font-semibold hidden md:block">
          Get in touch
        </button> */}
        <button
          onClick={toggleTheme}
          className="relative w-[3.8rem] h-7 flex items-center dark:bg-gray-300 bg-[#24334e] rounded-full p-1 cursor-pointer transition-all duration-500"
          aria-label="Toggle Dark Mode"
        >
          <motion.div
            className="w-6 h-6 bg-[#151e2d] dark:bg-white rounded-full flex items-center justify-center shadow-md"
            animate={{ x: isDark ? 28 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isDark ? (
              <Sun className="text-gray-600 outline-none transition-all duration-500 ease-in-out rotate-0 scale-75  " />
            ) : (
              <Moon className="text-white outline-none transition-all duration-500 ease-in-out rotate-0 scale-75  " />
            )}
          </motion.div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
