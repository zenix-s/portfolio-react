import {DiReact, DiJavascript1, DiPhp, } from "react-icons/di";
import {SiTailwindcss, SiPrisma, SiNextdotjs} from "react-icons/si";

const ListaProyectos = [
  {
    nombre: "Varbas",
    // descripcion de un proyecto parecido a trello
    descripcion: "Proyecto pensado para la gestión de proyectos, tareas y usuarios.",
    imagen: "https://picsum.photos/1920/1080",
    tecnologias: [
      DiReact,
      SiTailwindcss,
      DiJavascript1,
      SiNextdotjs,
      SiPrisma,
    ],
    href: "#",
    tecnologiasNombres: [
      "React",
      "Tailwindcss",
      "Typescript",
      "Nextjs",
    ],
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
    tecnologiasNombres: [
      "React",
      "Tailwindcss",
      "PHP",
    ],
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
    tecnologiasNombres: [
      "React",
      "Tailwindcss",
      "Javascript",
    ],
  },
];

export default ListaProyectos;