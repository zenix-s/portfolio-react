
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Logo from "../../assets/logonobg.svg"
import Social from "../header/social";

const Footer = () => {
  return (
    <footer className="footer items-center bg-neutral p-8 text-lightWhite">
      <div className="grid-flow-col items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <p>Sergio Fernández Fernández</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
