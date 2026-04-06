import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const active = navLinks.find((link) => link.href === activeSection)?.name ?? "Home";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-7xl z-50 rounded-2xl
        transition-all duration-300
        ${scrolled
          ? "bg-black/90 backdrop-blur-sm/70 backdrop-blur-xl shadow-xl"
          : "bg-black/90 backdrop-blur-sm/50 backdrop-blur-md"}
        border border-white/10
      `}
    >
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="font-bold text-2xl text-white  ">
          Pramod<span className="text-indigo-400">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`
                relative text-sm font-medium transition
                ${active === link.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"}
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:bg-indigo-400
                after:transition-all after:duration-300
                ${active === link.name ? "after:w-full" : "after:w-0"}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 bg-black/90 backdrop-blur-sm/80 backdrop-blur-xl
          flex flex-col items-center justify-center gap-10
          transition-transform duration-300 md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`
              text-3xl font-semibold transition
              ${active === link.name
                ? "text-white"
                : "text-gray-400 hover:text-white"}
            `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
