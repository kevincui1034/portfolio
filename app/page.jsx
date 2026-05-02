"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Social from "@/components/Social";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const technologies = [
  { name: "Python", image: "/python.svg" },
  { name: "MySQL", image: "/mysql.svg" },
  { name: "R", image: "/RStudio.svg" },
  { name: "Git", image: "/git-icon.svg" },
  { name: "TensorFlow", image: "/tensorflow-icon.svg" },
  { name: "PyTorch", image: "/pytorch-icon.svg" },
  { name: "Scikit-learn", image: "/scikit_learn-icon.svg" },
  { name: "Bash", image: "/gnu-bash.svg" },
  { name: "React", image: "/reactjs-icon.svg" },
  { name: "NextJS", image: "/nextjs-icon.svg" },
  { name: "NodeJS", image: "/nodejs-icon.svg" },
  { name: "TailwindCSS", image: "/tailwindcss-icon.svg" },
];

const experiences = [
  {
    role: "Full-Stack Software Engineering Intern",
    company: "VTN Manufacturing, Inc.",
    period: "May – Aug 2025",
    location: "San Jose, CA",
    bullets: [
      "Designed and developed a full-stack performance analytics dashboard from the ground up for CNC machining using React, Node.js, Express, and PostgreSQL to track runtime, downtime, defects, and performance from machine-generated JSON files",
      "Built a data ingestion pipeline to migrate 5+ years of historical data, processing machine-generated logs into structured records",
      "Reduced data inconsistency using the ingestion pipeline, improving reporting accuracy and reducing revenue leaks by ~10%",
      "Decreased data reporting time by approximately 6 hours per week through real-time dashboard insights",
    ],
  },
];

const projects = [
  {
    title: "Tutor Me",
    period: "Apr 2026",
    description:
      "Browser-based social AI-powered classroom where learners move in a 3D space with others, talk to persona-based tutors that can be shared or duplicated, and join the same live room using a room code. Built with React + Next.js, Three.js for 3D interactions, and VAPI + ElevenLabs for voice. Agent flows use reinforcement learning with Redis for memory and caching.",
    href: "https://tutor-me-tau.vercel.app",
    image: "/tutorme.png",
    tags: ["Next.js", "React", "Three.js", "VAPI", "ElevenLabs", "Redis"],
  },
  {
    title: "AdLabs",
    period: "Apr 2026",
    description:
      "GTM Hackathon finalist — AI marketing platform for discovering short-form trends, turning them into on-brand scripts, and generating AI videos/images with usage analytics. Apify scrapes TikTok, Instagram Reels, and YouTube Shorts metadata; data is cached in Supabase for sub-100 ms loads. Post-hackathon rebuild with Auth.js reduced infrastructure costs by ~90%.",
    href: "https://adlabs.vercel.app",
    image: "/adlabs.png",
    tags: ["Next.js", "React", "Auth.js", "Apify", "Supabase", "Seedance", "Tailwind"],
  },
  {
    title: "MiniMed",
    period: "Apr 2026",
    description:
      "Full-stack web app (Next.js, React, Tailwind) that offers non-professional medical guidance and interprets medical terminology in plain language for patients unfamiliar with clinical terms. Integrated ElevenLabs for voice transcription and optional TTS, wiring multipart and JSON flows through Next.js App Routes. MiniMax powers creates selectable prompts for the user to choose from.",
    href: "https://mini-med.vercel.app",
    image: "/minimed.jpg",
    tags: ["Next.js", "React", "Tailwind", "ElevenLabs", "MiniMax"],
  },
  {
    title: "Next Boba",
    period: "Jan – Mar 2026",
    description:
      "Full-stack web app with a Next.js/React/Tailwind frontend and a FastAPI backend connected to Supabase. Fine-tuned a sentiment analysis model on 6M+ Yelp reviews for bubble tea businesses. PostgreSQL data model with sentiment scores, labels, and indexes reduced load times to under 200 ms. Frontend on Vercel, backend on Railway.",
    href: "https://nextboba.vercel.app",
    image: "/nextboba.jpg",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "Vercel", "Railway", "shadcn/ui", "Tailwind"],
  },
  {
    title: "Pokemon Moveset Predictor",
    period: "Jan – May 2025",
    description:
      "Dash + Flask web app on Google Cloud, built in a 2-person team. Python pipelines scraped and processed 100+ competitive battle files spanning 10+ years. Random Forest model recommends movesets with ~70% accuracy, with Seaborn visualizations for outcome trends.",
    href: "https://pokemon-recommendation.vercel.app",
    image: "/pokemon.png",
    tags: ["Python", "Scikit-learn", "GCP", "Dash", "Flask", "Seaborn"],
  },
  {
    title: "Money Maestro",
    description:
      "Cloud-hosted finance tracking app (Flask + Dash) built in a 2-person team. User auth and persistent data in Google Cloud Storage, real-time Plotly dashboards, and exception handling for stable runtime.",
    href: "https://github.com/CCLDArjun/personal-budgeting-app",
    tags: ["Python", "Dash", "Flask", "Seaborn", "GCP", "Plotly"],
  },
  {
    title: "SkipBeatTi",
    description:
      "Full-stack music streaming web app built by a 5-person team with React and Vite. Clerk for auth and OAuth; Spotify API for playback; MySQL for user data and song comments. Fully functional with persistent storage and user interaction.",
    href: "https://github.com/MrPicklesBush/SkipBeatTi",
    tags: ["React", "Vite", "Typescript", "MySQL", "TailwindCSS", "Clerk", "Spotify API", "shadcn/ui"],
  },
];

