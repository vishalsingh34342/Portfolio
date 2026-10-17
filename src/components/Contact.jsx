import { motion } from "motion/react";
import { Mail, Send, ArrowUpRight } from "lucide-react";

function Contact() {
  const email = "jashanchoudhary430@gmail.com";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <span className="h-px w-10 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-cyan-400"> great.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I'm open to frontend and full-stack opportunities. Have a job
            opportunity or project in mind? Let's connect.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative grid gap-10 md:grid-cols-2">
            {/* Left Side */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Get in touch
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Have an opportunity?
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-400">
                Recruiters, developers and potential collaborators are welcome
                to reach out. You can email me directly using the link below.
              </p>

              {/* Direct Email */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ x: 5 }}
                className="mt-8 flex w-fit items-center gap-3 text-gray-300 transition hover:text-cyan-400"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email me directly</p>

                  <span className="break-all text-sm sm:text-base">
                    {email}
                  </span>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="mt-8 flex gap-3">
                <motion.a
                  href="https://github.com/vishalsingh34342"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xs font-bold text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  GH
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/vishal-singh-52879932/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xs font-bold text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  in
                </motion.a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-7">
              <form
                action={`https://formsubmit.co/${email}`}
                method="POST"
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact"
                />

                <input type="hidden" name="_template" value="table" />

                <input type="hidden" name="_captcha" value="true" />

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your opportunity..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
                >
                  Send Message
                  <Send size={16} />
                </motion.button>
              </form>

              <p className="mt-4 text-xs leading-5 text-gray-500">
                Prefer email? Click my email address to contact me directly
                through your email app.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-600 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} Vishal Singh. All rights reserved.</p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-cyan-400"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
