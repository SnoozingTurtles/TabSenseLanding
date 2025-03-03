import { motion } from "framer-motion";
import { forwardRef } from "react";

const Demo = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      className="w-full px-6 lg:-mt-24 md:px-16  lg:px-24 h-fit flex flex-col justify-center items-center bg-transparent"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      <div className="text-[28px] lg:text-7xl tracking-wide font-bold text-white text-center lg:pb-16">
        <img
          className="w-screen h-full object-cover"
          src="qwe.gif"
          alt="Demo GIF"
        />
      </div>
    </motion.section>
  );
});

export default Demo;
