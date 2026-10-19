import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import cv from '../assets/CV_SantiagoCabrerizo.pdf';

const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const body = { fontFamily: "'Hanken Grotesk', system-ui, sans-serif" };

const focus =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400';

const ficha = [
    { label: 'Rol', value: 'Desarrollador Full-Stack' },
    { label: 'Estudios', value: 'Ingeniería en Sistemas' }
];

export default function Hero() {
    const reduce = useReducedMotion();

    // Única animación de entrada: las líneas del nombre suben desde una máscara
    // y luego el resto del contenido aparece con un fade simple.
    const rise = (delay = 0) => ({
        initial: reduce ? false : { y: '105%' },
        animate: { y: 0 },
        transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    });

    const fade = {
        initial: reduce ? false : { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.55 },
    };

    return (
        <section
            id="home"
            style={body}
            className="min-h-screen flex items-center bg-slate-950 pt-28 pb-16 sm:pt-32 lg:pt-24"
        >
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid gap-14 lg:gap-8 lg:grid-cols-12 lg:items-end">
                    {/* Columna principal */}
                    <div className="lg:col-span-7">
                        <motion.p
                            {...fade}
                            className="flex items-center gap-2.5 text-sm text-slate-400 mb-8 sm:mb-10"
                        >
                            <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                            Disponible para nuevos proyectos
                        </motion.p>

                        <h1
                            style={display}
                            className="text-slate-50 font-semibold tracking-[-0.035em] leading-[0.95] text-[2.9rem] min-[400px]:text-6xl sm:text-7xl xl:text-8xl"
                        >
                            <span className="block overflow-hidden pb-[0.1em]">
                                <motion.span className="block" {...rise(0)}>
                                    Santiago
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-[0.1em]">
                                <motion.span className="block" {...rise(0.1)}>
                                    Cabrerizo
                                </motion.span>
                            </span>
                        </h1>

                        <motion.div {...fade}>
                            <p className="mt-8 max-w-[34rem] text-lg sm:text-xl leading-relaxed text-slate-300">
                                Estudio Ingeniería en Sistemas y construyo aplicaciones robustas, escalables y con una experiencia de usuario óptima, desde la base de datos hasta la interfaz.
                            </p>

                            <div className="mt-10 flex flex-col min-[420px]:flex-row min-[420px]:flex-wrap items-stretch min-[420px]:items-center gap-x-6 gap-y-4">
                                <a
                                    href="#projects"
                                    className={`inline-flex items-center justify-center rounded-md bg-slate-100 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-white ${focus}`}
                                >
                                    Ver proyectos
                                </a>

                                <a
                                    href={cv}
                                    download="CV_SantiagoCabrerizo.pdf"
                                    className={`inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900 ${focus}`}
                                >
                                    <Download size={18} aria-hidden="true" />
                                    Descargar CV
                                </a>

                                <a
                                    href="#contact"
                                    className={`text-center font-medium text-slate-300 underline decoration-slate-600 underline-offset-[6px] transition-colors hover:text-white hover:decoration-slate-300 ${focus}`}
                                >
                                    Contacto
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Ficha + redes */}
                    <motion.aside
                        {...fade}
                        className="lg:col-span-4 lg:col-start-9"
                        aria-label="Resumen"
                    >
                        <dl className="border-b border-slate-800">
                            {ficha.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 border-t border-slate-800 py-4"
                                >
                                    <dt className="text-slate-500">{label}</dt>
                                    <dd className="text-slate-100">{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-6 flex items-center gap-6 text-slate-400">
                            <a
                                href="https://github.com/SantiagoCabrerizo"
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 transition-colors hover:text-white ${focus}`}
                            >
                                <Github size={18} aria-hidden="true" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santiago-cabrerizo-0a6097240/"
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 transition-colors hover:text-white ${focus}`}
                            >
                                <Linkedin size={18} aria-hidden="true" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
