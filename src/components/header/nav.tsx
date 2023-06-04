import React from "react";
import NavLink from "./navlink";
import Social from "./social";

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
    label: "Proyectos",
  },
];

const Nav: React.FC<NavProps> = ({ open }) => {
  return (
    <nav
      className={`
        transition-translate
        fixed
        left-0
        top-0
        h-screen
        w-full
        bg-dark
        p-8
        pt-20
        duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
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
        <li>
          <Social />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
