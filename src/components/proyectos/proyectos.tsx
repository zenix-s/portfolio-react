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
    ]
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Descripcion del proyecto 2",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiPhp
    ]
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Descripcion del proyecto 3",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiJavascript1,
    ]
  },
];

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
          />
        );
      })}
    </div>
  );
};

export default Proyectos;
