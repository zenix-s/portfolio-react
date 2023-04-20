import Proyecto from "./proyecto";
import {DiReact, DiJavascript1, DiPhp, } from "react-icons/di";
import {SiTailwindcss, SiPrisma, SiNextdotjs} from "react-icons/si";
const ListaProyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Descripcion del proyecto 1",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiJavascript1,
      SiNextdotjs,
      SiPrisma,
    ],
    href: "#",
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Descripcion del proyecto 2",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiPhp
    ],
    href: "#",
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Descripcion del proyecto 3",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiJavascript1,
    ],
    href: "#",
  },
];

const Proyectos = () => {
  return (
    <div className="
    grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10 p-4
    ">
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
