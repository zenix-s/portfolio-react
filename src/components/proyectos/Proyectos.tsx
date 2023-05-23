import IdividualProject from "./IndividualProject";
import ListaProyectos from "../../assets/listaProyectos";

const Proyectos = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 p-2 md:p-8 lg:p-16">
      {ListaProyectos.map((project, index) => {
        return <IdividualProject key={index} project={project} />;
      })}
    </div>
  );
};

export default Proyectos;
