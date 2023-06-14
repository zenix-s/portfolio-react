const Circle = ({
  id,
  circleLoading,
  circleLoaded,
}: {
  id: number;
  circleLoading: boolean;
  circleLoaded: boolean;
}) => {
  return (
    <div
      className={`
      absolute
      right-0
      top-64
      aspect-square
      -translate-y-1/2
      translate-x-2/4
      rounded-full
      border
      border-yellow
      ${
        circleLoading
          ? {
              1: "h-2/4",
              2: "h-full",
              3: "h-[150%]",
              4: "h-[200%]",
            }[id]
          : "h-0"
      }
      ${circleLoaded ? "opacity-30" : "opacity-100"}
      transition-all
      duration-500
    `}
    />
  );
};

export default Circle;