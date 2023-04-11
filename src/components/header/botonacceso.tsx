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
    <div>
      <button
        className={`flex h-8 w-8 flex-col justify-around
      ${active ? "clicked" : ""}
      `}
        onClick={onClick}
      >
        <span
          className={`
          h-0.5
          w-full 
          transition-all duration-300 ease-in-out
          ${active ? "bg-white" : "bg-gray-900"}
        `}
        ></span>
        <span
          className={`
        h-0.5
        w-full 
        bg-gray-900
        transition-all duration-300 ease-in-out
        
        `}
        ></span>
        <span
          className={`
        h-0.5 
        w-full
        transition-all duration-300 ease-in-out
        ${active ? "bg-white" : "bg-gray-900"}
        `}
        ></span>
      </button>
    </div>
  );
};

export default HeaderButton;
