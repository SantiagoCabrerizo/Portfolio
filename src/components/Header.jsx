import React from 'react'
import { Link as Scroll } from 'react-scroll'



export const Header = () => {

    // const scrollTo = (id) => {
    //     const section = document.getElementById(id)
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' })
    //     }
    // }

    return (
        <div id="header" className='backg'>
            <header className='d-flex flex-wrap justify-content-center py-4 '>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Scroll to='about' smooth={true} duration={50} className='nav-link link-body-emphasis list-header font-light'>Sobre mí</Scroll>
                    </li>
                    <li className="nav-item">
                        <Scroll to='skills' smooth={true} duration={50} className='nav-link link-body-emphasis list-header font-light'>Habilidades</Scroll>
                    </li>
                    <li className="nav-item">
                        <Scroll to='contact' smooth={true} duration={50} className='nav-link link-body-emphasis list-header font-light'>Contacto</Scroll>
                    </li>
                    <li className="nav-item">
                        <Scroll to='/' smooth={true} duration={50} className='nav-link link-body-emphasis list-header font-light disabled'>Proyectos</Scroll>
                    </li>
                </ul>
            </header>
        </div>
    )
}