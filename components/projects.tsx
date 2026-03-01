"use client"
import { de } from "date-fns/locale"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Declarative PDF Engine",
    description: "A custom DSL-powered engine for generating structured PDF documents declaratively. Designed to describe complex layouts through a domain-specific language, separating document structure from rendering logic.",
    image: "/images/backend.png",
    tags: ["Node.js", "TypeScript", "DSL", "PDF Generation", "npm"],
    code: "https://github.com/jesuSando/StructPDF.git",
    demo: null,
    size: "large" as const,
  },
  {
    title: "Ritmo",
    description: "Personal productivity app with a custom backend and multi-platform frontend (Next.js + React Native). Built with a focus on structured data flow and long-term scalability.",
    image: "/images/ritmo-web.png",
    tags: ["Next.js", "React Native", "Node.js", "Express", "Sequelize"],
    code: "#",
    demo: "#",
    size: "large" as const,
  },
  {
    title: "FinTrack App",
    description: "Personal finance tracker with budgeting tools.",
    image: "/images/project-3.jpg",
    tags: ["React Native", "Node.js"],
    href: "#",
    size: "small" as const,
  },
  {
    title: "DevKit CLI",
    description: "Developer productivity tools for the terminal.",
    image: "/images/project-4.jpg",
    tags: ["Go", "CLI"],
    href: "#",
    size: "small" as const,
  },
  {
    title: "Studio Brand",
    description: "Creative agency site with animations.",
    image: "/images/project-5.jpg",
    tags: ["Next.js", "Framer Motion"],
    href: "#",
    size: "medium" as const,
  },
]

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const [expanded, setExpanded] = useState(false);

  const isLong = project.description.length > 100;
  const truncatedDescription = isLong
    ? project.description.slice(0, 100)
    : project.description;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 transition-opacity group-hover:opacity-0" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.demo && (
              <a
                className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex flex items-center gap-1 cursor-pointer"
                href={project.demo}>
                Demo
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent-foreground" />
              </a>
            )}
            {project.code && (
              <a
                className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex flex items-center gap-1 cursor-pointer"
                href={project.code}>
                Code
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent-foreground" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {expanded ? project.description : truncatedDescription}

          {isLong && (
            <>
              {!expanded && "... "}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-accent ml-1 cursor-pointer"
              >
                {expanded ? "See less" : "See more"}
              </button>
            </>
          )}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Selected projects where I explore systems thinking, architecture design, and experimental ideas — from developer tools to autonomous simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.filter((p) => p.size === "large").map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects
            .filter((p) => p.size === "small" || p.size === "medium")
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  )
}
