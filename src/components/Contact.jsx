
import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Contact({ onVisible }) {
  const [ref, visible] = useReveal((isVisible) => {
    if (isVisible && onVisible) onVisible();
  });
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();
    const email = "your.email@example.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-black/90 backdrop-blur-sm text-white"
    >
      <div
        className={`max-w-6xl mx-auto px-6
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white">
              GET IN <span className="text-indigo-400">TOUCH</span>
            </h2>
            <p className="text-xl font-sans text-gray-300">
              Let's connect and discuss opportunities
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <p className="text-lg font-sans mb-2">Email :</p>
              <a
                href="mailto:pramod01010107@gmail.com"
                onClick={handleEmailClick}
                className="text-2xl md:text-3xl font-sans hover:no-underline transition-all duration-300 text-indigo-400 hover:text-indigo-300 cursor-pointer"
              >
                pramod01010107@gmail.com
              </a>
              {copied && (
                <div className="mt-2 text-sm text-green-400 bg-green-900/20 ml-5 px-3 py-1 rounded-xl inline">
                  Email copied!
                </div>
              )}
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
}
