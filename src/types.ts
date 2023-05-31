import { IconType } from "react-icons"

interface Tecnologia {
  nombre: string,
  icono: IconType,
}

export interface ProjectProps {
  nombre: string,
  descripcion: string,
  imagen: string,
  tecnologias: Tecnologia[],
  href: string,
}
