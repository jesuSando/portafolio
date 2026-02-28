import { MapPin, Calendar, Coffee } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    label: "Located in",
    value: "Santiago, CL",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "1+ years",
  },
  {
    icon: Coffee,
    label: "Fueled by",
    value: "Curiosity & Energy",
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Me
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
                I&apos;m a computer programmer analyst and currently a student of Computer Engineering. I enjoy learning on my own and experimenting with systems.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I have worked on real projects, both in development and maintenance of production systems, which has taught me to adapt and find solutions in high-pressure situations.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Outside of coding, I am interested in continuous learning, physical training, and exploring creative ideas.
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
                Curiosity is my engine
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Curiosity is what drives me. If something interests me, I get to the bottom of it. I don't just scratch the surface.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-secondary/30 p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                Approach
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                Clarity first
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If it's not clear, it's not ready yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