// Title and intro
const HomePage = () => {
  return (
    <>
      <section id="home" className="min-h-screen flex xl:flex-col justify-center">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8 xl:pt-0 xl:pb-4">
            <div className="text-center xl:text-left order-2 xl:order-1">
              <span className="text-[16px] text-accent uppercase tracking-[2px]">Based in San Jose</span>
              <h1 className="h1 mb-6 text-7xl font-bold">
                Kevin Cui<br /> <span className="text-accent"> Data Engineer</span>
              </h1>
              <p className="text-md max-w-[900px] mb-9 text-white/80 mx-auto xl:mx-0">
                I'm a data engineer with a focus on full-stack development with AI/ML integration!
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="md" asChild className="uppercase flex items-center gap-2 text-accent">
                  <a href="/kevincui_resume_swe.pdf" download="kevincui_resume_swe.pdf">
                    Download CV
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-4"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-2 flex-shrink-0">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src="/headshot.png"
                  alt="Kevin Cui"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 320px, (max-width: 1280px) 384px, 448px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        className="py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">
            Current Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="border-white/10 bg-white/5 text-white hover:border-accent/50 transition-colors">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center ${tech.iconBg ?? "bg-white/10"}`}>
                      <img
                        src={tech.image}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="font-medium text-base truncate">{tech.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">Experience</h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Card className="border-white/10 bg-white/5 text-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <p className="text-accent text-sm">{exp.company} &mdash; {exp.location}</p>
                      </div>
                      <span className="text-white/50 text-sm shrink-0">{exp.period}</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-white/80 leading-relaxed flex items-baseline gap-2">
                          <span className="text-accent shrink-0">&#8226;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">
            Projects
          </h2>
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link href={project.href} className="block">
                  <Card className={`border-white/10 bg-white/5 text-white hover:border-accent/50 transition-colors ${project.image ? "overflow-hidden" : ""}`}>
                    {project.image ? (
                      <div className="relative aspect-video w-full bg-black/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ) : null}
                    <CardContent className="p-5 flex flex-col gap-3">
                      <div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        {"period" in project && project.period ? (
                          <p className="text-xs text-white/50 mt-1">{project.period}</p>
                        ) : null}
                      </div>
                      <p className="text-sm text-white/80 pb-2 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/90">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="py-48"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto text-center pb-16">
          <h2 className="text-4xl font-bold mb-4 text-accent">
            Let's get in touch!
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            Please don't hesitate to reach out via the links below or send me an email!
          </p>
          <Social
            containerStyles="flex justify-center gap-4 mb-8"
            iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
          <Button variant="outline" asChild className="uppercase">
            <a href="mailto:kevincui1034@gmail.com">Contact me</a>
          </Button>
        </div>
      </motion.section>
    </>
  );
};

export default HomePage;
