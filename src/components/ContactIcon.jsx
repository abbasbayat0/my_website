const ContactIcon = () => {
  return (
    <div
      className="w-20 h-40 absolute text-sand-50 z-10 right-10 top-1/3
         hidden flex-col justify-center items-center
         lg:flex
         "
    >
      <a href="mailto:abbas0bayat@gmail.com" target="-blank">
        <i
          className="fa-solid fa-envelope text-2xl transition-all duration-300 opacity-70 cursor-pointer lg:text-4xl xl:text-3xl"
          onMouseEnter={(e) => {
            e.target.classList.replace("opacity-70", "opacity-100");
            e.target.classList.replace("fa-envelope", "fa-envelope-open");
          }}
          onMouseLeave={(e) => {
            e.target.classList.replace("opacity-100", "opacity-70");
            e.target.classList.replace("fa-envelope-open", "fa-envelope");
          }}
        ></i>
      </a>

      <br />
      <br />

      <a href="tel:+989399053410" target="-blank">
        <i
          className="fa-solid fa-phone text-2xl transition-all duration-300 rotate-135 opacity-70 cursor-pointer lg:text-4xl xl:text-3xl"
          onMouseEnter={(e) => {
            e.target.classList.replace("opacity-70", "opacity-100");
            e.target.classList.replace("rotate-135", "rotate-250");
          }}
          onMouseLeave={(e) => {
            e.target.classList.replace("opacity-100", "opacity-70");
            e.target.classList.replace("rotate-250", "rotate-135");
          }}
        ></i>
      </a>
    </div>
  );
};
export default ContactIcon;
