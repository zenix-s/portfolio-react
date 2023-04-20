import {DiReact, DiJavascript1, DiPhp, } from "react-icons/di";
import {SiTailwindcss, SiPrisma, SiNextdotjs} from "react-icons/si";

const ListaProyectos = [
  {
    nombre: "Varbas",
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

export default ListaProyectos;