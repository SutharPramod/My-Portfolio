import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">
            Pramod<span className="text-indigo-400">.</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Aspiring Web Developer | React & JavaScript
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/SutharPramod"
            target="_blank"
            className="hover:text-white transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sutharpramod"
            target="_blank"
            className="hover:text-white transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Pramod. All rights reserved.
      </div>
    </footer>
  );
}
