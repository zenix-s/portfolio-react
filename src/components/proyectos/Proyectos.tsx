import IdividualProject from "./IndividualProject";
import ListaProyectos from "../../assets/listaProyectos";

const Proyectos = () => {
  return (
    <div className="h-screen">
      {ListaProyectos.map((project, index) => {
        return <IdividualProject key={index} project={project} />;
      })}
    </div>
  );
};

export default Proyectos;
