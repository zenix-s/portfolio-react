import Proyecto from "./proyecto";
import ListaProyectos from "../../assets/listaProyectos";

const Proyectos = () => {
  return (
    <div>
      {ListaProyectos.map((proyecto, index) => {
        return (
          <Proyecto
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            tecnologias={proyecto.tecnologias}
            href={proyecto.href}
          />
        );
      })}
    </div>
  );
};

export default Proyectos;
