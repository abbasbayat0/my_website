import { useContext } from "react";
import Email from "./Email";
import { context } from "../Context";

const Contact = () => {
  const { state } = useContext(context);
  return (
    <div className="w-full h-full absolute flex z-10 justify-center items-center overflow-x-hidden">
      <p className="text-sand-50 absolute top-20 text-5xl font-raleway font-bold leading-3">
        Contact <span className={`text-${state.color}`}>Me</span>
      </p>
      <p className="text-sand-50 text-xl font-raleway absolute top-28 opacity-80">
        <span className={`text-${state.color}`}>Get</span> In Touch.
      </p>

      <Email />

      {/* info */}
      <div className="absolute xl:right-20 top-44 xl:w-1/3 xl:h-5/6">
        {/* the icons */}
        <div className="z-10 flex flex-col items-center justify-around w-20 h-4/5 absolute left-20 xl:left-24 top-10">
          <i class="fa-solid fa-user text-sand-50 text-3xl md:text-6xl xl:text-3xl"></i>
          <i class="fa-solid fa-location-dot text-sand-50 text-3xl md:text-6xl xl:text-3xl"></i>
          <i class="fa-solid fa-phone-volume text-sand-50 text-3xl md:text-6xl xl:text-3xl"></i>
          <i class="fa-solid fa-envelope text-sand-50 text-3xl md:text-6xl xl:text-3xl"></i>
        </div>

        {/* the titles */}
        <div className="z-10 flex flex-col items-start justify-around w-20 h-4/5 absolute left-36 lg:left-40 md:left-40 top-7">
          <p className="text-sand-50 text-xl font-raleway md:text-5xl xl:text-xl">
            Name
          </p>
          <p className="text-sand-50 text-xl font-raleway md:text-5xl xl:text-xl">
            Location
          </p>
          <p className="text-sand-50 text-xl font-raleway md:text-5xl xl:text-xl">
            Call
          </p>
          <p className="text-sand-50 text-xl font-raleway md:text-5xl xl:text-xl">
            Email
          </p>
        </div>

        {/* the main */}
        <div className="z-10 flex flex-col items-start opacity-60 justify-around w-56 h-4/5 absolute left-36 md:left-40 md:top-20 md:w-96 xl:left-40 top-14 xl:top-14">
          <p className="text-sand-50 text-md font-poppins md:text-3xl xl:text-base">
            ABBAS BAYAT
          </p>
          <p className="text-sand-50 text-md font-poppins md:text-3xl xl:text-base">
            Nahavand, Hamedan, Iran
          </p>
          <p className="text-sand-50 text-md font-poppins md:text-3xl xl:text-base">
            +98 939 905 34 10
          </p>
          <p className="text-sand-50 text-md font-poppins md:text-3xl xl:text-base">
            abbas0bayat@gmail.com
          </p>
        </div>
        <img
          src={require("../images/contact.jpg")}
          alt="contact"
          className="h-full m-auto rounded-xl opacity-60"
        />
      </div>
    </div>
  );
};

export default Contact;
