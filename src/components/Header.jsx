import React from 'react'
import Logo from "../assets/Logo2.png"


export const Header = () => {

    const scrollTo = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid col-xxl-8 px-4 mt-2">

                    <span className='navbar-brand d-flex align-items-center mb-md-0 me-md-auto'>
                        <img src={Logo} alt="Logo" width={350} className='' />
                    </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <ul className="nav nav-list">
                            <li className="nav-item"><a onClick={() => scrollTo('about')} className="nav-link link-body-emphasis list-header">SOBRE MÍ</a></li>
                            <li className="nav-item"><a onClick={() => scrollTo('skills')} className="nav-link link-body-emphasis list-header">HABILIDADES</a></li>
                            <li className="nav-item"><a onClick={() => scrollTo('contact')} className="nav-link link-body-emphasis list-header">CONTACTO</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}