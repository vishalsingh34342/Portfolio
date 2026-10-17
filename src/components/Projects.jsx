import { motion } from "motion/react";

const projects = [
  // =========================
  // MERN / FULL STACK
  // =========================
  {
    title: "Eventzo",
    category: "MERN / Full Stack",
    description:
      "A full-stack event booking platform with authentication, role-based access, event management, bookings and admin functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://event-zo.vercel.app/",
    github: "https://github.com/vishalsingh34342/eventZo.git",
  },

  {
    title: "BeatFlow",
    category: "MERN / Full Stack",
    description:
      "A music streaming platform with user and artist roles, music uploads, playlists, likes, search and an artist dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://beat-flow-vjyb.vercel.app/",
    github: "https://github.com/vishalsingh34342/BeatFlow.git",
  },

  {
    title: "BePremium",
    category: "MERN / Full Stack",
    description:
      "A responsive e-commerce application with product listings, cart functionality, authentication and modern user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://be-premium-ecommerce-w4st.vercel.app/",
    github:
      "https://github.com/vishalsingh34342/BePremium-ecommerce.git",
  },

  // =========================
  // FRONTEND
  // =========================
  {
    title: "Movie Hub",
    category: "Frontend",
    description:
      "A movie discovery application that uses a movie API to display latest and popular movies with a modern responsive interface.",
    tech: ["React", "Tailwind CSS", "Movie API"],
    live: "https://movie-hub-mauve-five.vercel.app/",
    github: "https://github.com/vishalsingh34342/movieHub.git",
  },

  {
    title: "Task Flow",
    category: "Frontend",
    description:
      "A responsive task management application for creating and managing daily tasks with a clean and interactive interface.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://task-flow-app-iz9e.vercel.app/",
    github: "https://github.com/vishalsingh34342/Task-Flow-App.git",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40"
    >
      {/* Project Preview */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/10 via-black to-purple-500/10">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

        {/* Project Name */}
        <motion.h3
          whileHover={{ scale: 1.08 }}
          className="relative z-10 text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-white/20"
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Content */}
      <div className="p-7">

        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 min-h-24 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">

          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Live Demo
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </motion.a>

        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const mernProjects = projects.filter(
    (project) => project.category === "MERN / Full Stack"
  );

  const frontendProjects = projects.filter(
    (project) => project.category === "Frontend"
  );

  return (
    <section
      id="projects"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A collection of full-stack and frontend projects I've built
            while working with modern web technologies.
          </p>
        </motion.div>

        {/* =========================
            MERN PROJECTS
        ========================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold">
              MERN / Full Stack
            </h3>

            <div className="mt-3 h-px w-20 bg-cyan-400" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mernProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =========================
            FRONTEND PROJECTS
        ========================= */}
        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold">
              Frontend
            </h3>

            <div className="mt-3 h-px w-20 bg-cyan-400" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {frontendProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;