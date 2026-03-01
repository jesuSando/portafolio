"use client";

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string
  tags: string[]
  href: string
}

function ExperienceCard({
  experience,
  featured = false,
  seeMore,
  seeLess,
}: {
  experience: ExperienceItem
  featured?: boolean
  seeMore: string
  seeLess: string
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
                {expanded ? seeLess : seeMore}
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
  const { t } = useLanguage()
  const experiences = [
    {
      title: t.experience.experiences.wit.title,
      company: t.experience.experiences.wit.company,
      period: t.experience.experiences.wit.period,
      description: t.experience.experiences.wit.description,
      tags: ["Next.js", "TypeScript", "React", "Node.js", "Express"],
      href: "https://wit.la/",
    },
    {
      title: t.experience.experiences.freelance.title,
      company: t.experience.experiences.freelance.company,
      period: t.experience.experiences.freelance.period,
      description: t.experience.experiences.freelance.description,
      tags: ["React Native", "Node.js", "MySQL", "Firebase"],
      href: "https://www.workana.com/",
    },
    {
      title: t.experience.experiences.editor.title,
      company: t.experience.experiences.editor.company,
      period: t.experience.experiences.editor.period,
      description: t.experience.experiences.editor.description,
      tags: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
      href: "#",
    },
    {
      title: t.experience.experiences.intern.title,
      company: t.experience.experiences.intern.company,
      period: t.experience.experiences.intern.period,
      description: t.experience.experiences.intern.description,
      tags: ["Linux", "Bash", "Technical Support", "Team Collaboration"],
      href: "https://www.duoc.cl/",
    },
    {
      title: t.experience.experiences.engineering.title,
      company: t.experience.experiences.engineering.company,
      period: t.experience.experiences.engineering.period,
      description: t.experience.experiences.engineering.description,
      tags: ["Algorithms", "Data Structures", "Software Engineering", "Systems"],
      href: "https://www.unab.cl/",
    },
  ]

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.experience.title}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 justify-center">
            <ExperienceCard experience={experiences[4]} featured seeMore={t.experience.seeMore} seeLess={t.experience.seeLess} />
            <ExperienceCard experience={experiences[1]} featured seeMore={t.experience.seeMore} seeLess={t.experience.seeLess} />
            <ExperienceCard experience={experiences[0]} seeMore={t.experience.seeMore} seeLess={t.experience.seeLess} />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <ExperienceCard experience={experiences[3]} seeMore={t.experience.seeMore} seeLess={t.experience.seeLess} />
            <ExperienceCard experience={experiences[2]} seeMore={t.experience.seeMore} seeLess={t.experience.seeLess} />
          </div>
        </div>
      </div>
    </section>
  )
}
