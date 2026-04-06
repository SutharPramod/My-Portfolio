import useReveal from "../hooks/useReveal";
import { FaGraduationCap } from "react-icons/fa";

export default function Education({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });

  const education = [
  {
    year: "2024 - 2027(Expected)",
    title: "Bachelor of Computer Applications (BCA)",
    institute: "Dolat-Usha Institute of Applied Sciences And Dhiru-Sarla Institute Of Management And Commerce ,VNSGU",
    desc: "Focused on programming fundamentals, data structures, and modern web development.",
  },
  {
    year: "2023 - 2024",
    title: "Higher Secondary (12th) - Commerce",
    institute: "Shree Swaminarayan Vidhyalay",
    desc: "Studied Accountancy, Business Studies, and Economics, with a focus on logical reasoning and Statistics.",
  },
  {
    year: "2021 - 2022",
    title: "Secondary School (10th)",
    institute: "Rastriya Hindi Shikshan Mandal",
    desc: "Built strong foundations in logic, problem-solving, and computing basics.",
  },
];

  return (
    <section id="education" className="py-24 bg-black/90 backdrop-blur-sm text-gray-200">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-14">
          My <span className="text-indigo-400">Education</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-6">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gray-800" />

          <div className="flex flex-col gap-12">
            {education.map((edu, i) => (
              <div
                key={edu.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`relative pl-10
                  transition-all duration-1300
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
              >
                {/* Dot */}
                <div className="absolute -left-1.5 top-1 w-6 h-6 rounded-full
                                bg-black/90 backdrop-blur-sm border border-indigo-500
                                flex items-center justify-center">
                  <FaGraduationCap className="text-indigo-400 text-sm" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-gray-800
                                hover:border-indigo-500 hover:-translate-y-2
                                hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                                 
                                transition-all duration-300">
                  <span className="text-sm text-indigo-400 font-medium">
                    {edu.year}
                  </span>

                  <h3 className="text-xl font-semibold mt-2 text-white">
                    {edu.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {edu.institute}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
