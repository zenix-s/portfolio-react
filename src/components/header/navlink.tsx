interface NavLinkProps {
  to: string;
  label: string;
  toggleOpen: () => void;
}

const NavLink = ({ to, label, toggleOpen }: NavLinkProps) => {

  const onClick = () => {
    toggleOpen();
  };

  return (
    <a 
    href={to} 
    onClick={onClick}
    className="
    text-invalid
    font-bold
    text-5xl
    tracking-wide
    uppercase
    hover:tracking-widest
    transition-all
    duration-300
    ">
      <span>{label}</span>
    </a>
  );
};

export default NavLink;