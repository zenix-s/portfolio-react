import icon from "../../assets/icon.svg";

const Logo = () => {
  return (
    <div
      className="
      z-50
    "
    >
      <h1
        className={`
        duration-400
        text-3xl
        font-bold
        text-neutral-200
        transition-colors
        ease-in
        `}
      >
        <img src={icon} alt="logo" className="h-12 w-12" />
      </h1>
    </div>
  );
};

export default Logo;
