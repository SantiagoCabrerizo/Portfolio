import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form';

const serviceId = "5k1b4n4";
const templateId = "template_ly93sva";
const publicKey = "0ZLWzUC5NjLuJYUKE";

export const Contact = () => {

    const form = useRef()

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [mensajeEnviado, setMensajeEnviado] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((res) => {
                setMensajeEnviado(true)
            })



    }



    return (
        <div id='contact'>
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Contacto<span className="purple">.</span></h1>

                    <div className='py-3 text-start'>


                        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <div className='row'>
                                <div className="mb-3 col ">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                                    <input type="text" name='user_name' className="form-control" id="exampleFormControlInput1"
                                        {...register("user_name", { required: true })} />
                                    {errors.user_name && <span className='span-validation'>Ingrese su nombre</span>}
                                </div>
                                <div className="mb-3 col">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="email" name='user_email' className="form-control" id="exampleFormControlInput2"
                                        {...register("user_email", { required: true })} />
                                    {errors.user_email && <span className='span-validation'>Ingrese su email</span>}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3"
                                    {...register("message", { required: true })}></textarea>
                                {errors.message && <span className='span-validation'>Ingrese su mensaje</span>}
                            </div>

                            <div className='d-flex justify-content-center mt-4'>

                                {
                                    mensajeEnviado ?
                                        <div>
                                            <button type="button" className="boton-form-enviado">Enviado
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                                </svg>
                                            </button>
                                        </div>
                                        :
                                        <div>
                                            <button type="submit" className="boton-form">Enviar
                                                <div className="arrow-wrapper">
                                                    <div className="arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                }
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}