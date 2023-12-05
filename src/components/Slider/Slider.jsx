import React from 'react'
import '../Slider/style.css'

import logoJS from '../../assets/javascript.webp'
import logoHTML from '../../assets/html-5.webp'
import logoCSS from '../../assets/css-3.webp'
import logoReact from '../../assets/react.webp'
import logoJava from '../../assets/java.webp'
import logoNode from '../../assets/node.webp'
import logoSpring from '../../assets/spring.webp'
import logoMysql from '../../assets/mysql.webp'

const Slider = () => {

    return (
        <div className='slider'>

            <div className='slide-track'>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoJS} alt="JS logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoHTML} alt="HTML logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoCSS} alt="CSS logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoReact} alt="REACT logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoJava} alt="Java logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoNode} alt="Node logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoSpring} alt="Spring logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoMysql} alt="MySQL logo" />
                </div>

                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoJS} alt="JS logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoHTML} alt="HTML logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoCSS} alt="CSS logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoReact} alt="REACT logo" />
                </div>
                <div className='slide'>
                    <img className="rounded-circle me-1" src={logoJava} alt="Java logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoNode} alt="Node logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoSpring} alt="Spring logo" />
                </div>
                <div className="slide">
                    <img className="rounded-circle me-1" src={logoMysql} alt="MySQL logo" />
                </div>

            </div>
        </div>
    )
}

export default Slider
