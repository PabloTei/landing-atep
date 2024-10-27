import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="flex justify-between items-center mx-auto w-3/4">
        <img
          src="https://res.cloudinary.com/depifliz3/image/upload/v1706638374/ATEP-CONSULTING/1_i0r28w.png"
          className="h-12"
          alt="Company Logo"
        />
        <p className="text-sm">
          &copy; Copyright {new Date().getFullYear()} – ATEP-Consulting.com ®
        </p>
        {/* <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-gray-400"
        >
          Twitter
        </a>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
