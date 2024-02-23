import { useContext } from "react";
import ListOfWorks from "./ListOfWorks";
import { context } from "../Context";

const Portfolio = () => {
  const { state } = useContext(context);
  return (
    <div className="w-full h-full absolute flex justify-center items-center overflow-x-hidden z-10">
      <p className="text-sand-50 absolute top-20 text-5xl font-raleway font-bold leading-3">
        <span className={`${state.text}`}>My</span> Portfolio
      </p>
      <p className="text-sand-50 text-xl font-raleway absolute top-28 opacity-80">
        Some Of My <span className={`${state.text}`}>Works</span>
      </p>

      <ListOfWorks />
    </div>
  );
};

export default Portfolio;
