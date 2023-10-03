import React from 'react'

export const Skills = () => {
    return (
        <div className='habilidades' id='habilidades'>
            <div className="container album col-xxl-8 px-4 py-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1">Habilidades<span className="purple">.</span></h1>

                <div className="d-flex flex-wrap gap-3 justify-content-center py-5">

                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/javascript.webp" alt="JS logo" />JavaScript
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/html-5.webp" alt="HTML logo" />HTML
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/css-3.webp" alt="CSS logo" />CSS
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/react.webp" alt="REACT logo" />React
                    </span>

                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/java.webp" alt="Java logo" />Java
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/node.webp" alt="Node logo" />NodeJS
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/spring.webp" alt="Spring logo" />Spring
                    </span>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                        <img className="rounded-circle me-1" width="50" height="50" src="src/assets/LogosSkills/mysql.webp" alt="MySQL logo" />MySQL
                    </span>

                </div>

            </div>
        </div>
    )
}