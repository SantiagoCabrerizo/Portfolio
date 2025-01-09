import React, { useEffect, useRef, useState } from 'react'
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

    useEffect(()=>{
        AOS.init()
    }),[]

    return (
        <div id='contact' className='center d-flex align-items-center'>
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3">Contacto<span className="purple">.</span></h1>

                    <div className='form-signin py-3'>

                        <form ref={form} onSubmit={handleSubmit(sendEmail)} className='row g-2'>

                            <div className="form-floating mb-3 col-md-6" data-aos='fade-up' >
                                <input type="text" name='user_name' className="form-control" id="floatingInput1" placeholder='Nombre'
                                    {...register("user_name", { required: true })} /> 
                                <label htmlFor="floatingInput1">Nombre</label>
                                {errors.user_name &&
                                    <span role='alert' className='span-validation d-flex ps-2'>Ingrese su nombre</span>}
                            </div>

                            <div className="form-floating mb-3 col-md-6" data-aos='fade-up'>
                                <input type="email" name='user_email' className="form-control" id="floatingInput2" placeholder='Email'
                                    {...register("user_email", { required: true })} />
                                <label htmlFor="floatingInput2">Email</label>
                                {errors.user_email &&
                                    <span role='alert' className='span-validation d-flex ps-2'>Ingrese su email</span>}
                            </div>

                            <div className="form-floating mb-3 mx-auto" data-aos='fade-up'>
                                <textarea className="form-control msg" name='message' id="floatingTextarea1" rows="3" placeholder='Mensaje'
                                    {...register("message", { required: true })}></textarea>
                                <label htmlFor="floatingTextarea1" className="form-label">Mensaje</label>
                                {errors.message &&
                                    <span role='alert' className='span-validation d-flex ps-2'>Ingrese su mensaje</span>}
                            </div>

                            <div className='d-flex justify-content-center mt-4'>

                                {
                                    mensajeEnviado ?
                                        <div>
                                            <button type="button" className="boton-form-enviado">Enviado
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
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