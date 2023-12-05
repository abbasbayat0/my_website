import { useContext } from 'react';
import Email from './Email';
import { context } from '../Context';

const Contact = () => {
    const {state} = useContext(context)
    return (
        <div className="w-full h-full absolute flex z-10 justify-center items-center overflow-x-hidden">
            <p className='text-sand-50 absolute top-20 text-5xl font-raleway font-bold leading-3'>Contact <span className={`text-${state.color}`}>Me</span></p>
            <p className='text-sand-50 text-xl font-raleway absolute top-28 opacity-80'><span className={`text-${state.color}`}>Get</span> In Touch.</p>
            
            <Email />

            {/* info */}
            <div className='absolute lg:right-20 top-44 lg:w-1/3 lg:h-5/6'>

                {/* the icons */}
                <div className='z-10 flex flex-col items-center justify-around w-20 h-4/5 absolute left-20 lg:left-24 top-10'>
                    <i class="fa-solid fa-user text-sand-50 text-3xl"></i>
                    <i class="fa-solid fa-location-dot text-sand-50 text-3xl"></i>
                    <i class="fa-solid fa-phone-volume text-sand-50 text-3xl"></i>
                    <i class="fa-solid fa-envelope text-sand-50 text-3xl"></i>
                </div>

                {/* the titles */}
                <div className='z-10 flex flex-col items-start justify-around w-20 h-4/5 absolute left-36 lg:left-40 top-7'>
                    <p className='text-sand-50 text-xl font-raleway'>Name</p>
                    <p className='text-sand-50 text-xl font-raleway'>Location</p>
                    <p className='text-sand-50 text-xl font-raleway'>Call</p>
                    <p className='text-sand-50 text-xl font-raleway'>Email</p>
                </div>

                {/* the main */}
                <div className='z-10 flex flex-col items-start opacity-60 justify-around w-56 h-4/5 absolute left-36 lg:left-40 top-14'>
                    <p className='text-sand-50 text-md font-poppins'>ABBSA BAYAT</p>
                    <p className='text-sand-50 text-md font-poppins'>Nahavand, Hamedan, Iran</p>
                    <p className='text-sand-50 text-md font-poppins'>+98 939 905 34 10</p>
                    <p className='text-sand-50 text-md font-poppins'>abbas0bayat@gmail.com</p>
                </div>
                <img src={require('../images/contact.jpg')} alt="contact" className='h-full m-auto rounded-xl opacity-60' />
            </div>
        </div>
    );
}
 
export default Contact;