import IdividualProject from "./IndividualProject";
import ListaProyectos from "../../assets/listaProyectos";

const Proyectos = () => {
  return (
    <div 
      id="proyectos"
    className="flex min-h-screen flex-col items-center gap-8 p-2 md:p-8 lg:p-16">
      {ListaProyectos.map((project, index) => {
        return (
          <IdividualProject
            key={index}
            project={project}
            reverse={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default Proyectos;
