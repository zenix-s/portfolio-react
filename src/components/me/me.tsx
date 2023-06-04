import { useState } from "react";
import MeProyectos from "./meproyectos";

type section = "proyectos" | "contacto";

const About = () => {
  const [section, setSection] = useState<section>("proyectos");

  return (
    <section className="flex min-h-screen w-full justify-center items-center overflow-hidden">
      <div className="main-section-animation flex h-full w-full flex-col items-start justify-center gap-8 p-1 md:p-4">
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
