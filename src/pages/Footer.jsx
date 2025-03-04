import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Main container */}
      <div className="main">
        {/* Footer section */}
        <div className="footer">
          {/* Bubbles animation */}
          <div className="bubbles">
            {Array.from({ length: 128 }).map((_, i) => (
              <div
                key={i}
                className="bubble"
                style={{
                  "--size": `${2 + Math.random() * 6}rem`,
                  "--distance": `${6 + Math.random() * 4}rem`,
                  "--position": `${-5 + Math.random() * 98}%`,
                  "--time": `${2 + Math.random() * 4}s`,
                  "--delay": `${-(2 + Math.random() * 3)}s`,
                }}
              />
            ))}
          </div>

          {/* Content sections */}
          <div className="content2">
            <div className="text-white text-sm md:text-lg lg:text-2xl text-center tect font-bold prosto-one-regular w-full flex justify-center pb-8 md:pb-0 md:py-8 lg:py-12">
              <p className="text-center md:w-2/3">
                We’d love to hear your thoughts! Share your feedback with us and
                help improve Clustr.
              </p>
            </div>
            <div className="flex items-center justify-between md:px-20 lg:px-32  md:text-sm lg:text-lg text-xs">
              <p className="text-white poppins font-semibold">
                Submit your feedback{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/3NBHeq3irtFBYhLKA"
                  className="text-fuchsia-700 underline font-bold."
                >
                  {" "}
                  here
                </a>
              </p>
              <div className="text-white flex md:gap-4">
                <Instagram className="scale-75 md:scale-100 cursor-pointer transition-all delay-100 hover:scale-125 outline-none hover:text-[#151e2d]" />
                <Twitter className="scale-75 md:scale-100 cursor-pointer transition-all delay-100 hover:scale-125 outline-none hover:text-[#151e2d]" />
                <Linkedin className="scale-75 md:scale-100 cursor-pointer transition-all delay-100 hover:scale-125 outline-none hover:text-[#151e2d]" />
                <Github className="scale-75 md:scale-100 cursor-pointer transition-all delay-100 hover:scale-125 outline-none hover:text-[#151e2d]" />
              </div>
            </div>
          </div>
        </div>

        {/* SVG filter definition */}
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Footer;
