import { useContext } from "react";
import { context } from "../Context";

/* eslint-disable jsx-a11y/alt-text */
const Home = () => {
  const { state } = useContext(context);
  return (
    <div className="w-full overflow-hidden h-screen animate-scale absolute flex justify-center items-center">
      <img
        src={require("../images/2.png")}
        className="w-full right-0 opacity-50 absolute bottom-0 lg:right-24 lg:w-7/12 xl:w-3/12 md:w-8/12"
      />

      <strong
        className="text-sand-50 w-full md:-left-32 md:top-20 text-center text-7xl absolute top-5 z-10
             xl:w-1/2 xl:top-60 xl:left-52 lg:-left-52"
      >
        <span className={`${state.text} font-poppins`}>ABBAS</span> BAYAT
      </strong>

      <p className="text-sand-50 w-full text-center md:-left-40 font-raleway top-44 text-3xl absolute xl:left-52 xl:top-80 xl:w-1/2 lg:-left-72">
        Front-end <span className={`${state.text}`}>Developer</span>
      </p>
    </div>
  );
};
export default Home;
