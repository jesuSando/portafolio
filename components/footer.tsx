"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useState } from "react"

const footerLinks = {
  Navigation: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Resume", href: "#" },
    { label: "Uses", href: "#" },
    { label: "Bookmarks", href: "#" },
  ],
}

const socialIcons = [
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Designed with care to deliver seamless experiences. Powered by
              creativity to inspire every step of the way.
            </p>
          </div>
          <div className="flex gap-3">
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12 border-t border-border pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <a
                href="#"
                className="text-lg font-bold tracking-tight text-foreground"
              >
                {'<'}
                <span className="text-accent">alex</span>
                {' />'}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Full-stack developer focused on crafting performant and
                accessible web experiences.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Stay in the loop
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Get updates on new projects and articles.
            </p>
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              setEmail("")
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
          <p className="font-mono text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
