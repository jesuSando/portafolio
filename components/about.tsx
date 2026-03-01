"use client"
import { MapPin, Calendar, Coffee } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


export function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: MapPin,
      label: [t.about.highlights.locatedIn.label],
      value: [t.about.highlights.locatedIn.value],
    },
    {
      icon: Calendar,
      label: [t.about.highlights.experience.label],
      value: [t.about.highlights.experience.value],
    },
    {
      icon: Coffee,
      label: [t.about.highlights.fueledBy.label],
      value: [t.about.highlights.fueledBy.value],
    },
  ]
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.about.title}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-8 lg:col-span-2">
            <div className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-foreground">
                {t.about.bio.paragraph1}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t.about.bio.paragraph2}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t.about.bio.paragraph3}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {t.about.philosophy.label}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {t.about.philosophy.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.about.philosophy.description}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {t.about.approach.label}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {t.about.approach.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.about.approach.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
