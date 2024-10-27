import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
        reservados.
      </p>
      <div className="flex justify-center gap-4 mt-4">
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
      </div>
    </footer>
  );
};

export default Footer;
