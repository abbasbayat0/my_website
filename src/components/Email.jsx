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
        <div className='absolute lg:left-10 top-[90%] lg:top-64 w-full lg:w-1/2 h-4/6 font-poppins'>
                <h2 className='text-sand-50 text-2xl font-poppins font-bold text-center'>Message Me</h2>
                <br /><br />
                <form className='absolute w-full h-full z-10 flex flex-col' ref={form} onSubmit={sendEmail}>
                    <input required type="text" placeholder='Name' name="user_name" className='w-72 bg-gray-700 p-2 rounded-lg absolute left-16 text-gray-200 lg:left-5 focus:outline-none' />

                    <input required type="email" placeholder='email' name="user_email" className='w-72 bg-gray-700 p-2 rounded-lg absolute top-10 lg:top-0 text-gray-200 lg:right-5 left-16 mt-2 lg:mt-0 focus:outline-none' />

                    <textarea required minLength={50} name="message" className='text-gray-200 w-5/6 h-1/2 resize-none m-auto mb-56 bg-gray-700 p-2 rounded-lg  absolute left-11 lg:left-16 top-28 lg:top-16 focus:outline-none' placeholder='Message' />
                    <input type="submit" value="Send" className='cursor-pointer transition-all text-gray-400 hover:text-gray-300 w-14 h-10 rounded-lg bg-gray-700 z-20 m-auto lg:mb-20 mb-32' />
                </form>
        </div>
    );
}
export default Email;