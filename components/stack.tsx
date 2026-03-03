"use client"

import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

const categories = ["All", "Frontend", "Backend", "Tools", "Design"] as const
type Category = (typeof categories)[number]

interface Tech {
  name: string
  category: Exclude<Category, "All">
  time: number
  description: string
}



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
  const { t } = useLanguage()

  const stack: Tech[] = [
    {
      name: "Node.js",
      category: "Backend",
      time: 2,
      description: t.stack.tech.node,
    },
    {
      name: "React",
      category: "Frontend",
      time: 1.5,
      description: t.stack.tech.react,
    },
    {
      name: "Git",
      category: "Tools",
      time: 3,
      description: t.stack.tech.git,
    },
    {
      name: "Adobe Photoshop",
      category: "Design",
      time: 2,
      description: t.stack.tech.photoshop,
    },
    {
      name: "TypeScript",
      category: "Frontend",
      time: 1,
      description: t.stack.tech.typescript,
    },
    {
      name: "Express",
      category: "Backend",
      time: 2,
      description: t.stack.tech.express,
    },
    {
      name: "Docker",
      category: "Tools",
      time: 0,
      description: t.stack.tech.docker,
    },
    {
      name: "Adobe After Effects",
      category: "Design",
      time: 2,
      description: t.stack.tech.aftereffects,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      time: 2,
      description: t.stack.tech.javascript,
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      time: 1,
      description: t.stack.tech.postgresql,
    },
    {
      name: "GitHub",
      category: "Tools",
      time: 3,
      description: t.stack.tech.github,
    },
    {
      name: "Adobe Premiere Pro",
      category: "Design",
      time: 2,
      description: t.stack.tech.premiere,
    },
    {
      name: "Next.js",
      category: "Frontend",
      time: 1.5,
      description: t.stack.tech.next,
    },
    {
      name: "MySQL",
      category: "Backend",
      time: 2,
      description: t.stack.tech.mysql,
    },
    {
      name: "Linux",
      category: "Tools",
      time: 1.5,
      description: t.stack.tech.linux,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      time: 1.5,
      description: t.stack.tech.tailwind,
    },
    {
      name: "Python",
      category: "Backend",
      time: 1,
      description: t.stack.tech.python,
    },
    {
      name: "Postman",
      category: "Tools",
      time: 2,
      description: t.stack.tech.postman,
    },
    {
      name: "Sass",
      category: "Frontend",
      time: 1,
      description: t.stack.tech.sass,
    },
    {
      name: "Django",
      category: "Backend",
      time: 0,
      description: t.stack.tech.django,
    },
    {
      name: "Vercel",
      category: "Tools",
      time: 1,
      description: t.stack.tech.vercel,
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      time: 1,
      description: t.stack.tech.bootstrap,
    },
    {
      name: "Sequelize",
      category: "Backend",
      time: 1,
      description: t.stack.tech.sequelize,
    },
    {
      name: "Netlify",
      category: "Tools",
      time: 1,
      description: t.stack.tech.netlify,
    },
    {
      name: "React Native",
      category: "Frontend",
      time: 0.5,
      description: t.stack.tech.reactnative,
    },
    {
      name: "MongoDB",
      category: "Backend",
      time: 0.5,
      description: t.stack.tech.mongodb,
    },
    {
      name: "VS Code",
      category: "Tools",
      time: 3,
      description: t.stack.tech.vscode,
    },
    {
      name: "Expo",
      category: "Frontend",
      time: 0.5,
      description: t.stack.tech.expo,
    },
    {
      name: "Angular",
      category: "Frontend",
      time: 0,
      description: t.stack.tech.angular,
    },
    {
      name: "Astro",
      category: "Frontend",
      time: 1,
      description: t.stack.tech.astro,
    },
  ]

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
              {t.stack.title}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {t.stack.description}
          </p>
        </div>

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
                {expanded ? t.stack.buttons.seeLess : t.stack.buttons.seeAll}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
