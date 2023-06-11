import Logo from "./logo";
import Nav from "./nav";
import { FiMenu } from "react-icons/fi";
import HeaderButton from "./botonacceso";
import { useState } from "react";
import Social from "./social";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="
      fixed
      top-0
      z-50
      flex
      w-full
      flex-col
      bg-deepdark
      !bg-transparent
    "
    >
      <div
        className="
      flex
      w-full
      items-center
      justify-between
      px-8
      py-4
      "
      >
        <Logo />
        <div className="hidden lg:block">
          <Social />
        </div>
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
