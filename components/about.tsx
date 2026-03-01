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
    value: "Curiosity & Structure",
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
                I’m a Computer Programming Analyst and currently studying Computer Engineering. I’m deeply interested in how systems are designed, structured, and scaled.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I’ve worked on production-level projects, contributing to both development and system deployment. These experiences taught me to stay adaptable, think structurally, and solve problems under real-world constraints.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Beyond code, I’m driven by continuous learning, physical training, and building ideas that challenge me technically and creatively.
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
                When something sparks my interest, I explore it deeply — understanding not only how it works, but why it was built that way.
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
                Clarity before complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
