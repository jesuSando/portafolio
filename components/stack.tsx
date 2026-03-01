"use client"

import { useState } from "react"

const categories = ["All", "Frontend", "Backend", "Tools", "Design"] as const
type Category = (typeof categories)[number]

interface Tech {
  name: string
  category: Exclude<Category, "All">
  time: number
  description: string
}

const stack: Tech[] = [
  {
    name: "Node.js",
    category: "Backend",
    time: 2,
    description: "REST API development, middleware architecture, authentication flows, and scalable service design.",
  },
  {
    name: "React",
    category: "Frontend",
    time: 1.5,
    description: "Component-based architecture, hooks, context patterns, state management, and performance optimization.",
  },
  {
    name: "Git",
    category: "Tools",
    time: 3,
    description: "Branching strategies, rebasing, conflict resolution, collaborative workflows, and version control best practices.",
  },
  {
    name: "Adobe Photoshop",
    category: "Design",
    time: 2,
    description: "Image editing, digital composition, visual assets creation, and graphic optimization for web and video.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    time: 1,
    description: "Strong typing, generics, utility types, and scalable code architecture for large applications.",
  },
  {
    name: "Express",
    category: "Backend",
    time: 2,
    description: "Structured routing, layered architecture (controllers/services), middleware patterns, and API modularization.",
  },
  {
    name: "Docker",
    category: "Tools",
    time: 0,
    description: "Containerization, multi-service environments with Docker Compose, and reproducible development setups.",
  },
  {
    name: "Adobe After Effects",
    category: "Design",
    time: 2,
    description: "Motion graphics, animation principles, visual effects, and dynamic content production.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    time: 2,
    description: "Modern ES6+ syntax, asynchronous patterns (Promises, async/await), modular architecture, and functional programming principles.",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    time: 1,
    description: "Schema design, relational modeling, indexing strategies, and complex query optimization.",
  },
  {
    name: "GitHub",
    category: "Tools",
    time: 3,
    description: "Pull requests, repository management, CI basics, and collaborative project organization.",
  },
  {
    name: "Adobe Premiere Pro",
    category: "Design",
    time: 2,
    description: "Professional video editing, storytelling through montage, color correction, and content production workflows.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    time: 1.5,
    description: "App Router, server/client components, API routes, SSR/ISR strategies, and structured full-stack architecture.",
  },
  {
    name: "MySQL",
    category: "Backend",
    time: 2,
    description: "Database design, relational integrity, stored procedures basics, and production-level querying.",
  },
  {
    name: "Linux",
    category: "Tools",
    time: 1.5,
    description: "Command-line proficiency, process management, server environments, and system configuration basics.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    time: 1.5,
    description: "Utility-first styling, responsive layouts, custom design systems, and scalable UI composition.",
  },
  {
    name: "Python",
    category: "Backend",
    time: 1,
    description: "Backend scripting, data handling, and web development fundamentals.",
  },
  {
    name: "Postman",
    category: "Tools",
    time: 2,
    description: "API testing, request automation, environment variables, and endpoint validation workflows.",
  },
  {
    name: "Sass",
    category: "Frontend",
    time: 1,
    description: "Modular styling architecture, variables, mixins, and structured CSS organization.",
  },
  {
    name: "Django",
    category: "Backend",
    time: 0,
    description: "MVC architecture, ORM usage, authentication systems, and rapid backend prototyping.",
  },
  {
    name: "Vercel",
    category: "Tools",
    time: 1,
    description: "Frontend deployment, preview environments, and serverless API hosting.",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    time: 1,
    description: "Component-based UI framework usage and responsive grid systems.",
  },
  {
    name: "Sequelize",
    category: "Backend",
    time: 1,
    description: "Relational modeling, migrations, associations, transaction handling, and database abstraction.",
  },
  {
    name: "Netlify",
    category: "Tools",
    time: 1,
    description: "Static deployment pipelines and frontend hosting workflows.",
  },
  {
    name: "React Native",
    category: "Frontend",
    time: 0.5,
    description: "Cross-platform mobile development with shared logic, optimized rendering, and native integrations.",
  },
  {
    name: "MongoDB",
    category: "Backend",
    time: 0.5,
    description: "Document-based modeling, schema design trade-offs, and aggregation pipelines.",
  },
  {
    name: "VS Code",
    category: "Tools",
    time: 3,
    description: "Advanced editor configuration, extensions, debugging tools, and productivity optimization.",
  },
  {
    name: "Expo",
    category: "Frontend",
    time: 0.5,
    description: "React Native tooling, OTA updates, native modules, and simplified mobile deployment workflows.",
  },
  {
    name: "Angular",
    category: "Frontend",
    time: 0,
    description: "Component-driven SPA development, services, dependency injection, and reactive forms.",
  },
  {
    name: "Astro",
    category: "Frontend",
    time: 1,
    description: "Static-first architecture, partial hydration, and performance-focused frontend builds.",
  },
]

function getTimeBadge(years: number) {
  if (years >= 3) {
    return {
      label: `${years}+ years`,
      className: "bg-accent text-accent-foreground",
    }
  }

  if (years >= 2) {
    return {
      label: `${years} years`,
      className: "bg-secondary text-foreground",
    }
  }

  if (years == 0) {
    return {
      label: 'learning',
      className: "bg-secondary text-muted-foreground",
    }
  }

  return {
    label: `${years} year`,
    className: "bg-secondary text-muted-foreground",
  }
}


export function Stack() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [expanded, setExpanded] = useState(false);

  const filtered =
    activeCategory === "All"
      ? stack
      : stack.filter((t) => t.category === activeCategory)

  const isLong = activeCategory === "All" && filtered.length > 9

  const displayItems =
    activeCategory === "All" && !expanded
      ? filtered.slice(0, 9)
      : filtered

  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Tech Stack
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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat
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
          {displayItems.map((tech) => (
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
                {(() => {
                  const badge = getTimeBadge(tech.time)

                  return (
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-mono ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  )
                })()}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
          {isLong && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="cursor-pointer text-accent transition hover:text-accent/80"
              >
                {expanded ? "See less" : "See all"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
