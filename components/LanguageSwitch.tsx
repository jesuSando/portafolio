"use client"

import { useLanguage } from "@/context/LanguageContext"

export function LanguageSwitch() {
    const { language, setLanguage } = useLanguage()

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="text-sm border px-3 py-1 rounded-full"
        >
            {language === "en" ? "ES" : "EN"}
        </button>
    )
}