"use client"
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

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


function ProjectCard({
  project,
  seeMore,
  seeLess,
}: {
  project: Project
  seeMore: string
  seeLess: string
}) {
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
                {expanded ? seeLess : seeMore}
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
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      title: t.projects.projects.pdf.title,
      description: t.projects.projects.pdf.description,
      image: "/images/backend.png",
      tags: ["Node.js", "TypeScript", "DSL", "PDF Generation", "npm"],
      code: "https://github.com/jesuSando/StructPDF.git",
      size: "large" as const,
    },
    {
      title: t.projects.projects.ritmo.title,
      description: t.projects.projects.ritmo.description,
      items: {
        web: {
          title: t.projects.projects.ritmo.web.title,
          description: t.projects.projects.ritmo.web.description,
          image: "/images/ritmo-web.png",
          badge: "Developing"
        },
        mobile: {
          title: t.projects.projects.ritmo.mobile.title,
          description: t.projects.projects.ritmo.mobile.description,
          image: "/images/ritmo-mobile.png",
          badge: "Developing"
        },
        backend: {
          title: t.projects.projects.ritmo.backend.title,
          description: t.projects.projects.ritmo.backend.description,
          image: "/images/backend.png",
          code: "https://github.com/jesuSando/Ritmo.git"
        }
      },
      tags: ["Next.js", "React Native", "Node.js", "Express", "Sequelize"],
      size: "large" as const,
    },
    {
      title: t.projects.projects.email.title,
      description: t.projects.projects.email.description,
      image: "/images/backend.png",
      tags: ["Node.js", "Microservices", "SendGrid", "Nodemailer"],
      code: "https://github.com/jesuSando/mail-service.git",
      size: "small" as const,
    },
    {
      title: t.projects.projects.ekonomi.title,
      description: t.projects.projects.ekonomi.description,
      image: "/images/ekonomi.png",
      tags: ["Angular", "Ionic", "TypeScript", "Gemini API", "Firebase"],
      code: "https://github.com/BMolinae/Front-Ekonomi.git",
      size: "small" as const,
    },
    {
      title: t.projects.projects.gladiator.title,
      description: t.projects.projects.gladiator.description,
      image: "/images/game.png",
      tags: ["Game Design", "AI Systems", "Simulation", "Behavior Models"],
      size: "medium" as const,
    },
  ]

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.projects.title}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.filter((p) => p.size === "large").map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              seeMore={t.projects.seeMore}
              seeLess={t.projects.seeLess}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects
            .filter((p) => p.size === "small" || p.size === "medium")
            .map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                seeMore={t.projects.seeMore}
                seeLess={t.projects.seeLess}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
