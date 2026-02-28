"use client";

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "WIT Innovación y Tecnología",
    period: "2025 - 2026",
    description:
      "Development and implementation of technological solutions for the transportation sector, from backend to field deployment. I participated in the creation of administrative panels and seat reservation systems, integrating payment portals and developing internal tools to optimize processes. I also collaborated in the installation and configuration of self-service kiosks and POS terminals, as well as technical support and infrastructure implementation.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "Express"],
    href: "https://wit.la/",
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2024 - Present",
    description:
      "Independent development of web solutions for clients, from concept to delivery. I have built static sites, data-driven administrative panels, and custom backends, including business logic for a gym application. I work autonomously, defining structure, database, and deployment according to the needs of each project.",
    tags: ["React Native", "Node.js", "MySQL", "Firebase"],
    href: "https://www.workana.com/",
  },
  {
    title: "Video Editor",
    company: "Digital Content Creator",
    period: "2020 - 2022",
    description:
      "Production and editing of audiovisual content during the pandemic, working directly with a YouTube creator. I was responsible for editing videos and visual pieces using Premiere Pro, After Effects, and Photoshop, developing aesthetic criteria, visual narrative management, and discipline in delivering under defined deadlines.",
    tags: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
    href: "#",
  },
  {
    title: "Intern - Student",
    company: "Duoc UC",
    period: "2023 - 2025",
    description:
      "Formal education in software development, consolidating strong technical and methodological foundations. During my degree in Computer Programming Analysis, I strengthened my programming and web development fundamentals. Although my internship was development-oriented, I took on system installation (including my first experience with Linux), equipment configuration, and on-site troubleshooting — an early exposure to technology beyond code.",
    tags: ["Linux", "Bash", "Technical Support", "Team Collaboration"],
    href: "https://www.duoc.cl/",
  },
  {
    title: "Computer Engineering Student",
    company: "Universidad Andrés Bello",
    period: "2026 - Present",
    description:
      "Currently pursuing a degree in Computer Engineering to deepen my theoretical foundations and strengthen my long-term technical vision. This stage focuses on advanced systems, software architecture, and engineering-level problem solving to complement my technical background.",
    tags: ["Algorithms", "Data Structures", "Software Engineering", "Systems"],
    href: "https://www.unab.cl/",
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
            A progression shaped by curiosity, hands-on experience, and a constant drive to understand how systems really work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 justify-center">
            <ExperienceCard experience={experiences[0]} />
            <ExperienceCard experience={experiences[2]} />
            <ExperienceCard experience={experiences[1]} />
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <ExperienceCard experience={experiences[3]} featured />
            <ExperienceCard experience={experiences[4]} featured />
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
