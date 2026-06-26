import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Users, GitBranch } from 'lucide-react';

const skills = [
    {
        category: "Front-End",
        techs: ["React", "React Native", "Tailwind CSS", "TypeScript"],
        icon: Code2,
        span: "md:col-span-2 md:row-span-2",
    },
    {
        category: "Back-End",
        techs: ["Node.js", "Express", "Java", "Sping", "API RESTful"],
        icon: Server,
        span: "md:col-span-2 md:row-span-2",
    },
    {
        category: "Bases de Datos",
        techs: ["MySQL", "SQLite", "MongoDB", "Supabase"],
        icon: Database,
        span: "md:col-span-2",
    },
    {
        category: "Herramientas",
        techs: ["Git/GitHub", "Docker", "Vite", "Next.js"],
        icon: Wrench,
        span: "md:col-span-2",
    },
    {
        category: "Colaboración y Gestión",
        techs: ["Slack", "Trello", "Notion", "ClickUp", "GitHub Backlog"],
        icon: Users,
        span: "md:col-span-3",
    },
    {
        category: "Metodologías Ágiles",
        techs: ["SCRUM"],
        icon: GitBranch,
        span: "md:col-span-1",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Grid de fondo tipo blueprint, coherente con el Hero */}
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
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">
                        // skills.json
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                        Stack Tecnológico
                    </h2>
                    <p className="text-slate-400">Las herramientas que utilizo</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(0,auto)] gap-6">
                    {skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`group relative bg-slate-900 p-7 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors overflow-hidden ${skillGroup.span}`}
                            >
                                {/* Glow decorativo en hover */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                                        <span className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-purple-400 transition-colors">
                                            <Icon size={18} />
                                        </span>
                                        <h3 className="text-lg font-bold text-white">
                                            {skillGroup.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-3 content-start">
                                        {skillGroup.techs.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-slate-800 text-cyan-300 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
