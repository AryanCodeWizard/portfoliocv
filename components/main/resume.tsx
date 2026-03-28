"use client";

import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, DocumentTextIcon, SparklesIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export const Resume = () => {
  const certifications = [
    {
      title: "Master Generative AI & Generative AI tools",
      issuer: "Infosys",
      href: "https://drive.google.com/file/d/1orV7UXeQuuiVkZiZBZf5F2vOIZfPWr0W/view",
    },
    {
      title: "Computer Communications",
      issuer: "Coursera",
      href: "https://drive.google.com/file/d/12cp7Hj07miwnMMuvAloVCb7a5ZNuoWD_/view",
    },
    {
      title: "TCP/IP and Advance Topics",
      issuer: "Infosys",
      href: "https://drive.google.com/file/d/1xSQn9LW2F7vSkwWxD-PFBqzHOZMoJRRf/view",
    },
    {
      title: "The bits and Bytes of Computer Networking",
      issuer: "Google",
      href: "https://drive.google.com/file/d/1fLspDx_NP4FpFcsHqfziYWICYjaAHydz/view",
    },
  ];

  return (
    <section
      id="resume"
      className="relative flex flex-col items-center justify-center py-24 px-5 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-5 py-2 backdrop-blur-md">
            <SparklesIcon className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-200">Resume PDF</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Preview my actual resume directly here and download it in one click.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-3 md:p-4"
        >
          <object
            data="/resume.pdf#view=FitH"
            type="application/pdf"
            aria-label="Aryan resume preview"
            className="w-full h-[70vh] rounded-xl bg-slate-950"
          >
            <div className="h-full w-full rounded-xl border border-dashed border-cyan-400/40 bg-slate-950/70 p-6 text-center flex items-center justify-center">
              <div>
                <p className="text-base md:text-lg text-white font-semibold">Resume preview is unavailable.</p>
                <p className="mt-2 text-sm text-gray-300">
                  Add your file at <span className="font-semibold text-cyan-300">public/resume.pdf</span> and refresh this page.
                </p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white font-semibold hover:border-cyan-400/50 transition-colors"
                >
                  Try opening resume.pdf
                </a>
              </div>
            </div>
          </object>
          <p className="text-xs text-gray-400 mt-3 px-2">
            If preview does not load on your browser, use the View or Download buttons below.
          </p>
        </motion.div>

        <div className="mt-8 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-slate-900/70 to-slate-800/70 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <DocumentTextIcon className="h-6 w-6 text-cyan-400" />
                Resume Actions
              </h3>
              <p className="text-gray-300 mt-2">
                Open in a new tab for full-screen view or download the PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white font-semibold hover:border-cyan-400/50 transition-colors"
              >
                <DocumentTextIcon className="h-5 w-5" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-cyan-950/40 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Certifications</h3>
              <p className="mt-2 text-gray-300">Credential showcase with direct verification links.</p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              {certifications.length}+ Achievements
            </span>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {certifications.map((certificate, index) => (
              <motion.li
                key={certificate.href}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_14px_40px_-18px_rgba(34,211,238,0.65)]"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-500/10 px-2 text-xs font-bold text-cyan-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                        {certificate.issuer}
                      </span>
                    </div>

                    <p className="mt-4 text-base font-semibold leading-snug text-white md:text-lg">
                      {certificate.title}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors group-hover:text-cyan-100">
                      View certificate
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-6 text-sm text-gray-300">
            More certifications will be added continuously as I complete new programs.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
