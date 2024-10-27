import React, { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center md:py-4">
        <img
          src="https://res.cloudinary.com/depifliz3/image/upload/v1706638374/ATEP-CONSULTING/1_i0r28w.png"
          className="h-12"
          alt="Company Logo"
        />

        {isMobile ? (
          <DrawerMenu open={drawerOpen} toggleDrawer={toggleDrawer} />
        ) : (
          <nav className="space-x-12">
            <a
              href="#inicio"
              className="hover:text-gray-500 text-xl font-semibold"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-gray-500 text-xl font-semibold"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-gray-500 text-xl font-semibold"
            >
              About us
            </a>
            <a
              href="#contact"
              className="hover:text-gray-500 text-xl font-semibold"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
