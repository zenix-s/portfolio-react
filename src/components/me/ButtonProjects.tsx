import { FiArrowDown } from "react-icons/fi";

const ButtonProjects = () => {
  return (
    <a href="#proyectos" className="
      w-16 
      h-16 
      border 
      border-yellow/30 
      hover:border-yellow 
      rounded-full 
      transition-all 
      duration-500 
      ease-in-out 
      flex 
      items-center 
      justify-center 
      cursor-pointer
    ">
      <FiArrowDown className="text-3xl text-yellow" />

    </a>
  );
};

export default ButtonProjects;
