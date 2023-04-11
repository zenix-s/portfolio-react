interface LogoProps {
  active: boolean;
}

const Logo: React.FC<LogoProps> = ({ active }) => {
  return (
    <div
      className="

    "
    >
      <h1
        className={`
        text-3xl
        font-bold
        ${active ? "text-neutral-200" : "text-neutral-900"}
        transition-colors
        duration-400
        ease-in

        `}
      >
        Sergio Fernández
      </h1>
    </div>
  );
};

export default Logo;
