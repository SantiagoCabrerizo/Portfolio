import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, Terminal } from 'lucide-react';
import cv from '../assets/CV_SantiagoCabrerizo.pdf';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-950">
            {/* Grid de fondo tipo blueprint */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }}
            />

            {/* Fade radial para que el grid se difumine hacia los bordes */}
            <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,transparent_10%,black_80%)]" />

            {/* Blobs animados */}
            <motion.div
                className="absolute top-10 left-0 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                    {/* Columna de texto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge de disponibilidad */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 text-sm font-mono"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                            </span>
                            Disponible para nuevos proyectos
                        </motion.div>

                        <h2 className="text-cyan-400 font-mono text-sm md:text-base tracking-[0.2em] mb-4 uppercase">
                            Hola, soy Santiago Cabrerizo
                        </h2>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
                            Desarrollador de{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Software
                            </span>
                            <br />
                            <span className="text-slate-500">&amp; Estudiante de</span>
                            <br />
                            Ingeniería en Sistemas
                        </h1>

                        <p className="max-w-xl mx-auto lg:mx-0 text-slate-400 text-lg mb-10 leading-relaxed">
                            Transformo ideas complejas en soluciones digitales elegantes.
                            Especializado en crear aplicaciones web modernas, escalables y de
                            alto rendimiento.
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                            >
                                Ver Proyectos <ArrowRight size={20} />
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-3 border border-slate-700 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 text-slate-200"
                            >
                                Contáctame
                            </a>

                            {/* Botón de Descarga de CV */}
                            <a
                                href={cv}
                                download="CV_SantiagoCabrerizo.pdf"
                                className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all flex items-center gap-2 group"
                            >
                                Descargar CV
                                <Download
                                    size={20}
                                    className="group-hover:translate-y-1 transition-transform duration-300"
                                />
                            </a>
                        </div>

                        {/* Redes Sociales */}
                        <div className="flex justify-center lg:justify-start gap-6 text-slate-400">
                            <a
                                href="https://github.com/SantiagoCabrerizo"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santiago-cabrerizo-0a6097240/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-400 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Columna visual: terminal flotante (elemento signature) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
                        >
                            {/* Barra superior */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 flex items-center gap-1.5 text-slate-500 text-xs font-mono">
                                    <Terminal size={12} /> santiago@portfolio
                                </span>
                            </div>

                            {/* Cuerpo de la terminal */}
                            <div className="p-6 font-mono text-sm space-y-2.5 text-left">
                                <p className="text-slate-500">
                                    <span className="text-purple-400">const</span> dev = {'{'}
                                </p>
                                <p className="text-slate-300 pl-4">
                                    nombre: <span className="text-cyan-300">'Santiago Cabrerizo'</span>,
                                </p>
                                <p className="text-slate-300 pl-4">
                                    rol: <span className="text-cyan-300">'Full-Stack Developer'</span>,
                                </p>
                                <p className="text-slate-300 pl-4">
                                    stack: [<span className="text-cyan-300">'React'</span>,{' '}
                                    <span className="text-cyan-300">'Node'</span>,{' '}
                                    <span className="text-cyan-300">'...'</span>],
                                </p>
                                <p className="text-slate-300 pl-4">
                                    estado: <span className="text-cyan-300">'aprendiendo siempre'</span>
                                </p>
                                <p className="text-slate-500">{'}'}</p>
                                <p className="text-green-400 pt-2 flex items-center gap-1">
                                    <span>$</span>
                                    <span>npm run build-future</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: 'steps(1)' }}
                                        className="inline-block w-2 h-4 bg-green-400 ml-1"
                                    />
                                </p>
                            </div>
                        </motion.div>

                        {/* Acento decorativo detrás de la terminal */}
                        <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-xl border border-cyan-500/20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
