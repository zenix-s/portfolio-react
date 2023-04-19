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

      className="px-28 py-10"
    >
      <div>
        <h1 className="text-slate-300 text-2xl ml-4 mb-2">{nombre}</h1>
      </div>
      <div
        onMouseEnter={() => setMostrar(true)}
        onMouseLeave={() => setMostrar(false)}
        className="h-96 rounded-3xl bg-cover bg-center p-8 text-slate-300 flex items-end hover:grayscale transition-all duration-500 ease-in-out "
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="overflow-hidden">
          <div
            className={` 
          ${mostrar ? "-translate-y-0" : "translate-y-full"} 
          transform transition-all duration-500 ease-in-out `}
          >
            <div className="text-xl mb-4">
              <p>{descripcion}</p>
            </div>
            <div className="flex">
              {tecnologias?.map((tecnologia, index) => {
                const Tecnologia = tecnologia;
                return <Tecnologia key={index}  />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
