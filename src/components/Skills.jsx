import { motion } from 'framer-motion';

const skills = [
    { category: "Front-End", techs: ["React", "React Native", "Tailwind CSS", "TypeScript"] },
    { category: "Back-End", techs: ["Node.js", "Express", "Java", "Sping", "API RESTful"] },
    { category: "Bases de Datos", techs: ["MySQL", "SQLite", "MongoDB", "Supabase"] },
    { category: "Herramientas", techs: ["Git/GitHub", "Docker", "Vite", "Next.js"] },
    { category: "Colaboración y Gestión", techs: ["Slack", "Trello", "Notion", "ClickUp", "GitHub Backlog"] },
    { category: "Metodologías Ágiles", techs: ["SCRUM"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stack Tecnológico</h2>
                    <p className="text-slate-400">Las herramientas que utilizo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.techs.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-800 text-cyan-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}