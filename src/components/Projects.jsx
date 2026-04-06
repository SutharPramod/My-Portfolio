import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

import portfolioImg from "/projects/portfolio.webp";
import ecommerceImg from "/projects/ecommerce.webp";
import jobsphereImg from "/projects/jobsphere.webp";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with React + Vite and Tailwind CSS.",
    github: "https://github.com/SutharPramod/My-Portfolio",
    live: "https://sutharpramod.github.io/My-Portfolio/",
    tech: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "React Icons", "Lucide React","Vite"],
    image: portfolioImg,
  },
  {
    name: "E-Commerce-Website",
    description:"A simple static online store built with HTML, CSS, and JavaScript.",
    github: "https://github.com/SutharPramod/E-Commerce-Website",
    live: "https://sutharpramod.github.io/E-Commerce-Website/",
    tech: ["HTML","CSS","JavaScript"],
    image: ecommerceImg,
  },
  {
    name: "JobSphere-Your-Tech-Job-Board",
    description: "JobSphere is a modern and responsive job board application.",
    github: "https://github.com/SutharPramod/JobSphere-Your-Tech-Job-Board",
    live: "https://sutharpramod.github.io/JobSphere-Your-Tech-Job-Board/",
    tech: ["React", "Lucide React", "Tailwind CSS", "Vite"],
    image: jobsphereImg,
  },
];

export default function Projects({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });

  return (
    <section id="projects" ref={ref} className="py-24 bg-black/90 backdrop-blur-sm text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className={`text-4xl font-bold mb-12 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group flex flex-col justify-between rounded-2xl
                bg-gray-900/80 backdrop-blur-md border border-gray-800
                transition-all duration-500
                hover:border-indigo-500/50 hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Image Container with Overflow Hidden for Zoom */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  // Added 'transition-transform' and 'group-hover:scale-110'
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay that darkens slightly on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack - Refined design */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-md
                        bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                    bg-gray-800 text-gray-200 hover:bg-gray-700 transition-all duration-300 active:scale-95"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                    bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 
                    shadow-lg shadow-indigo-500/20 active:scale-95"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
