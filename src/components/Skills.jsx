import React from 'react'
import logoJS from '../assets/javascript.webp'
import logoHTML from '../assets/html-5.webp'
import logoCSS from '../assets/css-3.webp'
import logoReact from '../assets/react.webp'
import logoJava from '../assets/java.webp'
import logoNode from '../assets/node.webp'
import logoSpring from '../assets/spring.webp'
import logoMysql from '../assets/mysql.webp'


export const Skills = () => {
    return (
        <div className='habilidades' id='habilidades'>
            <div className="container album col-xxl-8 px-4 py-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1">Habilidades<span className="purple">.</span></h1>

                <div className="d-flex flex-wrap gap-3 justify-content-center py-5">

                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoJS} alt="JS logo" />JavaScript
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoHTML} alt="HTML logo" />HTML
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoCSS} alt="CSS logo" />CSS
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoReact} alt="REACT logo" />React
                    </span>

                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoJava} alt="Java logo" />Java
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoNode} alt="Node logo" />NodeJS
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoSpring} alt="Spring logo" />Spring
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src={logoMysql} alt="MySQL logo" />MySQL
                    </span>

                </div>

            </div>
        </div>
    )
}