import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const body = { fontFamily: "'Hanken Grotesk', system-ui, sans-serif" };

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

const inputClass = (hasError) =>
  `block w-full rounded-md border bg-slate-900 px-4 py-3 text-slate-50 placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-1 ${
    hasError
      ? "border-red-400 focus:border-red-400 focus:ring-red-400"
      : "border-slate-700 focus:border-cyan-400 focus:ring-cyan-400"
  }`;

const ficha = [
  { label: "Estado", value: "Disponible para nuevos proyectos" },
];

function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const emailValue = watch("email");

  const onSubmit = async (data) => {
    setErrorMsg("");

    // Configuración de EmailJS
    const serviceId = "service_q1h5c3s";
    const templateId = "template_tcl30my";
    const publicKey = "LXxH6hSNculp-NQNm";

    const templateParams = {
      from_name: data.nombre,
      from_email: data.email,
      message: data.mensaje,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setErrorMsg(
        "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.",
      );
    }
  };

  const aria = (name) => ({
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section
      id="contact"
      style={body}
      className="border-t border-slate-800 bg-slate-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Texto y datos de contacto */}
          <div className="lg:col-span-5">
            <h2
              style={display}
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-50 sm:text-5xl"
            >
              Hablemos
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate-400">
              Si tienes un proyecto en mente o una propuesta de trabajo,
              escríbeme y lo vemos.
            </p>

            <dl className="mt-10 border-b border-slate-800">
              <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-slate-800 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="text-slate-500">Email</dt>
                <dd>
                  <a
                    href="mailto:santiagocabrerizo24@gmail.com"
                    className={`break-all text-slate-100 underline decoration-slate-600 underline-offset-[6px] transition-colors hover:decoration-slate-300 ${focus}`}
                  >
                    santiagocabrerizo24@gmail.com
                  </a>
                </dd>
              </div>
              {ficha.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-slate-800 py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="text-slate-500">{label}</dt>
                  <dd className="text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-5 lg:col-span-6 lg:col-start-7"
          >
            <Field id="nombre" label="Nombre" error={errors.nombre}>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                {...aria("nombre")}
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 2, message: "Mínimo 2 caracteres" },
                })}
                className={inputClass(errors.nombre)}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...aria("email")}
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                  className={inputClass(errors.email)}
                />
              </Field>

              <Field
                id="confirmEmail"
                label="Confirmar email"
                error={errors.confirmEmail}
              >
                <input
                  id="confirmEmail"
                  type="email"
                  autoComplete="off"
                  {...aria("confirmEmail")}
                  {...register("confirmEmail", {
                    required: "Debes confirmar tu email",
                    validate: (value) =>
                      value === emailValue || "Los correos no coinciden",
                  })}
                  className={inputClass(errors.confirmEmail)}
                />
              </Field>
            </div>

            <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
              <textarea
                id="mensaje"
                rows={5}
                {...aria("mensaje")}
                {...register("mensaje", {
                  required: "El mensaje no puede estar vacío",
                })}
                className={`${inputClass(errors.mensaje)} resize-y`}
              />
            </Field>

            {errorMsg && (
              <p
                role="alert"
                className="border-l-2 border-red-400 bg-slate-900 px-4 py-3 text-sm text-red-300"
              >
                {errorMsg}
              </p>
            )}

            {isSuccess && (
              <p
                role="status"
                className="border-l-2 border-cyan-400 bg-slate-900 px-4 py-3 text-sm text-slate-200"
              >
                Mensaje enviado. Te responderé a la brevedad.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-md bg-slate-100 px-8 py-3 font-semibold text-slate-950 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto ${focus}`}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
