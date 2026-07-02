"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { useState } from "react";




const projects = [




  {
    title: "Dream Makers Mortgage",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/Dream makers.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },


  {
    title: "AKMG Global",
    description:
      "Healthcare organization website with membership portal, events and directory.",
    image: "/AKMG.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Company",
  },

  {
    title: "Kanchi Technologies",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/kt2i.jpg",
    url: "https://www.figma.com/proto/0QJlCkPlTafh5l4Wo3yOJU/KT2i-Home-Orange-Salmon?node-id=445-2&t=QHJM1CNF5TNg3Vyr-1",
    category: "Freelance",
  },


  {
    title: "Sienna Malayali Community",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/Sienna.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },

  {
    title: "German Cars",
    description:
      "Premium event management website with modern UI and booking system.",
    image: "/Germancars.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },


  {
    title: "Malayalee Association of Greater Houston",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/magh.jpg",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },

  {
    title: "Hyundai chatbot",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/hyudai chatbot.jpg",
    url: "https://www.figma.com/proto/Q6DJ8x7jjyu4avaoUUggYy/hyundaimobisin?node-id=1-2&t=WlyKtkxWzO58C1UD-1",
    category: "Company",
  },

  {
    title: "Chatbot Landing Page",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/engineering.jpg",
    url: "https://www.figma.com/proto/b6rAaTeTuVaU9xY46vDlTH/Engineering-Aide-Web?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=Uj98kKwKbsWX1eUF-1",
    category: "Company",
  },

  {
    title: "Digital Marketing Company",
    description:
      "Community website with events, memberships, vendor directory and gallery.",
    image: "/sparkfit.jpg",
    url: "https://sparkfitagency.com/",
    category: "Freelance",
  },

  {
    title: "Nothing X App",
    description:
      "Nothing X App Design Concept",
    image: "/apecxo.jpg",
    url: "https://www.figma.com/proto/tfbHZIVLOe6TQsYzAA7lHD/Nothing-X?node-id=3-114&t=I8bBSKUlePmEvW6t-1",
    category: "Freelance",
  },

  {
    title: "Apexco Global",
    description:
      "Nothing X App Design Concept",
    image: "/Nothing.png",
    url: "https://www.figma.com/proto/V31zaqta7GBbD3Zz5nEHPW/Apexco-Global-Energy-Products?node-id=1-53&t=MbpzCQZ877bIjsR0-1",
    category: "Freelance",
  },


  {
    title: "Lexus Website Concept",
    description:
      "Lexus Design Concept",
    image: "/Lexus.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },

  {
    title: "Zee Tee Events",
    description:
      "Premium event management website with modern UI and booking system.",
    image: "/Zee tee.png",
    url: "https://ebenezer-projects.vercel.app/",
    category: "Freelance",
  },





];

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 5);
  return (




    <main className="relative min-h-screen overflow-hidden bg-[#08130F] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-[170px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20">


        <div className="relative mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-20 lg:flex-row">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex-1"
          >

            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-sm tracking-[0.25em] text-emerald-300">
              UI/UX Designer & Developer
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-7xl">
              Ebenezer&nbsp;
              <span className="text-white/40">
                C Lalu
              </span>
            </h1>

            <div className="mt-8 h-[2px] w-32 bg-gradient-to-r from-emerald-400 to-transparent" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
              Creating premium digital products through
              <span className="font-semibold text-emerald-400">
                {" "}UI/UX Design
              </span>,
              modern web development, and interactive user experiences.

              With over
              <span className="font-semibold text-emerald-400"> 3+ years </span>
              of experience and
              <span className="font-semibold text-emerald-400"> 50+ successful projects </span>
              delivered across various industries, I build elegant digital products that combine creativity, usability, and performance.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="inline-flex rounded-full bg-emerald-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Explore Projects
              </a>

              <a
                href="/Ebenezer C Lalu Resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Download Resume
              </a>

            </div>

            {/* <div className="mt-16 flex items-center justify-between gap-4">

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  3+
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Years Experience
                </p>
              </div>

              <div className="h-10 w-px bg-white/10 sm:h-14" />

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  50+
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-white/10 sm:h-14" />

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  100%
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Clients
                </p>
              </div>

            </div> */}

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex-1 flex justify-center"
          >

            {/* Main Card */}

            <div className="relative w-[430px] rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-emerald-500 blur-3xl opacity-40" />

              <img
                src="/Ebenezer 1.png"
                alt=""
                className="mx-auto h-[420px] w-full rounded-3xl object-cover"
              />

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Ebenezer C Lalu
                  </h3>

                  <p className="text-gray-400">
                    UI/UX Designer & Developer
                  </p>

                </div>

                <div className="rounded-xl bg-emerald-500 px-4 py-2 text-black font-semibold">
                  Available
                </div>

              </div>

            </div>



            {/* Border */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear"
              }}
              className="absolute h-[560px] w-[560px] rounded-full border border-dashed border-emerald-500/20"
            />

          </motion.div>

        </div>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="relative overflow-hidden py-15"
      ><div className="relative mx-auto w-[92%] max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="mb-20 text-center"
          >
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm tracking-[0.2em] text-emerald-300">
              MY PROJECTS
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Featured Work
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Selected projects designed and developed for companies,
              startups and freelance clients.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects
              .slice(0, showAll ? projects.length : 5)
              .map((project, index) => (
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="group block"
                >
                  {/* Browser Window */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101916] shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 group-hover:border-emerald-500/40">

                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0b1311] px-6 py-4">

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      </div>

                      <div className="rounded-full bg-white/5 px-6 py-2 text-sm text-gray-400">
                        {project.url.replace("https://", "")}
                      </div>

                      <div className="text-emerald-400  text-sm font-medium">
                        <ArrowUpRight size={18} strokeWidth={2.2} id="Live" />
                      </div>

                    </div>

                    {/* Screenshot */}

                    <div className="overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full transition duration-700 group-hover:scale-105"
                      />
                    </div>

                  </div>

                  {/* Bottom Content */}
                  <div className="mt-8 border-t border-white/10 pt-8">

                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                      {/* Left Content */}
                      <div>

                        <div className="mb-4 flex items-center gap-3">

                          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
                            {project.category}
                          </span>

                        </div>

                        <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400">
                          {project.description}
                        </p>

                      </div>

                      {/* Right Link */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-medium text-white transition-all duration-300 hover:gap-3 hover:text-emerald-400"
                      >
                        Visit Website
                        <ArrowUpRight size={18} strokeWidth={2.2} />
                      </a>

                    </div>

                  </div>


                </motion.a>
              ))}
          </div>

          {projects.length > 5 && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group rounded-full border border-emerald-500/30 bg-emerald-500/10 px-8 py-4 text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black"
              >
                {showAll ? "Show Less" : "View All Projects"}
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}