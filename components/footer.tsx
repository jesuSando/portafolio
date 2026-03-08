"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { useState, useEffect } from "react"

import { LanguageSwitch } from "./LanguageSwitch"
import { useLanguage } from "@/context/LanguageContext"


const socialIcons = [
  { Icon: Github, href: "https://github.com/jesuSando", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jesús-sandoval-martínez-983112292", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/vzzaroo", label: "Instagram" },
  { Icon: Mail, href: "mailto:sandoval.jesus2005@gmail.com", label: "Email" },
]

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("")
  const [idea, setIdea] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{
    email?: string[]
    idea?: string[]
  }>({})

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle")
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [status])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({})
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [errors])

  const footerLinks = {
    [t.footer.navigation]: [
      { label: t.footer.links.projects, href: "#projects" },
      { label: t.footer.links.experience, href: "#experience" },
      { label: t.footer.links.about, href: "#about" },
    ],
    [t.footer.social]: [
      { label: t.footer.links.github, href: "https://github.com/jesuSando" },
      { label: t.footer.links.linkedin, href: "https://www.linkedin.com/in/jesús-sandoval-martínez-983112292" },
      { label: t.footer.links.instagram, href: "https://www.instagram.com/vzzaroo" },
    ],
  }

  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t.footer.title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t.footer.subtitle}
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

        {status === "success" && (
          <p className="mb-2 text-sm text-accent text-end">
            {t.footer.success}
          </p>
        )}

        {status === "error" && (
          <p className="mb-2 text-sm text-red-500 text-end">
            {t.footer.error}
          </p>
        )}
        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {t.footer.contactTitle}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.footer.contactSubtitle}
            </p>
          </div>

          <form
            className="flex flex-col gap-4 rounded-2xl md:flex-row md:items-center md:justify-between"
            onSubmit={async (e) => {
              e.preventDefault()

              setLoading(true)
              setStatus("idle")
              setErrors({})

              const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, idea }),
              })

              const data = await res.json()
              setLoading(false)

              if (res.ok) {
                setStatus("success")
                setEmail("")
                setIdea("")
              } else {
                if (res.status === 400 && data.error?.fieldErrors) {
                  setErrors(data.error.fieldErrors)
                } else if (res.status === 429) {
                  setStatus("error")
                } else {
                  setStatus("error")
                }
              }
            }}
          >
            <div className=" relative flex flex-col">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-full border bg-secondary px-4 py-2 text-sm 
        ${errors.email ? "border-red-500" : "border-border"}
      `}
                required
              />
              {errors.email && (
                <p className="absolute bottom-10 text-xs text-red-500">
                  {errors.email[0]}
                </p>
              )}
            </div>

            <div className="relative flex flex-col">
              <input
                type="text"
                placeholder={t.footer.ideaPlaceholder}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className={`rounded-full border bg-secondary px-4 py-2 text-sm 
        ${errors.idea ? "border-red-500" : "border-border"}
      `}
                required
              />
              {errors.idea && (
                <p className="absolute bottom-10 text-xs text-red-500">
                  {errors.idea[0]}
                </p>
              )}
            </div>

            <input type="hidden" name="company" />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground 
      transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? `${t.footer.sending}` : `${t.footer.send}`}
            </button>
          </form>
        </div>


        <div className="mb-12 border-t border-border pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <LanguageSwitch button={false} />
              <p className="my-3 text-sm leading-relaxed text-muted-foreground">
                {t.footer.brandDescription}
              </p>

            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col justify-center items-center">
                <h3 className="mb-3 text-sm font-semibold text-foreground text-center">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2 items-center">
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
            <div className="flex flex-col items-center justify-self-end">
              <a
                href="https://jesus-sandoval-2025.netlify.app/"
                className="relative block w-[130px] h-[130px] group"
              >
                <div className="absolute inset-0 border-2 border-border rounded-full group-hover:border-accent transition-colors" />

                <div className="absolute -top-1 -left-1 -right-1 -bottom-1">
                  <Image
                    src="/images/yoshi.png"
                    alt="last-portfolio"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain drop-shadow-lg transition-transform group-hover:scale-110"
                    priority
                  />
                </div>
              </a>
              <span className="mt-2 text-xs text-muted-foreground">
                {t.footer.previus}
              </span>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {t.footer.copyright}</p>
          <p className="font-mono text-xs">{t.footer.closing}</p>
        </div>
      </div>
    </footer>
  )
}
