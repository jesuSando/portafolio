"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"

const techStack = [
  { label: "React", active: true },
  { label: "Next.js", active: true },
  { label: "TypeScript", active: true },
  { label: "Node.js", active: false },
  { label: "PostgreSQL", active: false },
]

export function Hero() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.72_0.12_180/0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects
        </div>

        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          Crafting Digital
          <br />
          <span className="text-accent">Experiences</span>
        </h1>

        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Full-stack developer specializing in building exceptional web
          applications. Turning complex problems into elegant, performant
          solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/50 px-4 py-3">
          {techStack.map((tech) => (
            <span
              key={tech.label}
              onMouseEnter={() => setHoveredTech(tech.label)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`cursor-default rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                hoveredTech === tech.label
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tech.label}
            </span>
          ))}
        </div>

        <a
          href="#projects"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View My Work
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
