
import { motion } from "motion/react";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "BCA Graduate",
    location: "Himachal Pradesh",
    type: "Undergraduate Degree",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Government Senior Secondary School",
    location: "Himachal Pradesh",
    type: "Commerce",
  },
  {
    degree: "Secondary (10th)",
    institution: "Golden Pearls Convent School",
    location: "Himachal Pradesh",
    type: "School Education",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

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
              Education
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Academic
            <span className="text-gray-500"> background.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            My academic journey and foundation in computer applications.
          </p>
        </motion.div>

        {/* Education timeline */}
        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-8">

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative sm:pl-16"
              >

                {/* Timeline icon */}
                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-black text-cyan-400 shadow-lg shadow-cyan-400/10 sm:flex">
                  <GraduationCap size={18} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-8"
                >

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                  <div className="relative">

                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                          {item.type}
                        </span>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-base text-gray-400">
                          {item.institution}
                        </p>
                      </div>

                      {/* Number */}
                      <span className="text-4xl font-bold text-white/5">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-500">

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="text-cyan-400"
                        />
                        {item.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={16}
                          className="text-cyan-400"
                        />
                        Completed
                      </div>

                    </div>

                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

