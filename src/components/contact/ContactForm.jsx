import { useForm, ValidationError } from "@formspree/react";
import * as icon from "lucide-react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xnjqjaq");

    if (state.succeeded) {
        return (
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-emerald-400">
                    ¡Mensaje enviado!
                </h3>
                <p className="text-gray-300 mt-2">
                    Gracias por escribirme, te responderé pronto.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
            <div className="space-y-6">
                <label className="block space-y-2">
                    <div className="flex items-center gap-2">
                        <icon.User className="h-4 w-4 text-emerald-400" />
                        <span className="text-white font-medium">Nombre completo</span>
                    </div>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tu nombre"
                    />
                    <ValidationError field="name" errors={state.errors} />
                </label>

                <label className="block space-y-2">
                    <div className="flex items-center gap-2">
                        <icon.Mail className="h-4 w-4 text-emerald-400" />
                        <span className="text-white font-medium">Correo electrónico</span>
                    </div>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="tu@email.com"
                    />
                    <ValidationError field="email" errors={state.errors} />
                </label>

                <label className="block space-y-2">
                    <div className="flex items-center gap-2">
                        <icon.MessageSquare className="h-4 w-4 text-emerald-400" />
                        <span className="text-white font-medium">Mensaje</span>
                    </div>
                    <textarea
                        name="message"
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Hola, me gustaría hablar sobre..."
                    />
                    <ValidationError field="message" errors={state.errors} />
                </label>
            </div>

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full transition-all disabled:opacity-50 cursor-pointer hover:from-emerald-600 hover:to-cyan-600"
            >
                {state.submitting ? "Enviando..." : "Enviar mensaje"}
            </button>
            <p className="text-sm text-gray-400 text-center">
                Te responderé en menos de 24 horas.
            </p>
        </form>
    );
}
