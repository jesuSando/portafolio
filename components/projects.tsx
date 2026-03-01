"use client"
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type ProjectItem = {
  title: string
  description: string
  image: string
  badge?: string
  code?: string | null
  demo?: string | null
}

type Project = {
  title: string
  description: string
  image?: string
  items?: Record<string, ProjectItem>
  tags: string[]
  code?: string | null
  demo?: string | null
  size: "small" | "medium" | "large"
}

const projects: Project[] = [
  {
    title: "Declarative PDF Engine",
    description: "A custom DSL-powered engine for generating structured PDF documents declaratively. Designed to describe complex layouts through a domain-specific language, separating document structure from rendering logic.",
    image: "/images/backend.png",
    tags: ["Node.js", "TypeScript", "DSL", "PDF Generation", "npm"],
    code: "https://github.com/jesuSando/StructPDF.git",
    size: "large" as const,
  },
  {
    title: "Ritmo",
    description: "Ritmo is a structured life management system that integrates productivity, routines, financial control and personal tracking into a single cohesive architecture. Designed around relational data integrity, time-based logic and scalable backend patterns, it combines a custom Node.js + Express API with multi-platform clients (Next.js + React Native). The system is built with long-term evolution in mind, separating concerns between scheduling logic, financial state management and behavioral tracking.",
    items: {
      web: {
        title: "Ritmo Web",
        description: "The web client is built with Next.js and acts as the primary dashboard interface. It provides calendar-based task visualization, financial summaries, budget tracking and routine management. The UI is structured around data-driven components that reflect relational backend state (tasks, dependencies, recurring routines, accounts and budgets). Designed for high information density while maintaining clarity, it emphasizes structured flows rather than simple CRUD screens.",
        image: "/images/ritmo-web.png",
        badge: "Developing"
      },
      mobile: {
        title: "Ritmo Mobile",
        description: "The mobile application (React Native) focuses on daily execution: marking tasks complete, logging habits, tracking expenses in real time and receiving scheduled notifications. It is optimized for fast interaction and state synchronization with the backend, ensuring consistency between financial balances, recurring routines and task dependency chains.",
        image: "/images/ritmo-mobile.png",
        badge: "Developing"
      },
      backend: {
        title: "Ritmo Backend",
        description: "The backend is built with Node.js, Express and Sequelize, structured around relational domain modeling. It manages users, financial accounts, budgets, transactions (including recurring patterns), routines with conflict resolution policies, task dependency graphs, time-block scheduling, habit logs and a queued notification system. Special attention is given to state integrity: balance recalculation, cascade behaviors, recurrence logic and scheduling conflicts are resolved at the service layer. The architecture is modular, migration-driven and designed for future scalability (microservices or event-based expansion).",
        image: "/images/backend.png",
        code: "https://github.com/jesuSando/Ritmo.git"
      }
    },
    tags: ["Next.js", "React Native", "Node.js", "Express", "Sequelize"],
    size: "large" as const,
  },
  {
    title: "Dynamic Email Service",
    description: "A provider-agnostic email microservice supporting Nodemailer and SendGrid through a unified payload structure, with template support and file attachments.",
    image: "/images/backend.png",
    tags: ["Node.js", "Microservices", "SendGrid", "Nodemailer"],
    code: "https://github.com/jesuSando/mail-service.git",
    size: "small" as const,
  },
  {
    title: "Ekonomi App",
    description: "A budgeting and expense management app with monthly limits and an integrated contextual chatbot restricted to domain-specific queries.",
    image: "/images/ekonomi.png",
    tags: ["Angular", "Ionic", "TypeScript", "Gemini API", "Firebase"],
    code: "https://github.com/BMolinae/Front-Ekonomi.git",
    size: "small" as const,
  },
  {
    title: "GladIAtor",
    description: "A real-time autonomous combat simulation where AI-driven gladiators learn, adapt, and suffer permanent consequences. A strategy layer built around risk, training, and emergent behavior.",
    image: "/images/game.png",
    tags: ["Game Design", "AI Systems", "Simulation", "Behavior Models"],
    size: "medium" as const,
  },
]

function ProjectCard({ project }: { project: Project }) {
  const hasItems = !!project.items
  const itemKeys = hasItems ? Object.keys(project.items!) : []
  const [activeIndex, setActiveIndex] = useState(0)
  const activeKey = hasItems ? itemKeys[activeIndex] : null
  const activeItem = hasItems && activeKey ? project.items![activeKey] : null

  const currentTitle = activeItem?.title || project.title
  const currentDescription = activeItem?.description || project.description
  const currentImage = activeItem?.image || project.image!
  const currentBadge = activeItem?.badge
  const currentCode = activeItem?.code ?? project.code
  const currentDemo = activeItem?.demo ?? project.demo

  const [expanded, setExpanded] = useState(false)
  const isLong = currentDescription.length > 120
  const displayDescription =
    expanded || !isLong
      ? currentDescription
      : currentDescription.slice(0, 120)

  function goNext() {
    setActiveIndex((i) => (i + 1) % itemKeys.length)
    setExpanded(false)
  }

  function goPrev() {
    setActiveIndex((i) => (i - 1 + itemKeys.length) % itemKeys.length)
    setExpanded(false)
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={currentImage}
          alt={currentTitle}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

        {currentBadge && (
          <span className="absolute top-3 left-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
            {currentBadge}
          </span>
        )}

        {hasItems && (
          <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between">
            <button
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition hover:bg-background/90"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {itemKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveIndex(i)
                    setExpanded(false)
                  }}
                  className={`h-1.5 rounded-full transition-all ${i === activeIndex
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
                    }`}
                  aria-label={`Go to ${project.items![key].title}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition hover:bg-background/90"
              aria-label="Next item"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {currentTitle}
          </h3>
          {(currentCode || currentDemo) && (
            <div className="flex shrink-0 items-center gap-1.5">
              {currentCode && (
                <a
                  href={currentCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                  aria-label="View source code"
                >
                  <Code2 className="h-3.5 w-3.5" />
                </a>
              )}
              {currentDemo && (
                <a
                  href={currentDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {displayDescription}
          {isLong && (
            <>
              {!expanded && "... "}
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 cursor-pointer text-accent transition hover:text-accent/80"
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
