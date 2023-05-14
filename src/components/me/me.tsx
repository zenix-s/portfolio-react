import { useState } from "react";
import MeProyectos from "./meproyectos";

type section = "proyectos" | "contacto";

const About = () => {
  const [section, setSection] = useState<section>("proyectos");

  return (
    <section className="flex h-full w-full flex-col-reverse items-stretch justify-center overflow-hidden md:flex-row">
      <div className="w-1/2 flex flex-col">
        <div className="tabs">
          <button
            className={`tab-lifted tab tab-lg !bg-transparent ${
              section === "proyectos" ? "tab-active" : ""
            }`}
            onClick={() => setSection("proyectos")}
          >
            <span>proyectos</span>
          </button>
          <button
            className={`tab-lifted tab tab-lg !bg-transparent ${
              section === "contacto" ? "tab-active" : ""
            }`}
            onClick={() => setSection("contacto")}
          >
            <span>contacto</span>
          </button>
        </div>
        <div className="relative  flex-grow w-full">
          <div className="absolute inset-0 overflow-scroll">
            {section === "proyectos" ? <MeProyectos /> : ""}
            {section === "contacto" ? <div>contacto</div> : ""}
          </div>
        </div>
      </div>
      <div className="main-section-animation flex h-full w-full grow flex-col items-start justify-center gap-8 p-4 md:w-1/2 md:items-start md:justify-center">
        <h1 className="flex flex-col items-start gap-1 text-6xl uppercase text-invalid sm:text-6xl md:flex-col md:gap-4 xl:text-8xl 2xl:text-9xl">
          <span>Sergio</span>
          <span>Fernández</span>
        </h1>
        <h2 className="mt-4 flex flex-col gap-1 text-4xl uppercase text-lightWhite md:gap-4 xl:flex-row xl:text-5xl">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
        <p className="mt-4 text-lightdark">
          Desarrollador de software con conocimientos en diseño, desarrollo y
          pruebas de sistemas de software, dominio en desarrollo FullStack con
          tecnologías React, Tailwind, JavaScript/TypeScript, NextJs, PHP, Bases
          de datos SQL.
        </p>
      </div>
    </section>
  );
};

export default About;
