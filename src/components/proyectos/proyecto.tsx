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
    <div className="">
      <a
        className="flex h-96 items-end bg-cover bg-center text-slate-300 transition-all duration-500 ease-in-out hover:grayscale sm:rounded-3xl overflow-hidden"
        style={{ backgroundImage: `url(${imagen})` }}
        href={href}
        target="_blank"
      >
        <div className="overflow-hidden w-full">
          <div className="backdrop-blur-md text-slate-900 p-8 w-full">
            <div>
              <h1 className="mb-2 text-3xl">{nombre}</h1>
            </div>
            <div className="mb-4 text-2xl">
              <p>{descripcion}</p>
            </div>
            <div className="flex w-full justify-between">
              {tecnologias?.map((tecnologia, index) => {
                const Tecnologia = tecnologia;
                return <Tecnologia key={index} 
                className="text-4xl"
                />;
              })}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Proyecto;
