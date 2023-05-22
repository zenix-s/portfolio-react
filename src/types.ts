import { IconType } from "react-icons"

export interface ProjectProps {
  nombre: string,
  descripcion: string,
  imagen: string,
  tecnologias: IconType[],
  href: string,
  tecnologiasNombres: string[],
}
