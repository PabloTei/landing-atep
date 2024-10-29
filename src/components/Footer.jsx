import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-neutral-100">
      <div className="flex flex-col items-center justify-between mx-auto w-3/4 sm:flex-row sm:items-center gap-4">
        <img
          src="https://res.cloudinary.com/depifliz3/image/upload/v1706638374/ATEP-CONSULTING/1_i0r28w.png"
          className="h-12"
          alt="Company Logo"
        />
        <p className="text-sm text-center">
          &copy; Copyright {new Date().getFullYear()} – ATEP-Consulting.com ®
        </p>
      </div>
    </footer>
  );
};

export default Footer;
