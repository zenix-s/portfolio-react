import { IconType } from "react-icons";
import { icons } from "react-icons/lib/esm/iconsManifest";

interface HeaderButtonProps {
  label?: string;
  icon?: IconType;
  onClick: () => void;
  active: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  active,
}) => {
  return (
    <div className="z-20">
      <button
        className={`flex h-12 w-12 flex-col items-end justify-around
      ${active ? "clicked" : ""}
      `}
        onClick={onClick}
      >
        <span
          className={`
          h-1
          w-full 
          rounded-full
          transition-all 
          duration-300 
          ease-in-out
          ${active ? "rotate-45" : ""}
          ${active ? "bg-invalid" : "bg-lightWhite"}
          ${active ? "translate-y-4" : ""}
        `}
        ></span>
        <span
          className={`
          h-1
        rounded-full
        bg-lightWhite
        transition-all 
        duration-300 
        ease-in-out
        ${active ? "w-full" : "w-2/3"}
        ${active ? "opacity-0" : ""}
        `}
        ></span>
        <span
          className={`
        h-1
        rounded-full 
        transition-all
        duration-300 
        ease-in-out
        ${active ? "w-full" : "w-1/3"}
        ${active ? "-rotate-45" : ""}
        ${active ? "bg-invalid" : "bg-lightWhite"}
        ${active ? "-translate-y-4" : ""}
        `}
        ></span>
      </button>
    </div>
  );
};

export default HeaderButton;
