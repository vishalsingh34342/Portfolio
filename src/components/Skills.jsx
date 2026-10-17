import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  GitBranch,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Modern, responsive and interactive interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "React Router",
      "Tailwind CSS",
      "TypeScript"
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building APIs and server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "API Integration",
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Working with structured application data.",
    skills: [
      "MongoDB",
      "Mongoose",
      "CRUD",
      "Aggregation",
      "Populate",
      "Indexing",
    ],
  },
  {
    title: "Authentication & Security",
    icon: ShieldCheck,
    description: "Secure application access and user roles.",
    skills: [
      "JWT",
      "Cookies",
      "Password Hashing",
      "Protected Routes",
      "RBAC",
      "CORS",
    ],
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    description: "Tools I use to build and ship projects.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Currently Exploring",
    icon: Sparkles,
    description: "Technologies I'm expanding into.",
    skills: [
      
      "Docker",
      "Redis",
      "Generative AI",
      "RAG",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
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
              Skills
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Tools & technologies
            <span className="text-gray-500"> I work with.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A practical stack built around modern frontend development,
            full-stack applications, APIs, databases and production workflows.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30"
              >
                {/* Hover lighting */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-6 text-gray-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;