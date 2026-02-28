"use client"

import { useState } from "react"

const categories = ["All", "Frontend", "Backend", "Tools", "Design"] as const
type Category = (typeof categories)[number]

interface Tech {
  name: string
  category: Exclude<Category, "All">
  level: "Expert" | "Advanced" | "Familiar"
  description: string
}

const stack: Tech[] = [
  {
    name: "React",
    category: "Frontend",
    level: "Expert",
    description: "Component architecture, hooks, server components, and performance optimization.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Expert",
    description: "App Router, ISR, middleware, API routes, and edge runtime.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    description: "Strict typing, generics, utility types, and type-safe API contracts.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    description: "Utility-first styling, custom design systems, and responsive layouts.",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    description: "REST & GraphQL APIs, middleware patterns, and microservices.",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    level: "Advanced",
    description: "Schema design, complex queries, migrations, and performance tuning.",
  },
  {
    name: "Prisma",
    category: "Backend",
    level: "Advanced",
    description: "Type-safe ORM, migrations, seeding, and relation modeling.",
  },
  {
    name: "Redis",
    category: "Backend",
    level: "Familiar",
    description: "Caching strategies, pub/sub, rate limiting, and session storage.",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Expert",
    description: "Branching strategies, rebasing, CI workflows, and code review.",
  },
  {
    name: "Docker",
    category: "Tools",
    level: "Advanced",
    description: "Containerization, multi-stage builds, and compose orchestration.",
  },
  {
    name: "Vercel",
    category: "Tools",
    level: "Expert",
    description: "Deployments, edge functions, analytics, and preview environments.",
  },
  {
    name: "Figma",
    category: "Design",
    level: "Advanced",
    description: "Design systems, prototyping, auto layout, and dev handoff.",
  },
]

const levelColors: Record<Tech["level"], string> = {
  Expert: "bg-accent text-accent-foreground",
  Advanced: "bg-secondary text-foreground",
  Familiar: "bg-secondary text-muted-foreground",
}

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered =
    activeCategory === "All"
      ? stack
      : stack.filter((t) => t.category === activeCategory)

  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Tech
              <br />
              Stack
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            The technologies I use daily to build modern, scalable, and
            delightful web applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {tech.category}
                  </span>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[tech.level]}`}
                >
                  {tech.level}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
