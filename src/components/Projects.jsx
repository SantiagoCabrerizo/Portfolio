import { useState, useEffect, useRef } from "react";
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

const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const bodyFont = { fontFamily: "'Hanken Grotesk', system-ui, sans-serif" };

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

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

/* Captura del proyecto. Si tiene galería, es un botón (funciona también en touch). */
function Media({ project, onOpen }) {
  const box =
    "block w-full aspect-[16/10] overflow-hidden rounded-md border border-slate-800 bg-slate-900";
  const img = (
    <img
      src={project.image}
      alt={`Captura de ${project.title}`}
      loading="lazy"
      className="h-full w-full object-contain"
    />
  );

  if (!project.gallery) return <div className={box}>{img}</div>;

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Ver interfaces de ${project.title}`}
      className={`${box} cursor-zoom-in transition-colors hover:border-slate-600 ${focus}`}
    >
      {img}
    </button>
  );
}

function Links({ project, onOpen }) {
  const link = `inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white ${focus}`;
  if (!project.repoUrl && !project.demoUrl && !project.gallery) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <Github size={16} aria-hidden="true" /> Código
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <ExternalLink size={16} aria-hidden="true" /> Ver sitio
        </a>
      )}
      {project.gallery && (
        <button type="button" onClick={() => onOpen(project)} className={link}>
          <Images size={16} aria-hidden="true" /> Ver interfaces (
          {project.gallery.length})
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const closeRef = useRef(null);

  const openModal = (project) => {
    setCurrentIndex(0);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

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

  // Teclado: flechas y Escape
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

  // Bloquea el scroll de fondo y lleva el foco al botón de cerrar
  useEffect(() => {
    if (!selectedProject) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selectedProject]);

  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      style={bodyFont}
      className="border-t border-slate-800 bg-slate-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="mb-14 max-w-xl sm:mb-16">
          <h2
            style={display}
            className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-50 sm:text-5xl"
          >
            Proyectos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Una selección de lo que construí, con el stack y el código o el
            sitio en producción cuando están disponibles.
          </p>
        </header>

        {/* Proyecto principal: más grande, sin etiqueta */}
        <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <Media project={featured} onOpen={openModal} />
          </div>
          <div className="lg:col-span-5">
            <h3
              style={display}
              className="text-2xl font-semibold tracking-[-0.02em] text-slate-50 sm:text-3xl"
            >
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">
              {featured.desc}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {featured.techs.join(", ")}
            </p>
            <Links project={featured} onOpen={openModal} />
          </div>
        </article>

        {/* Resto */}
        <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-slate-800 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <article key={project.title} className="flex flex-col">
              <Media project={project} onOpen={openModal} />
              <h3
                style={display}
                className="mt-5 text-xl font-semibold tracking-[-0.01em] text-slate-50"
              >
                {project.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-300">
                {project.desc}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {project.techs.join(", ")}
              </p>
              <Links project={project} onOpen={openModal} />
            </article>
          ))}
        </div>
      </div>

      {/* Galería */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Interfaces de ${selectedProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
            onClick={closeModal}
          >
            <div
              className="flex h-full w-full max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3
                  style={display}
                  className="text-xl font-semibold text-slate-50 sm:text-2xl"
                >
                  {selectedProject.title}
                </h3>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Cerrar galería"
                  className={`rounded-full p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white ${focus}`}
                >
                  <X size={28} aria-hidden="true" />
                </button>
              </div>

              <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-md border border-slate-800 bg-slate-900">
                {selectedProject.gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Imagen anterior"
                    className={`absolute left-3 z-10 rounded-full border border-slate-700 bg-slate-950/80 p-2.5 text-slate-100 transition-colors hover:bg-slate-800 ${focus}`}
                  >
                    <ChevronLeft size={24} aria-hidden="true" />
                  </button>
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedProject.gallery[currentIndex]}
                    alt={`${selectedProject.title}, imagen ${currentIndex + 1} de ${selectedProject.gallery.length}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[70vh] max-w-full object-contain"
                  />
                </AnimatePresence>

                {selectedProject.gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Imagen siguiente"
                    className={`absolute right-3 z-10 rounded-full border border-slate-700 bg-slate-950/80 p-2.5 text-slate-100 transition-colors hover:bg-slate-800 ${focus}`}
                  >
                    <ChevronRight size={24} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center">
                  {selectedProject.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Ir a la imagen ${idx + 1}`}
                      aria-current={idx === currentIndex}
                      className={`p-1.5 ${focus}`}
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-8 bg-slate-100"
                            : "w-2 bg-slate-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-sm tabular-nums text-slate-400">
                  {currentIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
