import React from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4 text-neutral-800"
        >
          Contact Us
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 mb-12 max-w-2xl mx-auto"
        >
          If you wish to contact us you can do so through our contact
          information. If you prefer, you can do so by filling out the form. We
          will contact you as soon as possible.
        </motion.p>

        <motion.form
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto space-y-6 bg-neutral-50 p-8 rounded shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder-neutral-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder-neutral-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder-neutral-400"
          />
          <input
            type="text"
            placeholder="Your Company"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder-neutral-400"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all placeholder-neutral-400 h-40 resize-none"
          ></textarea>

          <button className="w-full rounded bg-neutral-700 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-800 my-12">
            Submit <IoIosSend className="inline" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
