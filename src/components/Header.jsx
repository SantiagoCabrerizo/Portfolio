import React, { useEffect } from 'react'

export const Header = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid col-xxl-8 px-4 mt-2">

                    <img src="src/assets/Logo2.png" alt="Logo" width={350} className='navbar-brand d-flex align-items-center mb-md-0 me-md-auto' />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <ul className="nav nav-list">
                            <li><a href="#inicio" className="nav-link link-body-emphasis list-header">INICIO</a></li>
                            <li className="nav-item"><a href="#sobreMi" className="nav-link link-body-emphasis list-header">SOBRE MÍ</a></li>
                            <li className="nav-item"><a href="#habilidades" className="nav-link link-body-emphasis list-header">HABILIDADES</a></li>
                            <li className="nav-item"><a href="#contacto" className="nav-link link-body-emphasis list-header">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}