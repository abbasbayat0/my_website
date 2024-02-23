/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Email = () => {
  const [emailSent, changeStatus] = useState(false);

  // email sender service
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("ABBAS", "template_8rjhtts", form.current, "PpVzmArZY1s_4G631")
      .then(
        (result) => {
          changeStatus(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="absolute md:left-5 top-[90%] md:top-[130%] xl:top-64 w-full xl:w-1/2 h-4/6 font-poppins">
      {emailSent ? (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className={`text-sand-50 text-2xl font-poppins font-bold text-center xl:ml-32`}
        >
          Your Email Has Been Sent
        </motion.h2>
      ) : (
        <h2 className="text-sand-50 text-2xl font-poppins font-bold text-center xl:ml-32">
          Message Me
        </h2>
      )}
      <br />
      <br />
      <form
        className={`absolute w-full h-full z-10 ${
          emailSent ? "hidden" : "flex flex-col"
        }`}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          required
          type="text"
          placeholder="Name"
          name="user_name"
          className="w-72 bg-gray-700 p-2 md:left-16 rounded-lg lg:w-1/3 absolute left-20 text-gray-200 xl:left-20 focus:outline-none xl:w-1/3"
        />

        <input
          required
          type="email"
          placeholder="email"
          name="user_email"
          className="w-72 bg-gray-700 p-2 top-12 md:top-0 rounded-lg absolute lg:ml-44 lg:w-1/3 md:left-96 text-gray-200 xl:left-80 left-20 xl:mt-0 focus:outline-none xl:w-1/3 xl:"
        />

        <textarea
          required
          minLength={50}
          name="message"
          className="text-gray-200 w-5/6 h-1/2 resize-none m-auto mb-56 bg-gray-700 p-2 rounded-lg  absolute left-11 lg:left-16 top-28 xl:top-16 focus:outline-none xl:w-full"
          placeholder="Message"
        />
        <input
          type="submit"
          value="Send"
          className="cursor-pointer transition-all text-gray-400 hover:text-gray-300 w-14 h-10 rounded-lg bg-gray-700 z-20 m-auto lg:mb-32 mb-32 xl:mb-10 xl:ml-96"
        />
      </form>

      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute -top-44 transition-all duration-1000 ${
          emailSent ? "opacity-100" : "opacity-0"
        }`}
      >
        <path
          d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z"
          fill="green"
        />
      </svg>
    </div>
  );
};
export default Email;
