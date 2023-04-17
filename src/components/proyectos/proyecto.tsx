import { useState } from "react";
import { IconType } from "react-icons";

interface Proyecto {
  nombre: string;
  descripcion: string;
  imagen: string;
  tecnologias?: IconType[];
}

const Proyecto: React.FC<Proyecto> = ({
  nombre,
  descripcion,
  imagen,
  tecnologias,
}) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div
      // if hover, show the description
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      <div
        className="h-96 bg-cover bg-center text-slate-300"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div>
          <h1>{nombre}</h1>
        </div>
        <div className="overflow-hidden">
          <div
            className={` 
          ${mostrar ? "-translate-y-0" : "translate-y-full"} 
          transform transition-all duration-500 ease-in-out`}
          >
            <div className="">
              <p>{descripcion}</p>
            </div>
            <div className="flex">
              {tecnologias?.map((tecnologia, index) => {
                const Tecnologia = tecnologia;
                return <Tecnologia key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
