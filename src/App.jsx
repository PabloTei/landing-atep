import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TextParallaxContentExample from "./components/Prueba";

const BackgroundPattern = () => (
  <div className="fixed inset-0 -z-10">
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-700 antialiased">
      <BackgroundPattern />
      <div className="scroll-smooth">
        <Header />
        <TextParallaxContentExample />
        {/* <div className="my-10 mx-auto h-[1px] w-3/4 bg-gray-200"></div> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
