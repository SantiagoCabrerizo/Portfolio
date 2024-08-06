import React, { useEffect } from 'react'

export const About = () => {

    useEffect(() => {
        AOS.init()
    }), []

    return (
        <div className="about center d-flex align-items-center" id='about'>
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3 ">Sobre Mí<span className="purple">.</span></h1>
                    <p className="lead" data-aos="fade-up" >
                        Programador Full Stack con conocimientos y experiencia en la creación de
                        aplicaciones web. Mi experiencia incluye tanto el diseño como el desarrollo de
                        aplicaciones escalables, la integración de APIs, el uso de herramientas de control de
                        versiones y estoy familiarizado con prácticas ágiles como SCRUM.<br/>
                        Además, me encuentro cursando la carrera de Ingeniería en Sistemas en la Universidad Tecnológica Nacional FRM.
                    </p>
                </div>
            </div>
        </div>
    )
}