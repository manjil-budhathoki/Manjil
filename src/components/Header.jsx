import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

// Images (adjust paths to match your project)
import eyeOpen from "../assets/eye-open.png";       // light mode icon
import eyeClosed from "../assets/eye-close.png";   // dark mode icon
import profileHover from "../assets/manjil.png"; // larger hover image

export default function Header() {
  const [dark, setDark] = useState(false);
  const [ping, setPing] = useState(false); // ripple on toggle

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // Apply theme + persist
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleToggle = () => {
    setDark((v) => !v);
    setPing(true);
    setTimeout(() => setPing(false), 350);
  };

  return (
    <header className="max-w-5xl mx-auto px-4 pt-8 pb-6 relative">
      {/* Row 1: Name (hover photo floats) + right icons */}
      <div className="flex items-start relative">
        {/* Name + floating photo on hover */}
        <div className="group relative">
          <h1 className="text-lg font-semibold cursor-pointer select-none relative z-10">
            Hi, I&apos;m Manjil Budhathoki
          </h1>

          {/* Floating hover photo */}
          <div
            className="absolute top-full mt-3 left-0 h-32 w-32 rounded-md overflow-hidden border border-black/10 dark:border-white/10
                       bg-white/70 dark:bg-neutral-900/70 backdrop-blur shadow-lg z-50
                       opacity-0 scale-95 translate-y-2
                       group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                       transition-all duration-300 ease-out pointer-events-none"
          >
            <img
              src={profileHover}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        <div className="flex-1" />

        {/* Right side icons + theme toggle */}
        <nav className="flex items-center gap-3 relative z-10">
          {/* GitHub */}
          <a
            href="https://github.com/manjilbudhathoki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>

          {/* Nepal flag */}
          <span className="text-lg cursor-pointer" role="img" aria-label="Nepal Flag" title="Nepal">
            🇳🇵
          </span>

          {/* Theme toggle with photo icons */}
          <button
            aria-label="Toggle theme"
            title="Toggle theme"
            onClick={handleToggle}
            className="relative h-9 w-9 rounded-full overflow-hidden border border-black/10 dark:border-white/10
                       bg-white/70 dark:bg-neutral-900/70 backdrop-blur
                       transition-all duration-200 ease-out
                       hover:scale-[1.03] active:scale-95 hover:shadow-md
                       cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            {ping && (
              <span className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/25 animate-ping" />
            )}
            <img
              src={eyeOpen}
              alt="Light mode"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                dark ? "opacity-0" : "opacity-100"
              }`}
              draggable={false}
            />
            <img
              src={eyeClosed}
              alt="Dark mode"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                dark ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          </button>
        </nav>
      </div>

      {/* Row 2: Intro text */}
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 max-w-prose relative z-10">
        Software Engineer based in Germany, 20 years old with a passion for open
        source. Self proclaimed 10x engineer currently working on{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">Rivo</span> and{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">Would You Bot</span>.
      </p>

      {/* Row 3: Social icons */}
      <div className="flex items-center gap-2 mt-3 text-neutral-600 dark:text-neutral-300 relative z-10">
        {[
          { icon: <SiHuggingface className="text-lg" />, label: "Hugging Face", href: "https://huggingface.co/" },
          { icon: <FaLinkedin className="text-lg" />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
          { icon: <FaTwitter className="text-lg" />, label: "Twitter/X", href: "https://twitter.com/yourprofile" },
        ].map(({ icon, label, href }, idx) => (
          <a
            key={idx}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-8 h-8 rounded-md
                       hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors"
          >
            {icon}
            <span
              className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
                         whitespace-nowrap rounded-md px-2 py-1 text-[11px]
                         bg-black/80 text-white dark:bg-white/90 dark:text-black
                         opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-150 shadow"
              role="tooltip"
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
}
