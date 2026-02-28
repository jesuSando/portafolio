import { MapPin, Calendar, Coffee } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    label: "Based in",
    value: "San Francisco, CA",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "5+ years",
  },
  {
    icon: Coffee,
    label: "Fueled by",
    value: "Curiosity & Coffee",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About
              <br />
              Me
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            A glimpse into who I am beyond the code. Passionate about building
            tools that make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Main bio card - spans 2 cols */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-8 lg:col-span-2">
            <div className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-foreground">
                I&apos;m a full-stack developer who thrives at the intersection
                of design and engineering. I believe the best products come from
                understanding both the technical constraints and the human needs
                behind every feature.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                My journey started building small tools to automate mundane
                tasks, which quickly grew into a passion for crafting complete
                digital experiences. Today I focus on React ecosystems, modern
                deployment workflows, and creating interfaces that feel
                effortless to use.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me exploring open-source
                projects, writing technical articles, or experimenting with new
                frameworks before they hit the mainstream.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
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

          {/* Side column - values */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Philosophy
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                Ship fast, iterate often
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I believe in getting ideas in front of users quickly, learning
                from real feedback, and refining until the experience feels
                right.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Approach
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                Design-driven development
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Great code should serve great design. I work closely with
                designers to translate vision into pixel-perfect, performant
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
