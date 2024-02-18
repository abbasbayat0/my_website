import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    // email sender service
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('ABBAS', 'template_8rjhtts', form.current, 'PpVzmArZY1s_4G631')
        .then((result) => {
              console.log(result.text);
        }, (error) => {
              console.log(error.text);
        });
    };

    return (
        <div className='absolute md:left-5 top-[90%] md:top-[130%] xl:top-64 w-full xl:w-1/2 h-4/6 font-poppins'>
                <h2 className='text-sand-50 text-2xl font-poppins font-bold text-center xl:ml-32'>Message Me</h2>
                <br /><br />
                <form className='absolute w-full h-full z-10 flex flex-col' ref={form} onSubmit={sendEmail}>
                    <input required type="text" placeholder='Name' name="user_name" className='w-72 bg-gray-700 p-2 md:left-16 rounded-lg lg:w-1/3 absolute left-20 text-gray-200 xl:left-20 focus:outline-none xl:w-1/3' />

                    <input required type="email" placeholder='email' name="user_email" className='w-72 bg-gray-700 p-2 top-12 md:top-0 rounded-lg absolute lg:ml-44 lg:w-1/3 md:left-96 text-gray-200 xl:left-80 left-20 xl:mt-0 focus:outline-none xl:w-1/3 xl:' />

                    <textarea required minLength={50} name="message" className='text-gray-200 w-5/6 h-1/2 resize-none m-auto mb-56 bg-gray-700 p-2 rounded-lg  absolute left-11 lg:left-16 top-28 xl:top-16 focus:outline-none xl:w-full' placeholder='Message' />
                    <input type="submit" value="Send" className='cursor-pointer transition-all text-gray-400 hover:text-gray-300 w-14 h-10 rounded-lg bg-gray-700 z-20 m-auto lg:mb-32 mb-32 xl:mb-10 xl:ml-96' />
                </form>
        </div>
    );
}
export default Email;