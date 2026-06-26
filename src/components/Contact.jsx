import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const emailValue = watch("email");

    const onSubmit = async (data) => {
        setErrorMsg('');

        // Configuración de EmailJS
        const serviceId = 'service_khrgpdb';
        const templateId = 'template_dohxq98';
        const publicKey = '0ZLWzUC5NjLuJYUKE';

        const templateParams = {
            from_name: data.nombre,
            from_email: data.email,
            message: data.mensaje,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setIsSuccess(true);
            reset(); // Limpiar formulario

            // Ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => setIsSuccess(false), 5000);

        } catch (error) {
            console.error('Error al enviar:', error);
            setErrorMsg('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
        }
    };

    const inputClass = (fieldError) =>
        `w-full bg-slate-950 border rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
            fieldError
                ? 'border-red-500 focus:border-red-500'
                : 'border-slate-800 focus:border-cyan-500'
        }`;

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Grid de fondo tipo blueprint, coherente con el resto de la web */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                }}
            />

            {/* Blobs ambientales */}
            <motion.div
                className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase">
                        // contact.send()
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                        Hablemos
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        ¿Tienes un proyecto en mente? Estoy listo para nuevas oportunidades.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                    {/* Tarjeta de contacto estilo terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col"
                    >
                        {/* Barra superior tipo terminal */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                            <span className="w-3 h-3 rounded-full bg-red-500/70" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <span className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-3 flex items-center gap-1.5 text-slate-500 text-xs font-mono">
                                <Terminal size={12} /> contacto.json
                            </span>
                        </div>

                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="font-mono text-sm space-y-2.5 mb-8">
                                <p className="text-slate-500">{'{'}</p>
                                <p className="text-slate-300 pl-4">
                                    estado: <span className="text-green-400">'disponible'</span>,
                                </p>
                                <p className="text-slate-300 pl-4">
                                    respuesta: <span className="text-cyan-300">'24-48hs'</span>
                                </p>
                                <p className="text-slate-500">{'}'}</p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-white font-medium ">
                                        santiagocabrerizo24@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                            {/* Input Nombre */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    {...register("nombre", {
                                        required: "El nombre es obligatorio",
                                        minLength: { value: 2, message: "Mínimo 2 caracteres" }
                                    })}
                                    className={inputClass(errors.nombre)}
                                />
                                {errors.nombre && <span className="text-red-400 text-xs mt-1 block">{errors.nombre.message}</span>}
                            </div>

                            {/* Input Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "El email es obligatorio",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email inválido"
                                        }
                                    })}
                                    className={inputClass(errors.email)}
                                />
                                {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                            </div>

                            {/* Input Confirmar Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Confirmar Email"
                                    {...register("confirmEmail", {
                                        required: "Debes confirmar tu email",
                                        validate: (value) => value === emailValue || "Los correos no coinciden"
                                    })}
                                    className={inputClass(errors.confirmEmail)}
                                />
                                {errors.confirmEmail && <span className="text-red-400 text-xs mt-1 block">{errors.confirmEmail.message}</span>}
                            </div>

                            {/* Textarea Mensaje */}
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder="Mensaje"
                                    {...register("mensaje", { required: "El mensaje no puede estar vacío" })}
                                    className={`${inputClass(errors.mensaje)} resize-none`}
                                ></textarea>
                                {errors.mensaje && <span className="text-red-400 text-xs mt-1 block">{errors.mensaje.message}</span>}
                            </div>

                            {/* Feedback de errores generales */}
                            {errorMsg && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
                                    <AlertCircle size={16} /> {errorMsg}
                                </div>
                            )}

                            {/* Feedback de Éxito */}
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-green-400 text-sm bg-green-900/20 p-3 rounded-lg"
                                >
                                    <CheckCircle size={16} /> ¡Mensaje enviado con éxito!
                                </motion.div>
                            )}

                            {/* Botón Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? 'Enviando...' : (
                                    <>
                                        Enviar Mensaje <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
