import { useEffect, useState } from "react";
import bg from "../../assets/img/bg.png";

const Circle = ({
  id,
  circleLoading,
  circleLoaded,
}: {
  id: number;
  circleLoading: boolean;
  circleLoaded: boolean;
}) => {
  return (
    <div
      className={`
      absolute
      right-0
      top-64
      aspect-square
      -translate-y-1/2
      translate-x-2/4
      rounded-full
      border
      border-yellow
      ${
        circleLoading
          ? {
              1: "h-2/4",
              2: "h-full",
              3: "h-[150%]",
              4: "h-[200%]",
            }[id]
          : "h-0"
      }
      ${circleLoaded ? "opacity-30" : "opacity-100"}
      transition-all
      duration-500
    `}
    />
  );
};

const About = () => {
  const [circleLoading, setCircleLoading] = useState({
    1: {
      loading: false,
      loaded: false,
    },
    2: {
      loading: false,
      loaded: false,
    },
    3: {
      loading: false,
      loaded: false,
    },
    4: {
      loading: false,
      loaded: false,
    },
  });

  useEffect(() => {
    const timeouts = [250, 500, 750, 1000];
    timeouts.forEach((timeout, index) => {
      setTimeout(() => {
        setCircleLoading((prevState) => ({
          ...prevState,
          [index + 1]: {
            loading: true,
            loaded: false,
          },
        }));
      }, timeout);
    });
    
    setInterval(() => {
      timeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setCircleLoading((prevState) => ({
            ...prevState,
            [index + 1]: {
              loading: true,
              loaded: true,
            },
          }));
        }, timeout + 1000);
      }
      );
    }, 4000);

    setInterval(() => {
      timeouts.forEach((timeout, index) => {
        setTimeout(() => {
          setCircleLoading((prevState) => ({
            ...prevState,
            [index + 1]: {
              loading: true,
              loaded: false,
            },
          }));
        }, timeout + 2000);
      }
      );
    } , 4000);
    

    
  }, []);

  return (
    <section
      id="Inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   filter: "grayscale(100%)",
      // }}
    >
      <div className="absolute right-0 top-0 h-full w-full">
        <div className="relative h-full w-full">
          <div>
            <Circle id={1} circleLoading={circleLoading[1].loading} circleLoaded={circleLoading[1].loaded} />
            <Circle id={2} circleLoading={circleLoading[2].loading} circleLoaded={circleLoading[2].loaded} />
            <Circle id={3} circleLoading={circleLoading[3].loading} circleLoaded={circleLoading[3].loaded} />
            <Circle id={4} circleLoading={circleLoading[4].loading} circleLoaded={circleLoading[4].loaded} />
          </div>
        </div>
      </div>
      <div className="main-section-animation flex h-full w-full flex-col items-start justify-center gap-8 p-1 sm:px-28">
        <h1 className="flex flex-col items-start gap-1 text-6xl uppercase text-invalid md:flex-col md:gap-4 sm:text-7xl md:text-9xl">
          <span>Sergio</span>
          <span>Fernández</span>
        </h1>
        <h2 className="mt-4 flex flex-col gap-1 text-4xl uppercase text-invalid md:gap-4 xl:flex-row xl:text-5xl">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
        <p className="mt-4 w-full text-lg text-invalid sm:w-1/2">
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
