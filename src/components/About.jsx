import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const values = [
  {
    name: "Assistance",
    img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "At ATEP, we understand that in the world of business, timely assistance can make all the difference. Our expert team is here to offer you advice and support at every phase of your project. From initial implementation to ongoing support, we are committed to being your trusted partner, providing the assistance you need to achieve your goals efficiently and effectively.",
  },
  {
    name: "Trust",
    img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Trust is a value that we consider sacred at ATEP. We strive to earn and maintain your trust through honesty, integrity and consistency in our actions. By choosing ATEP, you choose a partner you can trust to deliver reliable solutions and exceptional results. Let's build together a solid relationship based on mutual trust.",
  },
  {
    name: "Excellence",
    img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Excellence is the compass that guides our operations at ATEP. We constantly seek perfection in each project, from strategic planning to detailed execution. Our commitment to excellence is reflected in the quality of our services and our dedication to exceeding your expectations. At ATEP, we believe that excellence is not an occasional achievement, but a constant habit.",
  },
  {
    name: "Professionality",
    img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="py-10 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-center"
            >
              About us
            </motion.h1>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
            >
              <Slider className="bg-gray-50 rounded-xl" {...settings}>
                {values.map((value) => (
                  <div key={value.name} className="my-6">
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl relative">
                      <img
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover rounded-xl"
                        src={value.img}
                        alt={value.name}
                      />
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold">{value.name}</h2>
                        <p className="text-gray-500 text-black/80 xl:pr-40">
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
