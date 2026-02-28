import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Velora Dashboard",
    description: "Real-time analytics platform with interactive data visualizations.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "D3.js"],
    href: "#",
    size: "large" as const,
  },
  {
    title: "Mercado UI",
    description: "E-commerce design system with reusable components.",
    image: "/images/project-2.jpg",
    tags: ["React", "Tailwind", "Storybook"],
    href: "#",
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
  return (
    <a
      href={project.href}
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
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
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
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Featured
              <br />
              Projects
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Browse through my selected works spanning web apps, design systems,
            and developer tools. Each project tackles unique challenges with
            thoughtful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Row 1: 2 large */}
          {projects.filter((p) => p.size === "large").map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Row 2: 2 small + 1 medium */}
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
