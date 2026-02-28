"use client";

import { ArrowUpRight, ChevronsLeftRightEllipsis } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "WIT Innovación y Tecnología",
    period: "2025 - Present",
    description:
      "Development and implementation of technological solutions for the transportation sector, from backend to field deployment.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "Express"],
    href: "https://wit.la/",
  },
  {
    title: "Full-Stack Developer",
    company: "Stripe",
    period: "2022 - 2024",
    description:
      "Developed payment integrations and dashboard experiences. Built internal tools that improved engineering velocity.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Frontend Developer",
    company: "Linear",
    period: "2020 - 2022",
    description:
      "Crafted pixel-perfect interfaces and smooth animations. Contributed to the design system and component library.",
    tags: ["React", "TypeScript", "CSS"],
    href: "#",
  },
  {
    title: "Junior Developer",
    company: "Startup Studio",
    period: "2019 - 2020",
    description:
      "Shipped MVPs for multiple early-stage startups. Built responsive web apps from design mockups to production deployments.",
    tags: ["JavaScript", "React", "Firebase"],
    href: "#",
  },
]

function ExperienceCard({
  experience,
  featured = false,
}: {
  experience: (typeof experiences)[number]
  featured?: boolean
}) {
  const [expanded, setExpanded] = useState(false);

  const isLong = experience.description.length > 100;
  const truncatedDescription = isLong
    ? experience.description.slice(0, 100)
    : experience.description;

  return (
    <div
      className={`flex flex-col justify-between gap-4 rounded-2xl border border-border p-6 transition-all hover:border-accent/40 ${featured ? "bg-card" : "bg-secondary/70"
        }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {experience.title}
          </h3>
        </div>
        <div className="group flex items-center gap-1 w-fit">
          <a className="text-sm font-medium text-accent" href={experience.href}>{experience.company}</a>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="text-xs text-muted-foreground">{experience.period}</p>
      </div>
      <div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {expanded ? experience.description : truncatedDescription}

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
      </div>
      <div className="flex flex-wrap gap-1.5">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Work Experience
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            From intern to team member at leading technology companies, each position has honed my craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <ExperienceCard experience={experiences[0]} featured />
            <ExperienceCard experience={experiences[2]} />
          </div>
          <div className="flex flex-col gap-4">
            <ExperienceCard experience={experiences[1]} />
            <ExperienceCard experience={experiences[3]} featured />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-8 py-5">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground">1+</span>
              <span className="text-xs text-muted-foreground">
                Year of Experience
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span className="text-xs text-muted-foreground">
                Projects Delivered
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground">2</span>
              <span className="text-xs text-muted-foreground">
                Companies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
