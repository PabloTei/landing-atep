import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SlNote } from "react-icons/sl";

const servicesData = [
  {
    name: "Installation",
    icon: <FaCameraRetro className="text-4xl" />,
    description:
      "SAP installation experts for an efficient and hassle-free implementation. Your system will be ready ready to operate with our specialized service.",
    aosDelay: "0",
  },
  {
    name: "Support",
    icon: <FaCameraRetro className="text-4xl" />,
    description:
      "Support Service: We offer specialized technical assistance to guarantee the optimal functioning of your SAP system. Our team of experts is ready to solve your problems and provide fast and efficient solutions.",
    aosDelay: "300",
  },
  {
    name: "Maintenance",
    icon: <SlNote className="text-4xl" />,
    description:
      "SAP Maintenance: Our maintenance service ensures the continuity and efficiency of your SAP system. We carry out periodic updates, corrections and optimizations to guarantee optimal performance and minimize possible problems.",
    aosDelay: "500",
  },
  {
    name: "Training",
    icon: <SlNote className="text-4xl" />,
    description:
      "SAP Training: Boost your team's performance with our specialized SAP trainings. We offer programs tailored to your needs, providing key knowledge to maximize your efficiency and make the most of SAP capabilities in your business environment.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12 text-center space-y-3">
            <h1 className="text-3xl font-semibold ">Explore Our Services</h1>
            <p>
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {servicesData.map((skill) => (
              <div key={skill.name} className="card space-y-3 sm:space-y-4 p-4">
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="flex md:justify-center justify-start">
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit my-12">
              More information <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
