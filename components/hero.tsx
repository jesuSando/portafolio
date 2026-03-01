"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"

const techStack = [
  { label: "GitHub", href: "https://github.com/jesuSando" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesús-sandoval-martínez-983112292" },
  { label: "Instagram", href: "https://www.instagram.com/vzzaroo" },
]

export function Hero() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.72_0.12_180/0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          Designing logic
          <br />
          <span className="text-accent">Building impact</span>
        </h1>

        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          I build structured, scalable systems — from internal tools to full-stack applications — turning complex ideas into reliable software.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/50 px-4 py-3">
          {techStack.map((tech) => (
            <a
              key={tech.label}
              onMouseEnter={() => setHoveredTech(tech.label)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${hoveredTech === tech.label
                ? "bg-accent text-accent-foreground cursor-pointer"
                : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              href={tech.href}
            >
              {tech.label}
            </a>
          ))}
        </div>

        <a
          href="#projects"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Explore my work
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
