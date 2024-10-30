import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  MdInstallDesktop,
  MdSupportAgent,
  MdModelTraining,
} from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { motion } from "framer-motion";

const servicesData = [
  {
    name: "Installation",
    icon: <MdInstallDesktop className="text-5xl" />,
    description:
      "SAP installation experts for an efficient and hassle-free implementation. Your system will be ready ready to operate with our specialized service.",
    aosDelay: "0",
  },
  {
    name: "Support",
    icon: <MdSupportAgent className="text-5xl" />,
    description:
      "Support Service: We offer specialized technical assistance to guarantee the optimal functioning of your SAP system. Our team of experts is ready to solve your problems and provide fast and efficient solutions.",
    aosDelay: "300",
  },
  {
    name: "Maintenance",
    icon: <GrVmMaintenance className="text-5xl" />,
    description:
      "SAP Maintenance: Our maintenance service ensures the continuity and efficiency of your SAP system. We carry out periodic updates, corrections and optimizations to guarantee optimal performance and minimize possible problems.",
    aosDelay: "500",
  },
  {
    name: "Training",
    icon: <MdModelTraining className="text-5xl" />,
    description:
      "SAP Training: Boost your team's performance with our specialized SAP trainings. We offer programs tailored to your needs, providing key knowledge to maximize your efficiency and make the most of SAP capabilities in your business environment.",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      <div id="services" className="py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12 text-center space-y-3">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold mb-4 text-neutral-800"
            >
              Explore Our Services
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              We are self-service data analytics software that lets you create
              visually.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {servicesData.map((skill) => (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                key={skill.name}
                className="card space-y-3 sm:space-y-4 p-4 bg-neutral-50 rounded hover:shadow-md transition-shadow duration-300"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-neutral-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <button className="rounded bg-neutral-700 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-800 md:w-fit my-12">
              More information <FiArrowUpRight className="inline" />
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
