import { ProjectProps } from "../../types";
import { FiExternalLink } from "react-icons/fi";
import p1 from "../../assets/img/p1.webp";
import p2 from "../../assets/img/p1.webp";
import p3 from "../../assets/img/p1.webp";

interface Props {
  project: ProjectProps;
}

const IdividualProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex min-h-[500px] w-full flex-col-reverse overflow-hidden bg-invalid text-deepdark md:flex-row">
      <div className="flex w-full items-center p-12 md:p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.nombre}</h1>
          <p>{project.descripcion}</p>
          <div>
            <h2 className="text-2xl font-bold">Tecnologías</h2>
            <ul className="grid list-inside list-disc grid-flow-col grid-rows-2">
              {project.tecnologias.map((tecnologia) => (
                <li key={tecnologia.nombre} className="flex items-center gap-2">
                  <tecnologia.icono />
                  {tecnologia.nombre}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={project.href}
              className="btn-primary btn gap-2"
              target="_blank"
              rel="noreferrer"
            >
              Visitar Proyecto <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <img className="h-full object-cover" src={project.imagen} alt={project.nombre} />
      </div> */}
    </div>
  );
};

export default IdividualProject;
