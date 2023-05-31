import { DiReact, DiJavascript1, DiPhp, DiJava } from "react-icons/di";
import { SiTailwindcss, SiPrisma, SiNextdotjs, SiHibernate } from "react-icons/si";

const ListaProyectos = [
  {
    nombre: "Varbas - Una herramienta de gestión de proyectos colaborativa",
    descripcion:
      "Varbas es una plataforma colaborativa de gestión de proyectos diseñada para equipos de trabajo. Con Varbas, los equipos pueden organizar tareas, asignar responsabilidades, realizar seguimiento del progreso y mantener una comunicación efectiva.",
    imagen: "https://picsum.photos/1920/1080",
    href: "https://github.com/zenix-s/varbas-app",
    tecnologias: [
      {
        nombre: "React",
        icono: DiReact,
      },
      {
        nombre: "Tailwindcss",
        icono: SiTailwindcss,
      },
      {
        nombre: "Typescript",
        icono: DiJavascript1,
      },
      {
        nombre: "Nextjs",
        icono: SiNextdotjs,
      },
      {
        nombre: "Prisma",
        icono: SiPrisma,
      },
    ],
  },
  {
    nombre: "Crud de una tienda de libros",
    descripcion: "Crud de una tienda de libros con Java y Hibernate ORM",
    imagen: "https://picsum.photos/1920/1080",
    href: "#",
    tecnologias: [
      { 
        nombre: "Java",
        icono: DiJava,
      },
      {
        nombre: "Hibernate",
        icono: SiHibernate,
      },
      
    ],
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Descripcion del proyecto 3",
    imagen: "https://picsum.photos/1920/1080",
    href: "#",
    tecnologias: [
      {
        nombre: "React",
        icono: DiReact,
      },
      {
        nombre: "Tailwindcss",
        icono: SiTailwindcss,
      },
      {
        nombre: "Javascript",
        icono: DiJavascript1,
      },
    ],
  },
];

export default ListaProyectos;
