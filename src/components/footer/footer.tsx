
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Logo from "../../assets/logonobg.svg"

const Footer = () => {
  return (
    <footer className="footer items-center bg-neutral p-4 text-lightWhite">
      <div className="grid-flow-col items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <p>Sergio Fernández Fernández</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
        <a href="#"> 
          <AiFillGithub />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiFillMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
