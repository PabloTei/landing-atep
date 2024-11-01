import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Header from "./Header";
import { IMAGES } from "../constants/data.js";

export const TextParallaxContentExample = () => {
  return (
    <div>
      <TextParallaxContent
        imgUrl={IMAGES.assistance}
        subheading="Assistance"
        heading="Guiding your success."
      >
        <Hero />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={IMAGES.trust}
        subheading="Trust"
        heading="Built on integrity."
      >
        <Services />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={IMAGES.excellence}
        subheading="Excellence"
        heading="Unmatched quality."
      >
        <About />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={IMAGES.professionality}
        subheading="Professionalism"
        heading="Expert advice."
      >
        <Contact />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  topContent,
}) => {
  return (
    <div
    // style={{
    //   paddingLeft: IMG_PADDING,
    //   paddingRight: IMG_PADDING,
    // }}
    >
      <div className="relative">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          topContent={topContent}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, topContent }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      {topContent && <div className="absolute top-0 w-full">{topContent}</div>}
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

export default TextParallaxContentExample;
