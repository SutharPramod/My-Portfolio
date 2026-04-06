import { useEffect, useRef, useState } from "react";
import DeveloperImage from "/Profile.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

export default function Hero({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 bg-black/90 backdrop-blur-sm text-gray-300"
    >
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        {/* Developer Image */}
        <img
          src={DeveloperImage}
          alt="Developer"
          className={`w-100 md:w-120 rounded-xl transition-all duration-300 hover:scale-105

            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        />

        {/* Intro Text */}
        <div
          className={`flex flex-col gap-4 transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Aspiring Web Developer | React.js | JavaScript | Software Engineering
          </h1>

          <p className="leading-relaxed mt-4">
            I am <span className="text-white font-medium">Pramod</span>, a motivated Web Developer
            looking to kickstart my professional career. I specialize in building
            responsive web applications using HTML, CSS, JavaScript, and React.js,
            with a solid foundation in Git and GitHub.
          </p>

          <p className="leading-relaxed">
            Beyond frontend development, I have strong core programming knowledge—
            including control structures and loops—gained through hands-on
            experience with{" "}
            <span className="text-white">C, C++, Python, and Java</span>.
          </p>

          {/* Social Links */}
          <div
            className={`flex gap-4 mt-6 flex-wrap transition-all duration-700 delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <a
              href="https://github.com/SutharPramod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/sutharpramod"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://drive.google.com/file/d/1c85uG8ect6_8u6VCnD_BBCu2hdtoRvDP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
