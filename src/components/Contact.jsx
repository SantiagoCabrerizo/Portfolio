import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Enviar los datos del formulario a Formsubmit (utilizando su API)
    fetch("https://formsubmit.co/santi.cabrerizo69@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(new FormData(e.target)).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setMensajeEnviado(true); // Muestra el mensaje de éxito
        } else {
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      });
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
              <form
                onSubmit={sendEmail}
                className="row g-2"
                method="POST"
                action="https://formsubmit.co/tucorreo@gmail.com"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://tusitio.netlify.app/gracias" />

                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="Nombre"
                    {...register("user_name", { required: true })}
                  />
                  <label htmlFor="floatingInput1">Nombre</label>
                  {errors.user_name && (
                    <span role="alert" className="span-validation d-flex ps-2">
                      Ingrese su nombre
                    </span>
                  )}
                </div>

                <div className="form-floating mb-3 col-md-6">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="Email"
                    {...register("user_email", { required: true })}
                  />
                  <label htmlFor="floatingInput2">Email</label>
                  {errors.user_email && (
                    <span role="alert" className="span-validation d-flex ps-2">
                      Ingrese su email
                    </span>
                  )}
                </div>

                <div className="form-floating mb-3 mx-auto">
                  <textarea
                    className="form-control msg"
                    name="message"
                    id="floatingTextarea1"
                    rows="3"
                    placeholder="Mensaje"
                    {...register("message", { required: true })}
                  ></textarea>
                  <label htmlFor="floatingTextarea1" className="form-label">
                    Mensaje
                  </label>
                  {errors.message && (
                    <span role="alert" className="span-validation d-flex ps-2">
                      Ingrese su mensaje
                    </span>
                  )}
                </div>

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
