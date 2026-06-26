import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Inicio', href: '#home', id: 'home' },
        // { name: 'Sobre Mí', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Proyectos', href: '#projects', id: 'projects' },
        { name: 'Contacto', href: '#contact', id: 'contact' },
    ];

    // Sombra/blur más marcado al scrollear
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll-spy: detecta qué sección está visible para resaltarla en el menú
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b ${
                scrolled
                    ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-lg shadow-black/20'
                    : 'bg-slate-950/60 backdrop-blur-sm border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="relative">
                            <Code2 className="w-7 h-7 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </span>
                        <span className="text-lg font-bold tracking-tight text-white font-mono">
                            <span className="text-slate-500">&lt;</span>
                            Santiago<span className="text-cyan-400">Cabrerizo</span>
                            <span className="text-slate-500">/&gt;</span>
                        </span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                            isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                                        }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-active-pill"
                                                className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-cyan-400 transition-colors p-1"
                            aria-label="Abrir menú"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-3 pt-2 pb-4 space-y-1 font-mono">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                                            isActive
                                                ? 'bg-cyan-500/10 text-cyan-400'
                                                : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-400'
                                        }`}
                                    >
                                        <span className="text-slate-600 text-xs">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
