import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [mensajeEnviado, setMensajeEnviado] = useState(false)

    const onSubmit = (data, e) => {
        e.target.submit()
        setMensajeEnviado(true)
    }

    return (
        <div id='contact' className='center d-flex align-items-center'>
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3">
                        Contacto<span className="purple">.</span>
                    </h1>

                    <div className='form-signin py-3'>
                        {/* Formulario para Netlify */}
                        <form 
                            name="contact" 
                            method="POST" 
                            data-netlify="true" 
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit(onSubmit)}
                            className='row g-2'
                        >
                            {/* Campo oculto para Netlify */}
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />

                            <div className="form-floating mb-3 col-md-6" data-aos='fade-up'>
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

                            <div className="form-floating mb-3 col-md-6" data-aos='fade-up'>
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

                            <div className="form-floating mb-3 mx-auto" data-aos='fade-up'>
                                <textarea
                                    name="message"
                                    className="form-control msg"
                                    id="floatingTextarea1"
                                    rows="3"
                                    placeholder="Mensaje"
                                    {...register("message", { required: true })}
                                ></textarea>
                                <label htmlFor="floatingTextarea1">Mensaje</label>
                                {errors.message && (
                                    <span role="alert" className="span-validation d-flex ps-2">
                                        Ingrese su mensaje
                                    </span>
                                )}
                            </div>

                            <div className='d-flex justify-content-center mt-4'>
                                {mensajeEnviado ? (
                                    <button type="button" className="boton-form-enviado">
                                        Enviado ✔
                                    </button>
                                ) : (
                                    <button type="submit" className="boton-form">
                                        Enviar
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* Formulario oculto para que Netlify lo detecte en el build */}
                        <form name="contact" netlify hidden>
                            <input type="text" name="user_name" />
                            <input type="email" name="user_email" />
                            <textarea name="message"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
