import { useState } from "react";
import { IconType } from "react-icons";

interface Proyecto {
  nombre: string;
  descripcion: string;
  imagen: string;
  tecnologias?: IconType[];
  href?: string;
}

const Proyecto: React.FC<Proyecto> = ({
  nombre,
  descripcion,
  imagen,
  tecnologias,
  href,
}) => {
  return (
    <div className="py-10 sm:px-8 md:px-28">
      <a
        className="flex h-96 items-end overflow-hidden bg-cover bg-center text-slate-300 transition-all duration-500 ease-in-out hover:grayscale sm:rounded-3xl"
        style={{ backgroundImage: `url(${imagen})` }}
        href={href}
        target="_blank"
      >
        <div className="w-full overflow-hidden">
          <div className="w-full p-8 text-slate-300 backdrop-blur-md">
            <div>
              <h1 className="mb-2 text-3xl">{nombre}</h1>
            </div>
            <div className="mb-4 text-2xl">
              <p>{descripcion}</p>
            </div>
            <div className="flex w-full justify-around text-4xl">
              {tecnologias?.map((tecnologia, index) => {
                const Tecnologia = tecnologia;
                return <Tecnologia key={index} />;
              })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Proyecto;
