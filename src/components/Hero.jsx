import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const Hero = () => {
  return (
    <section id="inicio" className=" py-20">
      <div className="container mx-auto text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-7xl sm:text-8xl font-bold mb-3 bg-gradient-to-r from-neutral-400 to-neutral-900 bg-clip-text tracking-tight text-transparent pb-1.5	"
        >
          ATEP Consulting
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-lg mb-8 italic"
        >
          Transforming your company, enhancing your success in the SAP world
        </motion.p>
        <motion.button
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="rounded bg-neutral-700 px-9 py-4 text-xl mb-14 text-white transition-colors hover:bg-neutral-900 md:w-fit "
        >
          More information <FiArrowUpRight className="inline" />
        </motion.button>
      </div>
      <div className="pb-12 text-center space-y-3">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4 text-neutral-800"
        >
          Our clients
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          Powering next-gen companies
        </motion.p>
        <BrandLogo />
      </div>
    </section>
  );
};

export default Hero;
