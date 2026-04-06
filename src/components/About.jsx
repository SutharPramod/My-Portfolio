import useReveal from "../hooks/useReveal";

export default function About({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black/90 backdrop-blur-sm text-gray-300 py-24"
    >
      <div
        className={`max-w-4xl mx-auto px-6 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-white">
          About <span className="text-indigo-400">Me</span>
        </h2>

        {/* Description */}
        <p className="leading-relaxed mb-6">
          I am <span className="text-white font-medium">Pramod</span>, a motivated
          and detail-oriented Web Developer aiming to start my professional
          journey in software development. I focus on building clean,
          responsive, and user-friendly web applications using modern frontend
          technologies.
        </p>

        <p className="leading-relaxed mb-6">
          I specialize in{" "}
          <span className="text-white">HTML, CSS, JavaScript</span> and{" "}
          <span className="text-white">React.js</span>, with hands-on experience
          in Git and GitHub. I enjoy translating ideas into real-world digital
          experiences.
        </p>

        <p className="leading-relaxed">
          Along with frontend development, I have strong programming
          fundamentals and practical exposure to{" "}
          <span className="text-white">C, C++, Python, and Java</span>.
        </p>
      </div>
    </section>
  );
}
