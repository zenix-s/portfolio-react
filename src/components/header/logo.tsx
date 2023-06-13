import logo from "../../assets/logonobg.svg";

const Logo = () => {

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="
      z-50
    "
    >
      <button
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
        onClick={onClick}
      >
        <img src={logo} alt="logo" className="h-12 w-12" />
      </button>
    </div>
  );
};

export default Logo;
