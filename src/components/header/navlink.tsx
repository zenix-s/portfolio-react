interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  return (
    <a href={to} className="
    text-white
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