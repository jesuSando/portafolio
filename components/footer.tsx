"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { useState } from "react"

const footerLinks = {
  Navigation: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ],
  Social: [
    { label: "GitHub", href: "https://github.com/jesuSando" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jesús-sandoval-martínez-983112292" },
    { label: "Instagram", href: "https://www.instagram.com/vzzaroo" },
  ],
}

const socialIcons = [
  { Icon: Github, href: "https://github.com/jesuSando", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jesús-sandoval-martínez-983112292", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/vzzaroo", label: "Instagram" },
  { Icon: Mail, href: "mailto:sandoval.jesus2005@gmail.com", label: "Email" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [idea, setIdea] = useState("")


  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              If you have an idea, let's turn it into something real.
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
        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Send me a message
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              I usually reply within a day.
            </p>
          </div>
          <form
            className="flex flex-col gap-4 rounded-2xl md:flex-row md:items-center md:justify-between"
            onSubmit={(e) => {
              e.preventDefault()
              setEmail("")
              setIdea("")
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
            <input
              type="text"
              placeholder="what do you have in mind?"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>

        <div className="mb-12 border-t border-border pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <a
                href="#"
                className="text-lg font-bold tracking-tight text-foreground"
              >
                {'<'}
                <span className="text-accent">jesuSando</span>
                {' />'}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Building products, systems and occasionally games.
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

            <div className="border border-border bg-card w-fit rounded-full">
              <Image
                src="/images/yoshi.png"
                alt="Description"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; 2026 Jesús Sandoval. All rights reserved.</p>
          <p className="font-mono text-xs">Thx 4 reading :p</p>
        </div>
      </div>
    </footer>
  )
}
