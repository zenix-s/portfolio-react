import IdividualProject from "./IndividualProject";
import ListaProyectos from "../../assets/listaProyectos";
import p1 from "../../assets/proyectos/p1.png";

const Proyectos = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 md:p-8 lg:p-16">
      {ListaProyectos.map((project, index) => {
        return <IdividualProject key={index} project={project} />;
      })}
    </div>
  );
};

export default Proyectos;
