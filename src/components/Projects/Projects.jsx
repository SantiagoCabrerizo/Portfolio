import React, { useEffect } from 'react'
import '../Projects/style.css'
import ImgR from '../../assets/RVU-project.webp'
import ImgI from '../../assets/Img-Inmobiliaria.webp'
import ImgC from '../../assets/Chatbot.webp'
import ImgCC from '../../assets/ChatbotChallenge.webp'


const Projects = () => {

    useEffect(() => {
        AOS.init()
    }), []

    return (
        <div id='projects' className='center d-flex align-items-center'>
            <div className='container col-xxl-8 py-5'>
                <h1 className="display-4 font-semibold text-body-emphasis lh-1 mb-3 text-center">Proyectos<span className="purple">.</span></h1>

                <div className="py-5">

                    <div className='row row-cols-1 row-cols-md-2 row-cols-sm-1 g-3'>

                        <div className="col col-md-5" data-aos='fade-up'>
                            <a href="https://github.com/SantiagoCabrerizo/Proyecto-Inmobiliaria" target='_blank' rel='noreferrer'>
                                <div className="card">
                                    <div className="img-card">
                                        <img src={ImgI} className='card-img-top img' alt="img" />
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-title font-semibold'>Aplicación Web Inmobiliaria</h5>
                                        <p className='purple mb-0 font-semibold'>Full Stack</p>
                                        <p className='font-light'>Java, Spring, MySQL, React</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col col-md-7" data-aos='fade-up'>
                            <a href="https://rectificacionesvalledeuco.netlify.app/" target='_blank' rel='noreferrer'>
                                <div className="card">
                                    <div className="img-card">
                                        <img src={ImgR} className='card-img-top img' alt="img" />
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-title font-semibold'>Landing Page Rectificadora</h5>
                                        <p className='purple mb-0 font-semibold'>Front End</p>
                                        <p className='font-light'>React - Vite, Tailwind</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className='row row-cols-1 row-cols-md-2 row-cols-sm-1 g-3'>
                        <div className="col col-md-7" data-aos='fade-up'>
                            <a href="https://www.danielbot.com.ar/" target='_blank' rel='noreferrer'>
                                <div className="card">
                                    <div className="img-card">
                                        <img src={ImgC} className='card-img-top img' alt="img" />
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-title font-semibold'>ChatBot - RST</h5>
                                        <p className='purple mb-0 font-semibold'>Full Stack</p>
                                        <p className='font-light'>Node.js, SupaBase, TypeScript, Next.js, Tailwind</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col col-md-5" data-aos='fade-up'>
                            <a href="https://github.com/SantiagoCabrerizo/ChallengeChatBot" target='_blank' rel='noreferrer'>
                                <div className="card">
                                    <div className="img-card">
                                        <img src={ImgCC} className='card-img-top img' alt="img" />
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-title font-semibold'>ChatBot - Gestor de pedidos de Sushi</h5>
                                        <p className='purple mb-0 font-semibold'>Full Stack</p>
                                        <p className='font-light'>Node.js, JavaScript, MongoDB, React, Tailwind</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects
