import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { IMAGES } from "../constants/data.js";

const values = [
  {
    name: "Assistance",
    img: IMAGES.assistance,
    text: "At ATEP, we understand that in the world of business, timely assistance can make all the difference. Our expert team is here to offer you advice and support at every phase of your project. From initial implementation to ongoing support, we are committed to being your trusted partner, providing the assistance you need to achieve your goals efficiently and effectively.",
  },
  {
    name: "Trust",
    img: IMAGES.trust,
    text: "Trust is a value that we consider sacred at ATEP. We strive to earn and maintain your trust through honesty, integrity and consistency in our actions. By choosing ATEP, you choose a partner you can trust to deliver reliable solutions and exceptional results. Let's build together a solid relationship based on mutual trust.",
  },
  {
    name: "Excellence",
    img: IMAGES.excellence,
    text: "Excellence is the compass that guides our operations at ATEP. We constantly seek perfection in each project, from strategic planning to detailed execution. Our commitment to excellence is reflected in the quality of our services and our dedication to exceeding your expectations. At ATEP, we believe that excellence is not an occasional achievement, but a constant habit.",
  },
  {
    name: "Professionality",
    img: IMAGES.professionality,
    text: "At ATEP, professionalism is the backbone of our approach. Our team of highly trained SAP consultants operates with an exceptional standard of professionalism in every interaction. We are proud to offer world-class solutions with a professional and ethical approach. By choosing ATEP, you choose the experience and professionalism necessary to tackle the most complex business challenges with confidence.",
  },
];

const About = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div id="about" className="py-12 sm:grid sm:place-items-center mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold text-center mb-4 text-neutral-800"
            >
              About Us
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-neutral-600 mb-12 max-w-2xl mx-auto text-center"
            >
              <span className="font-bold">ATEP Consulting</span> is your trusted
              partner in navigating complex challenges, offering expert guidance
              and innovative strategies tailored to your business needs. We’re
              here to help you unlock potential and achieve sustainable success.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
            >
              <Slider {...settings}>
                {values.map((value) => (
                  <div key={value.name} className="my-6">
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded relative group">
                      <img
                        className="block mx-auto h-[300px] w-full sm:w-[300px] object-cover rounded filter grayscale group-hover:filter-none transition-all duration-300"
                        src={value.img}
                        alt={value.name}
                      />
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold">{value.name}</h2>
                        <p className="text-neutral-500 text-black/80 xl:pr-40">
                          {value.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
