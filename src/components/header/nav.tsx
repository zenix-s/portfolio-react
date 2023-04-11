import React from "react";
import NavLink from "./navlink";

interface NavProps {
  open: boolean;
}

const navLinks = [
  {
    to: "#",
    label: "Inicio",
  },
  {
    to: "#",
    label: "Me",
  },
  {
    to: "#",
    label: "Proyectos",
  },
  {
    to: "#",
    label: "Contacto",
  },
];

const Nav: React.FC<NavProps> = ({ open }) => {
  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-10
        block
        h-full
        w-full
        bg-neutral-600
        p-8
        pt-20
        ${open ? "translate-x-0" : "translate-x-full"}
        transition-translate
        duration-300

      `}
    >
      <ul
        className="
            flex
            flex-col
            gap-8
            "
      >
        {navLinks.map((link) => (
          <li key={link.label}>
            <NavLink to={link.to} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;