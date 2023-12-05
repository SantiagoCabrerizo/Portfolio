import React, { useEffect } from 'react'
import Perfil from "../assets/Perfil2.webp"
import Cv from "../assets/Santiago Cabrerizo CV.pdf"

export const Hero = () => {

    useEffect(() => {
        AOS.init()
    }), []

    return (
        <div className='hero'>
            <div className="container col-xxl-8 px-4 pb-5 pt-3">
                <div className="text-center">

                    <div className="d-flex justify-content-center">
                        <img src={Perfil} alt="Img perfil" width={300} className='img-perfil m-5' />
                    </div>

                    <h1 className="display-1 lh-1 mb-3 font-black purple">Santiago Cabrerizo</h1>
                    <p className="display-5 mb-5 font-bold" data-aos='fade-down'><span className='purple'>{'<'}</span> Programador Web Full Stack <span className='purple'>{'>'}</span></p>
                    <hr />

                    <div className="mt-4">
                        <a href={Cv} download={"CV-Santiago Cabrerizo"} target='_blank' className='btn boton'>Descargar CV</a>
                    </div>

                </div>
            </div>
        </div>
    )
}