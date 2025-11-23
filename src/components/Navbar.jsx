import { useEffect, useRef, useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const panelRef = useRef(null);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setIsVisible(true);

                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        let ticking = false;
        const throttledControlNavbar = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    controlNavbar();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledControlNavbar, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledControlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center w-full h-20 justify-between px-6 md:px-8 text-white text-lg bg-black/10 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <a href="#hero" className="text-2xl md:text-4xl font-extrabold gradient-text">JesuSando</a>

            <ul className="hidden md:flex gap-6 items-center">
                <li><a href="#about" className="hover:text-[var(--secondary-400)] transition duration-200">Sobre mí</a></li>
                <li><a href="#projects" className="hover:text-[var(--secondary-400)] transition duration-200">Proyectos</a></li>
                <li><a href="#skills" className="hover:text-[var(--secondary-400)] transition duration-200">Tecnologías</a></li>
                <li><a href="#experience" className="hover:text-[var(--secondary-400)] transition duration-200">Experiencia</a></li>
                <li><a href="#contact" className="hover:text-[var(--secondary-400)] transition duration-200">Contacto</a></li>
            </ul>

            {!open && (
                <button
                    className="md:hidden z-30 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    onClick={() => setOpen(prev => !prev)}
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                >
                    <MenuIcon />
                </button>
            )}

            <div
                aria-hidden={!open}
                className={`fixed inset-0 z-20 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                <aside
                    id="mobile-menu"
                    ref={panelRef}
                    className={`absolute right-0 top-0 h-screen w-[75%] max-w-xs transform bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-2xl transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                >
                    <nav className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                            <span className="font-bold text-xl">Menú</span>
                            <button
                                onClick={() => setOpen(false)}
                                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                aria-label="Cerrar menú"
                            >
                                <X />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-4 text-lg">
                            <li><a href="#about" className="block px-2 py-2 rounded hover:bg-slate-700 transition" onClick={() => setOpen(false)}>Sobre mí</a></li>
                            <li><a href="#projects" className="block px-2 py-2 rounded hover:bg-slate-700 transition" onClick={() => setOpen(false)}>Proyectos</a></li>
                            <li><a href="#skills" className="block px-2 py-2 rounded hover:bg-slate-700 transition" onClick={() => setOpen(false)}>Tecnologías</a></li>
                            <li><a href="#experience" className="block px-2 py-2 rounded hover:bg-slate-700 transition" onClick={() => setOpen(false)}>Experiencia</a></li>
                            <li><a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-700 transition" onClick={() => setOpen(false)}>Contacto</a></li>
                        </ul>

                        <div className="mt-auto pt-6 border-t border-slate-700">
                            <a href="#contact" className="inline-block w-full text-center py-3 rounded-md font-semibold bg-cyan-500 hover:bg-cyan-400 transition">Hablemos</a>
                        </div>
                    </nav>
                </aside>
            </div>
        </nav>
    );
}