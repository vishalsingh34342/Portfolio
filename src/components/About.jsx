import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Building things for the web.
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I'm Vishal Singh, a BCA graduate and developer focused on
              building modern web applications with clean UI and practical
              functionality.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I work mainly with React.js on the frontend and Node.js,
              Express.js and MongoDB on the backend. I enjoy turning ideas
              into responsive and interactive products.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Currently, I'm exploring advanced backend development,
              Docker, Redis, Generative AI and modern web technologies.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-3xl font-bold text-cyan-400">3+</p>
                <p className="mt-2 text-sm text-gray-400">
                  Major Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-3xl font-bold text-cyan-400">MERN</p>
                <p className="mt-2 text-sm text-gray-400">
                  Full Stack
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-3xl font-bold text-cyan-400">React</p>
                <p className="mt-2 text-sm text-gray-400">
                  Frontend
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-3xl font-bold text-cyan-400">AI</p>
                <p className="mt-2 text-sm text-gray-400">
                  Exploring
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;