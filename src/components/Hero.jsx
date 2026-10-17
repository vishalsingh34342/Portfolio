import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Vishal
            <span className="text-cyan-400"> Singh</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend / MERN Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I build modern, responsive and interactive web applications
            using React, Node.js, Express.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Vishal-Singh-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </motion.a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">

            <motion.a
              href="https://github.com/vishalsingh34342"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
            >
              GH
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vishal-singh-52879932/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
            >
              in
            </motion.a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Temporary 3D Placeholder */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-64 w-64 items-center justify-center rounded-3xl border border-cyan-400/20 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm sm:h-80 sm:w-80"
          >
            <div className="text-center">
              <div className="text-6xl">⚡</div>

              <p className="mt-4 text-sm tracking-widest text-gray-400">
                BUILD • CREATE • SHIP
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}

export default Hero;