import icon from "../../assets/icon.svg";
import mainimg from "../../assets/main.jpg";
const About = () => {
  return (
    <section className="flex min-h-screen w-full flex-row items-stretch justify-center">
      <div className="hidden w-1/2 grow overflow-y-hidden md:block">
        <span className="flex h-full w-full items-end justify-center" style={
          {
            backgroundImage: `url(${mainimg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backdropFilter: "greyscale(0.5)",
          }
        }>
          
        </span>
      </div>
      <div className="main-section-animation flex w-full flex-col items-start justify-around p-4 md:w-1/2 md:items-start md:justify-center grow">
        <h1 className="flex flex-col items-start gap-1 text-6xl uppercase text-slate-200 sm:text-6xl md:flex-col md:gap-4 xl:text-8xl 2xl:text-9xl">
          <span>Sergio</span>
          <span>Fernández</span>
        </h1>
        <h2 className="mt-4 flex flex-col gap-1 text-4xl uppercase text-slate-400 md:gap-4 xl:flex-row xl:text-5xl">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
        <p className="mt-4 text-slate-300">
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
