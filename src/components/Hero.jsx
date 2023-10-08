import React from 'react'
import Perfil from "../assets/Perfil2.webp"
import Cv from "../assets/Santiago Cabrerizo CV.pdf"

export const Hero = () => {

    {/*
    const downloadCV = () => {
        const aTag = document.createElement("a")
        aTag.href = "src/assets/CV - Santiago Cabrerizo.pdf"
        aTag.download = "CV - Santiago Cabrerizo.pfd"
        document.body.appendChild(aTag)
        aTag.click()
        document.body.removeChild(aTag)
    }

*/}


    return (
        <div className='hero'>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="text-center">

                    <div className="d-flex justify-content-center">
                        <img src={Perfil} alt="Img perfil" width={300} className='img-perfil m-5' />
                    </div>

                    <h1 className="display-2 lh-1 mb-3">Hola, soy <span className="purple">Santiago Cabrerizo</span></h1>
                    <p className="display-6 mb-5"><span className='purple'>{'<'}</span> Programador Web Full Stack <span className='purple'>{'>'}</span></p>
                    <hr />

                    <div className="mt-4">
                        <a href={Cv} download={"CV-Santiago Cabrerizo"} target='_blank' className='btn boton'>Descargar CV</a>
                    </div>

                </div>
            </div>
        </div>
    )
}