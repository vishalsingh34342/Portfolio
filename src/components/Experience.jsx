
import { motion } from "motion/react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Where I've
            <span className="text-gray-500"> worked.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Practical experience gained through professional web development
            work and real-world projects.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent sm:block" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-black text-cyan-400 shadow-lg shadow-cyan-400/10 sm:flex">
              <Briefcase size={18} />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-9"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative">

                {/* Top */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                      Web Development Intern
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      Excellence Technology
                    </h3>
                  </div>

                
                </div>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-400" />
                    Dharamshala
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-cyan-400" />
                    Internship
                  </div>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-white/10" />

                {/* Responsibilities */}
                <div className="space-y-4">
                  <p className="text-sm leading-7 text-gray-400">
                    Worked on web development tasks and gained practical
                    experience building responsive and user-focused web
                    interfaces.
                  </p>

                  <ul className="space-y-3 text-sm leading-7 text-gray-400">
                    <li className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      Worked with HTML, CSS, JavaScript and React.js for
                      frontend development.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      Built responsive interfaces and reusable UI components
                      for web applications.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      Worked with Git and GitHub as part of the development
                      workflow.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      Gained practical exposure to real-world web development
                      and project workflows.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Bottom animated line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
