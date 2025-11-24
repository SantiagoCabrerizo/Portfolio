import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
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

    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Hablemos</h2>
                        <p className="text-slate-400">¿Tienes un proyecto en mente? Estoy listo para nuevas oportunidades.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-white font-medium">santi.cabrerizo69@gmail.com</p>
                                </div>
                            </div>

                        </div>

                        <div className='md:col-span-2 pl-6'>
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
                                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.nombre ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'}`}
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
                                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'}`}
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
                                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.confirmEmail ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'}`}
                                    />
                                    {errors.confirmEmail && <span className="text-red-400 text-xs mt-1 block">{errors.confirmEmail.message}</span>}
                                </div>

                                {/* Textarea Mensaje */}
                                <div>
                                    <textarea
                                        rows="4"
                                        placeholder="Mensaje"
                                        {...register("mensaje", { required: "El mensaje no puede estar vacío" })}
                                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${errors.mensaje ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-cyan-500'}`}
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
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : (
                                        <>
                                            Enviar Mensaje <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}