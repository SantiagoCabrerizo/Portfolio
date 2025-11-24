import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import cv from '../assets/CV-SantiagoCabrerizo.pdf';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-cyan-400 font-medium tracking-wider mb-4">HOLA, SOY SANTIAGO CABRERIZO</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Desarrollador de Software <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            & Estudiante de Ingeniería en Sistemas
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10">
                        Transformo ideas complejas en soluciones digitales elegantes. Especializado en crear aplicaciones web modernas, escalables y de alto rendimiento.
                    </p>

                    {/* Botones de Acción */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-transform hover:scale-105 flex items-center gap-2"
                        >
                            Ver Proyectos <ArrowRight size={20} />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 border border-slate-700 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
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
                            <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                        </a>
                    </div>

                    {/* Redes Sociales */}
                    <div className="mt-12 flex justify-center gap-6 text-slate-400">
                        <a href="https://github.com/SantiagoCabrerizo" target='_blank' className="hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/santiago-cabrerizo-0a6097240/" target='_blank' className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}