import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const emailValue = watch("user_email");

  const sendEmail = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Campos extra para Formsubmit
      formData.append("_captcha", "false");
      formData.append("_next", "https://santiagocabrerizo.com");
      formData.append("_template", "table");
      formData.append("_subject", "Nuevo mensaje desde el portfolio");
      formData.append("_replyto", data.user_email);

      const response = await fetch("https://formsubmit.co/santi.cabrerizo69@gmail.com", {
        method: "POST",
        body: formData,
      });

    console.log(`Response: ${response}`);

      if (response.ok) {
        setMensajeEnviado(true);
      } else {
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div id="contact" className="center d-flex align-items-center">
      <div className="container col-xxl-8 px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3">
            Contacto<span className="purple">.</span>
          </h1>

          <div className="form-signin py-3">
            {mensajeEnviado ? (
              <div>
                <h2>¡Gracias por tu mensaje! Pronto nos pondremos en contacto.</h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit(sendEmail)} className="row g-2">
                
                {/* Nombre */}
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    {...register("user_name", {
                      required: "Ingrese su nombre",
                      minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    })}
                  />
                  <label>Nombre</label>
                  {errors.user_name && (
                    <span className="span-validation">{errors.user_name.message}</span>
                  )}
                </div>

                {/* Apellido */}
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    {...register("user_lastname", {
                      required: "Ingrese su apellido",
                      minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    })}
                  />
                  <label>Apellido</label>
                  {errors.user_lastname && (
                    <span className="span-validation">{errors.user_lastname.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("user_email", {
                      required: "Ingrese su email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de email inválido",
                      },
                    })}
                  />
                  <label>Email</label>
                  {errors.user_email && (
                    <span className="span-validation">{errors.user_email.message}</span>
                  )}
                </div>

                {/* Confirmar Email */}
                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Confirmar Email"
                    {...register("confirm_email", {
                      required: "Confirme su email",
                      validate: (value) =>
                        value === emailValue || "Los emails no coinciden",
                    })}
                  />
                  <label>Confirmar Email</label>
                  {errors.confirm_email && (
                    <span className="span-validation">{errors.confirm_email.message}</span>
                  )}
                </div>

                {/* Mensaje */}
                <div className="form-floating mb-3 mx-auto">
                  <textarea
                    className="form-control msg"
                    rows="3"
                    placeholder="Mensaje"
                    {...register("message", {
                      required: "Ingrese su mensaje",
                      minLength: { value: 10, message: "Mínimo 10 caracteres" },
                    })}
                  ></textarea>
                  <label>Mensaje</label>
                  {errors.message && (
                    <span className="span-validation">{errors.message.message}</span>
                  )}
                </div>

                {/* Botón */}
                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="boton-form">
                    Enviar
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
