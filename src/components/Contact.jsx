import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-700">Contáctanos</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border rounded-lg h-32"
          ></textarea>
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
