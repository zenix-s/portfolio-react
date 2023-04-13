import icon from "../../assets/icon.svg";
import mainimg from "../../assets/main.jpg";
const About = () => {
  return (
    <section className=" flex h-screen w-full flex-col justify-between xl:flex-row">
      <div className=" flex h-full w-full items-center justify-center xl:w-1/2">
        <img src={mainimg} alt="icon" className="h-full w-full object-cover object-bottom grayscale main-image-animation" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-around p-4 xl:w-1/2 xl:items-start xl:justify-center main-section-animation">
        <h1 className="flex flex-col items-center gap-1 text-6xl uppercase text-slate-200 sm:text-6xl xl:flex-col xl:items-start xl:gap-4 xl:text-8xl 2xl:text-9xl">
          <span>Sergio</span>
          <span>Fernández</span>
        </h1>
        <h2 className="mt-4 flex flex-col gap-1 text-4xl uppercase text-slate-400 sm:flex-row sm:text-5xl xl:gap-4">
          <span>Full Stack</span>
          <span>Developer</span>
        </h2>
      </div>
    </section>
  );
};

export default About;
