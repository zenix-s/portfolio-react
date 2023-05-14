import { IconType } from "react-icons";
import ListaProyectos from "../../assets/listaProyectos";

interface Proyecto {
  nombre: string;
  descripcion: string;
  imagen: string;
  tecnologias?: string[];
  href?: string;
}

interface ProyectoSubString {
  label1: string;
  label2: string;
}

const ProyectoSubString: React.FC<ProyectoSubString> = ({ label1, label2 }) => {
  return (
    <div>
      <span className="text-error">{label1}:</span>{" "}
      <span className="text-green
      ">"{label2}"</span>,
    </div>
  );
};

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
      className="code-section transition-all duration-500 before:bg-lightWhite hover:before:bg-invalid "
    >
      <div>
        <div>
          <span className="text-purple">{"{"}</span>
        </div>
        <div className="pl-6">
          <ProyectoSubString label1="nombre" label2={nombre} />
          <ProyectoSubString label1="descripcion" label2={descripcion} />
          <div className="code-section">
            <div>
              <span className="text-error">tecnologias:</span>
              <span className="text-fountainblue">{" ["}</span>
              <div className="flex flex-col pl-6">
                {tecnologias?.map((tecnologia, index) => {
                  return (
                    <span key={index}>
                      <span className="text-malibu">"{tecnologia}"</span>
                      {index !== tecnologias.length - 1 ? "," : ""}
                    </span>
                  );
                })}
              </div>
              <span className="text-fountainblue">{"]"}</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-purple">{"}"}</span>
          <span>,</span>
        </div>
      </div>
    </a>
  );
};

const MeProyectos = () => {
  return (
    <div className="flex h-auto w-full grow items-center justify-start p-8 text-lightWhite">
      <div className="code-section text-xl">
        <div>
          <p>
            <span className="text-purple">const </span>
            <span className="text-chalky">MisProyectos</span>
            <span className="text-fountainblue">=</span>
            <span className="text-whiskey">{"["}</span>
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
            <span className="text-whiskey">{"]"}</span>
            <span>;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeProyectos;
