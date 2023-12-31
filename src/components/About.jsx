import React, { useEffect } from 'react'

export const About = () => {

    useEffect(()=>{
        AOS.init()
    }),[]

    return (
        <div className="about center d-flex align-items-center" id='about'>
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3 ">Sobre Mí<span className="purple">.</span></h1>
                    <p className="lead" data-aos="fade-up" >
                        Programador Web Full Stack. Actualmente me encuentro cursando la carrera de Ingeniería en Sistemas en la
                        Universidad Tecnológica Nacional (Argentina). Dispuesto a seguir adquiriendo conocimientos para poder mejorar tanto mis
                        habilidades duras como blandas, y así, crecer profesionalmente como programador. Mis prácticas, tanto en la universidad
                        como en la carrera de programador, me han permitido consolidar una base sólida en el desarrollo web.
                    </p>
                </div>
            </div>
        </div>
    )
}