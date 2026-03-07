"use client"

import { useLanguage } from "@/context/LanguageContext"

interface LanguageSwitchProps {
    button: boolean
}

export function LanguageSwitch({ button }: LanguageSwitchProps) {
    const { language, setLanguage } = useLanguage()

    return (

        <div className="flex items-center justify-start gap-2">
            <a
                href="#"
                className="text-lg font-bold tracking-tight text-foreground"
            >
                {'<'}
                <span className="text-accent">jesuSando</span>
                {' />'}
            </a>
            {button && (
                <button
                    onClick={() => setLanguage(language === "en" ? "es" : "en")}
                    className="text-sm border px-3 py-1 rounded-full cursor-pointer"
                >
                    {language === "en" ? "ES" : "EN"}
                </button>
            )}
        </div>
    )
}