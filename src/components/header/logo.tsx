import logo from "../../assets/logonobg.svg";

const Logo = () => {
  return (
    <div
      className="
      z-50
    "
    >
      <a
        className={`
        duration-400
        text-3xl
        font-bold
        text-neutral-200
        transition-colors
        ease-in
        tooltip
        tooltip-bottom
        `}
        data-tip="Inicio"
        href="#home"
      >
        <img src={logo} alt="logo" className="h-12 w-12" />
      </a>
    </div>
  );
};

export default Logo;
