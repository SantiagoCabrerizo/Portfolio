import { useEffect } from 'react'
import logoJS from '../assets/skills-logos/javascript.webp'
import logoHTML from '../assets/skills-logos/html-5.webp'
import logoCSS from '../assets/skills-logos/css-3.webp'
import logoReact from '../assets/skills-logos/react.webp'
import logoJava from '../assets/skills-logos/java.webp'
import logoNode from '../assets/skills-logos/node.webp'
import logoSpring from '../assets/skills-logos/spring.webp'
import logoMysql from '../assets/skills-logos/mysql.webp'
import logoTailwind from '../assets/skills-logos/tailwind.webp'
import logoNext from '../assets/skills-logos/nextjs.webp'
import logoTypescript from '../assets/skills-logos/typescript.webp'
import logoGit from '../assets/skills-logos/git.webp'
import logoMongo from '../assets/skills-logos/mongodb.webp'
import logoSupabase from '../assets/skills-logos/supabase.webp'


export const Skills = () => {

    useEffect(() => {
        AOS.init()
    }), []

    return (
        <div className='center d-flex align-items-center' id='skills'>
            <div className="container album col-xxl-8 px-4 py-5 text-center">
                <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3">Habilidades<span className="purple">.</span></h1>

                <div className="d-flex flex-wrap gap-3 justify-content-center py-5" data-aos='fade-up' >

                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoJS} alt="JS logo" />JavaScript
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoHTML} alt="HTML logo" />HTML
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoCSS} alt="CSS logo" />CSS
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoReact} alt="REACT logo" />React
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoNext} alt="NextJs logo" />NextJs
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoTailwind} alt="Tailwind logo" />Tailwind
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoNode} alt="Node logo" />NodeJS
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoTypescript} alt="TypeScript logo" />TypeScript
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoJava} alt="Java logo" />Java
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoSpring} alt="Spring logo" />Spring
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoMysql} alt="MySQL logo" />MySQL
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoMongo} alt="MongoDB logo" />MongoDB 
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoSupabase} alt="SupaBase logo" />SupaBase
                    </span>
                    <span className="badge font-light d-flex align-items-center p-1 pe-2 bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" src={logoGit} alt="Git logo" />Git
                    </span>

                </div>

            </div>
        </div>
    )
}