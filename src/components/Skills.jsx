import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiGit } from "react-icons/si";
import useReveal from "../hooks/useReveal";

export default function Skills({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJs size={40} className="text-yellow-400" />,
    },
    { name: "React.js", icon: <FaReact size={40} className="text-sky-400" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} className="text-cyan-400" />,
    },
    { name: "C++", icon: <SiCplusplus size={40} className="text-blue-600" /> },
    {
      name: "Python",
      icon: <FaPython size={40} className="text-yellow-300" />,
    },
    { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
    { name: "Git", icon: <SiGit size={40} className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-gray-200" /> },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-black/90 backdrop-blur-sm text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold mb-12 transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My <span className="text-indigo-400">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                transitionDelay: visible ? `${i * 100}ms` : "0ms",
              }}
              className={`transition-all duration-700 skills ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* The inner card handles the hover state with constant transition time */}
              <div
                className="flex flex-col items-center gap-3 p-5 rounded-xl
        bg-gray-900/80 backdrop-blur-md border border-gray-800
          transition-all duration-300 ease-in-out
        hover:border-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                {skill.icon}
                <span className="text-sm font-medium tracking-wide">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
