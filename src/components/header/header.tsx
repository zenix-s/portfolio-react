import Logo from "./logo";
import Nav from "./nav";
import { FiMenu } from "react-icons/fi";
import HeaderButton from "./botonacceso";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="
    flex
    flex-col
    "
    >
      <div
        className="
      z-20
      flex
      w-full
      items-center
      justify-between
      px-8
      py-4
      "
      >
        <Logo active={isOpen} />
        <HeaderButton
          icon={FiMenu}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          active={isOpen}
        />
      </div>
      <Nav open={isOpen} />
    </header>
  );
}
