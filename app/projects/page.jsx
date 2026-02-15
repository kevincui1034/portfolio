"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  { title: "Pokemon Moveset Predictor",
    description: "Dash web app (Flask + React on GCP) that predicts Pokemon movesets with ~70% precision using a Random Forest model on scraped battle data, with Seaborn visualizations.",
    href: "/projects",
    tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "GCP", "Dash", "Flask", "Seaborn"] },
  { title: "Money Maestro",
    description: "Finance tracking and visualization tool.",
    href: "/projects",
    tags: ["Python", "Dash", "Flask","Seaborn", "GCP", "Plotly"] },
  { title: "SkipBeatTi",
    description:"Music streaming platform with commenting system.",
    href: "/projects",
    tags: ["React", "Vite", "Typescript", "MySQL", "TailwindCSS", "Clerk"] },
];

const ProjectsPage = () => {
  return (
    <section className="py-24 min-h-screen">
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
                    <p className="text-sm text-white/80 line-clamp-4 leading-relaxed">{project.description}</p>
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
        <div className="mt-8 text-center">
          <Button variant="outline" asChild className="uppercase">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
