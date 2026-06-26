import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Img Proyectos
import imgGlamping from "../assets/projects/Glamping.webp";
import imgChatbot from "../assets/projects/ChatbotChallenge.webp";
import imgInmobiliaria from "../assets/projects/Inmobiliaria_proyecto.webp";
import imgVentas1 from "../assets/projects/gestorVentas/gestor_home.webp";
import imgVentas2 from "../assets/projects/gestorVentas/gestor_prod.webp";
import imgVentas3 from "../assets/projects/gestorVentas/gestor_venta.webp";
import imgVentas4 from "../assets/projects/gestorVentas/gestor_cliente.webp";
import imgVentas5 from "../assets/projects/gestorVentas/gestor_deuda.webp";
import imgRectificacionesMoron from "../assets/projects/landing_moron.webp";

// Img app escritorio RVU
import imgApp1 from "../assets/projects/appRvu/r1.webp";
import imgApp2 from "../assets/projects/appRvu/r2.webp";
import imgApp3 from "../assets/projects/appRvu/r3.webp";
import imgApp4 from "../assets/projects/appRvu/r4.webp";
import imgApp5 from "../assets/projects/appRvu/r5.webp";
import imgApp6 from "../assets/projects/appRvu/r6.webp";
import imgApp7 from "../assets/projects/appRvu/r7.webp";

const projects = [
  {
    title: "Software ERP de Escritorio a medida",
    desc: "Desarrollo integral de una solución de escritorio nativa diseñada para automatizar la administración técnica y financiera de RVU Rectificaciones.",
    techs: ["React.js", "Electron.js", "SQLite", "Tailwind CSS"],
    image: imgApp1,
    gallery: [imgApp1, imgApp2, imgApp3, imgApp4, imgApp5, imgApp6, imgApp7],
  },
  {
    title: "Aplicación Web Full-Stack",
    desc: "Gestión de reservas de glamping con dashboard administrativo.",
    techs: [
      "Node.js",
      "Supabase",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    image: imgGlamping,
    demoUrl: "https://glampingmendoza.com/",
  },
  {
    title: "Aplicación Móvil Full-Stack",
    desc: "Aplicación móvil que centraliza la gestión de stock y ventas, permitiendo controlar existencias y agilizar procesos.",
    techs: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
    ],
    image: imgVentas1,
    gallery: [imgVentas1, imgVentas2, imgVentas3, imgVentas4, imgVentas5],
  },
  {
    title: "Landing Page | RVU Rectificaciones",
    desc: "Landing Page para empresa de rectificaciones.",
    techs: ["React", "Vite", "Tailwind CSS"],
    image: imgRectificacionesMoron,
    demoUrl: "https://rvurectificaciones.com.ar/",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones de navegación
  const nextImage = (e) => {
    e?.stopPropagation();
    if (!selectedProject?.gallery) return;
    setCurrentIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (!selectedProject?.gallery) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedProject.gallery.length) %
        selectedProject.gallery.length,
    );
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  // Manejo de teclado para una mejor UX
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="py-20 bg-slate-900/50 relative min-h-screen overflow-hidden"
    >
      {/* Grid de fondo tipo blueprint, coherente con Hero y Skills */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">
            // proyectos.map()
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Proyectos
          </h2>
        </motion.div>

        {/* PROYECTO DESTACADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 bg-slate-950 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/5 group grid md:grid-cols-2"
        >
          <div className="h-64 md:h-full w-full flex items-center justify-center relative bg-slate-900 order-1 md:order-none">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            {featured.gallery && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(featured)}
                  className="text-white flex items-center gap-2 font-medium bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors"
                >
                  <Images size={20} /> Ver Galería
                </button>
              </div>
            )}
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 w-fit">
              Proyecto destacado
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {featured.title}
            </h3>
            <p className="text-slate-400 mb-6">{featured.desc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {featured.techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto border-t border-slate-800 pt-5">
              {featured.repoUrl && (
                <a
                  href={featured.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={18} /> Code
                </a>
              )}
              {featured.demoUrl && (
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              {featured.gallery && (
                <button
                  onClick={() => setSelectedProject(featured)}
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                >
                  Interfaces
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* RESTO DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors shadow-lg group flex flex-col"
            >
              <div className="h-48 w-full flex items-center justify-center relative bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {project.gallery && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-white flex items-center gap-2 font-medium bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors"
                    >
                      <Images size={20} /> Ver Galería
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
                    <span
                      key={idx}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto border-t border-slate-800 pt-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.gallery && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                    >
                      Interfaces
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE GALERÍA (ESTILO SLIDER) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del Modal */}
              <div className="flex justify-between items-center mb-4 text-white">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Visualizando detalle de interfaz
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Contenedor Principal de la Imagen */}
              <div className="relative flex-1 flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
                {/* Botón Prev */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-cyan-500 transition-all border border-white/10 backdrop-blur-sm"
                >
                  <ChevronLeft size={32} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedProject.gallery[currentIndex]}
                    alt="Preview"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-[70vh] object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {/* Botón Next */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-cyan-500 transition-all border border-white/10 backdrop-blur-sm"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Footer del Modal (Indicadores) */}
              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {selectedProject.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        idx === currentIndex
                          ? "w-8 bg-cyan-400"
                          : "w-2 bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-500 text-sm font-mono">
                  {currentIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
