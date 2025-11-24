import { motion } from 'framer-motion';
import { BookOpen, Code, Coffee } from 'lucide-react';
import perfil from '../assets/perfil.webp';

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image/Graphic Side */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700 overflow-hidden shadow-xl border border-slate-700 flex items-center justify-center">
                            <img src={perfil} alt="style pixart" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">Disponible para trabajar</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ingeniería + Creatividad</h2>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Como estudiante de <span className="text-cyan-400 font-medium">Ingeniería en Sistemas</span>, poseo una base sólida en algoritmos, estructura de datos y arquitectura de software.
                            Combino esto con mi pasión por el desarrollo web para crear experiencias que no solo funcionan bien, sino que se sienten bien.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {[
                                { icon: Code, title: "Clean Code", desc: "Código mantenible" },
                                { icon: BookOpen, title: "Aprendizaje", desc: "Mejora continua" },
                                { icon: Coffee, title: "Dedicación", desc: "Pasión por crear" }
                            ].map((item, index) => (
                                <div key={index} className="p-4 bg-slate-950 rounded-lg border border-slate-800">
                                    <item.icon className="w-8 h-8 text-purple-500 mb-2" />
                                    <h3 className="font-bold text-white">{item.title}</h3>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}