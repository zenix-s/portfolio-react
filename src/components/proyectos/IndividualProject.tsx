import { ProjectProps } from "../../types";

interface Props {
  project: ProjectProps;
}

const IdividualProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full outline outline-green h-96 flex">

      <div className="w-1/2">
        <h1>{project.nombre}</h1>
        <p>{project.descripcion}</p>
        <div>
          <a href={project.href} className="btn btn-primary">
            go go power rangers
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img src={project.imagen} alt={project.nombre} />
      </div>
    </div>
  );
};

export default IdividualProject;
