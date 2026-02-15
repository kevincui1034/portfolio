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
// Projects section
const projects = [
  { title: "Pokemon Moveset Predictor",
    description: "Pokemon moveset predictor using machine learning.",
    href: "https://github.com/kevincui1034/cs163_group11",
    tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "GCP", "Dash", "Flask", "Seaborn"] },

  { title: "Money Maestro",
    description: "Finance tracking and visualization tool.",
    href: "https://github.com/CCLDArjun/personal-budgeting-app",
    tags: ["Python", "Dash", "Flask","Seaborn", "GCP", "Plotly"] },

  { title: "SkipBeatTi",
    description:"Music streaming platform with user commenting system.",
    href: "https://github.com/MrPicklesBush/SkipBeatTi",
    tags: ["React", "Vite", "Typescript", "MySQL", "TailwindCSS", "Clerk", "Spotify API", "shadcn/ui"] },
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
                Kevin Cui<br /> <span className="text-accent"> Data Scientist</span>
              </h1>
              <p className="text-md max-w-[900px] mb-9 text-white/80 mx-auto xl:mx-0">
                I'm a data scientist with a passion for building data-driven solutions to real-world problems.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="md" asChild className="uppercase flex items-center gap-2 text-accent">
                  <a href="/kevincui_resume.pdf" download="kevincui_resume.pdf">
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
                  src="/profile.jpg"
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link href={project.href}>
                  <Card className="h-full border-white/10 bg-white/5 text-white hover:border-accent/50 transition-colors">
                    <CardContent className="p-5 flex flex-col gap-3">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
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
