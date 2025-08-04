import { useEffect } from "react";
import Perfil from "../../public/assets/Perfil2.webp";
import Cv from "../assets/CV-SantiagoCabrerizo.pdf";

export const Hero = () => {
  useEffect(() => {
    AOS.init();
  }),
    [];

  return (
    <div className="center d-flex align-items-center">
      <div className="container col-xxl-8 px-4 pb-5 pt-3">
        <div className="text-center">
          <div className="d-flex justify-content-center">
            <img
              src={Perfil}
              alt="Foto de perfil de Santiago Cabrerizo"
              className="img-perfil m-5"
              decoding="async"
              width="300"
              height="324"
            />
          </div>

          <h1 className="display-1 lh-1 mb-3 font-black purple">
            Santiago Cabrerizo
          </h1>
          <p className="display-5 mb-5 font-bold">
            <span className="purple" data-aos="zoom-in">
              {"<"}
            </span>{" "}
            Programador Web Full Stack{" "}
            <span className="purple" data-aos="zoom-in">
              {">"}
            </span>
          </p>
          <hr />

          <div className="mt-4">
            <a
              href={Cv}
              download={"CV-SantiagoCabrerizo"}
              target="_blank"
              rel="noreferrer"
              className="btn boton"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
