import { ProjectProps } from "../../types";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  project: ProjectProps;
}

const IdividualProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex h-[500px] w-full overflow-hidden bg-invalid text-deepdark">
      <div className="flex w-1/2 items-center pl-[100px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.nombre}</h1>
          <p>{project.descripcion}</p>
          <div>
            <a href={project.href} className="btn-primary btn gap-2" target="_blank" rel="noreferrer">
              Visitar Proyecto <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">
        <img className="h-full" src={project.imagen} alt={project.nombre} />
      </div>
    </div>
  );
};

export default IdividualProject;
