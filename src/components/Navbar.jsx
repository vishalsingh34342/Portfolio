import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const newLocal = (
    <a
      href="/Vishal-Singh-Resume.pdf"
      download
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400"
    >
      <Download size={16} />
      Resume
    </a>
  );
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide"
          >
            Vishal<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 md:flex">
            {/* GitHub */}
            <a
              href="https://github.com/vishalsingh34342"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GH
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishal-singh-52879932/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              in
            </a>

            {/* Resume */}
            <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-400">
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#about"
                onClick={closeMenu}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                Contact
              </a>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <a
                  href="https://github.com/vishalsingh34342"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-gray-300"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/in/vishal-singh-52879932/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-gray-300"
                >
                  in
                </a>

                {newLocal}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
