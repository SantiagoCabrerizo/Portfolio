import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Images, X } from 'lucide-react';
// Img Proyectos
import imgGlamping from '../assets/projects/Glamping.webp'
import imgChatbot from '../assets/projects/ChatbotChallenge.webp'
import imgInmobiliaria from '../assets/projects/Inmobiliaria_proyecto.webp'
import imgRectificaciones from '../assets/projects/RVU-project.webp'
import imgVentas1 from '../assets/projects/gestorVentas/gestor_home.webp'
import imgVentas2 from '../assets/projects/gestorVentas/gestor_prod.webp'
import imgVentas3 from '../assets/projects/gestorVentas/gestor_venta.webp'
import imgVentas4 from '../assets/projects/gestorVentas/gestor_cliente.webp'
import imgVentas5 from '../assets/projects/gestorVentas/gestor_deuda.webp'

const projects = [
    {
        title: "Aplicación Web Full-Stack",
        desc: "Gestión de reservas de glamping con dashboard administrativo.",
        techs: ["Node.js", "Supabase", "TypeScript", "React", "Next.js", "Tailwind CSS",],
        image: imgGlamping,
        demoUrl: "https://glampingmendoza.com/"
    },
    {
        title: "Aplicación Móvil Full-Stack",
        desc: "Aplicación móvil que centraliza la gestión de stock y ventas, permitiendo controlar existencias, registrar operaciones y agilizar los procesos comerciales.",
        techs: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Supabase"],
        image: imgVentas1,
        gallery: [
            imgVentas2,
            imgVentas3,
            imgVentas4,
            imgVentas5,
        ]
    },
    {
        title: "Landing Page",
        desc: "Landing Page para empresa de rectificaciones.",
        techs: ["React", "Vite", "Tailwind CSS"],
        image: imgRectificaciones,
        demoUrl: "https://rectificacionesvalledeuco.netlify.app/",
    },
    {
        title: "ChatBot",
        desc: "Aplicación Full-Stack de gestor de pedidos de Sushi.",
        techs: ["Node.js", "JavaScript", "MongoDB", "React", "Tailwind CSS"],
        image: imgChatbot,
        repoUrl: "https://github.com/SantiagoCabrerizo/ChallengeChatBot",
    },
    {
        title: "Proyecto Inmobiliaria",
        desc: "Aplicación Full-Stack para gestión de inmuebles.",
        techs: ["Java", "Spring Boot", "MySQL", "React"],
        image: imgInmobiliaria,
        repoUrl: "https://github.com/SantiagoCabrerizo/Proyecto-Inmobiliaria",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-slate-900/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Proyectos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-lg group flex flex-col"
                        >
                            {/* Imagen Principal */}
                            <div className={`h-48 w-full flex items-center justify-center relative`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay al hacer hover si hay galería */}
                                {project.gallery && (
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-white flex items-center gap-2 font-medium"
                                        >
                                            <Images size={20} /> Ver Interfaces
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techs.map((tech, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* 2. Renderizado Condicional de Botones */}
                                <div className="flex gap-4 mt-auto">
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                        >
                                            <Github size={16} /> Code
                                        </a>
                                    )}

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                        >
                                            <ExternalLink size={16} /> Live
                                        </a>
                                    )}

                                    {/* Botón especial para galería si no hay links o adicional */}
                                    {project.gallery && (
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                                        >
                                            <Images size={16} /> Interfaces
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Modal para Galería de Imágenes */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)} // Cerrar al hacer click afuera
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 p-6 relative"
                            onClick={(e) => e.stopPropagation()} // Evitar cerrar al clickear dentro
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 rounded-full p-1"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                            <p className="text-slate-400 mb-6">Galería de interfaces</p>

                            {/* Grid de imágenes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedProject.gallery.map((imgSrc, idx) => (
                                    <div key={idx} className="rounded-lg overflow-hidden border border-slate-800 aspect-video bg-slate-950 flex items-center justify-center">
                                        {/* Reemplaza esto con tu etiqueta <img src={imgSrc} /> */}
                                        <img
                                            src={selectedProject.gallery[idx]}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}