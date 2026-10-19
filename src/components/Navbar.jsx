import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const body = { fontFamily: "'Hanken Grotesk', system-ui, sans-serif" };

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

const navLinks = [
  { name: "Inicio", href: "#home", id: "home" },
  // { name: 'Sobre mí', href: '#about', id: 'about' },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Proyectos", href: "#projects", id: "projects" },
  { name: "Contacto", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Borde y fondo más sólido al scrollear
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: marca la sección visible
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape cierra el menú mobile
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      style={body}
      className={`fixed inset-x-0 top-0 z-50 border-b bg-slate-950/90 backdrop-blur transition-colors duration-300 ${
        scrolled || isOpen ? "border-slate-800" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        {/* Nombre */}
        <a
          href="#home"
          style={display}
          className={`text-lg font-semibold tracking-[-0.02em] text-slate-50 ${focus}`}
        >
          <span className="text-slate-50">&lt;</span> / SC 
          <span className="text-slate-50"> &gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm font-medium transition-colors ${focus} ${
                    isActive
                      ? "text-slate-50 underline decoration-cyan-400 decoration-2 underline-offset-[10px]"
                      : "text-slate-400 hover:text-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Botón mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          className={`-mr-2 rounded-md p-2 text-slate-300 transition-colors hover:text-white md:hidden ${focus}`}
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Menú mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-5 border-t border-slate-800 pb-4 sm:mx-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li
                    key={link.id}
                    className="border-b border-slate-800 last:border-b-0"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      style={display}
                      className={`flex items-center justify-between py-4 text-xl font-medium transition-colors ${focus} ${
                        isActive
                          ? "text-slate-50"
                          : "text-slate-400 hover:text-slate-50"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span
                          className="h-2 w-2 rounded-full bg-cyan-400"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
