import { IconType } from "react-icons";
import ListaProyectos from "../../assets/listaProyectos";

interface Proyecto {
  nombre: string;
  descripcion: string;
  imagen: string;
  tecnologias?: string[];
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
    <a
      href={href}
      target="_blank"
      className="code-section transition-all duration-500 hover:ml-2"
    >
      <div>
        <p>
          <span className="text-fuchsia-500">{"{"}</span>
        </p>
        <div className="pl-6">
          <p>
            <span className="text-sky-300">nombre:</span>{" "}
            <span className="text-orange-400">"{nombre}"</span>,
          </p>
          <p>
            <span className="text-sky-300">descripcion:</span>{" "}
            <span className="text-orange-400">"{descripcion}"</span>,
          </p>
          <div className="code-section">
            <p>
              <span className="text-sky-300">tecnologias:</span>
              <span className="text-blue-400">{" ["}</span>
              <div className="pl-6">
                {tecnologias?.map((tecnologia, index) => {
                  return (
                    <p key={index}>
                      <span className="text-orange-400">"{tecnologia}"</span>
                      {index !== tecnologias.length - 1 ? "," : ""}
                    </p>
                  );
                })}
              </div>
              <span className="text-blue-400">{"]"}</span>
            </p>
          </div>
        </div>

        <p>
          <span className="text-fuchsia-500">{"}"}</span>
          <span>,</span>
        </p>
      </div>
    </a>
  );
};

const MeProyectos = () => {
  return (
    <div className="flex w-1/2 grow items-center justify-start overflow-y-hidden bg-slate-800/60 p-8">
      <div className="code-section text-xl text-neutral-200">
        <div>
          <p>
            <span className="text-sky-300">const MisProyectos</span> ={" "}
            <span className="text-yellow-300">{"["}</span>
          </p>
          <div className="flex flex-col pl-6">
            {ListaProyectos.map((proyecto, index) => {
              return (
                <Proyecto
                  key={index}
                  nombre={proyecto.nombre}
                  descripcion={proyecto.descripcion}
                  imagen={proyecto.imagen}
                  tecnologias={proyecto.tecnologiasNombres}
                  href={proyecto.href}
                />
              );
            })}
          </div>
          <p>
            <span className="text-yellow-300">{"]"}</span>
            <span>;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeProyectos;
