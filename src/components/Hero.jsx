import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className=" py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-600">
          Consultoría SAP Experta
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Impulsando la eficiencia y optimización de tu empresa con soluciones
          SAP.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;
