import { useContext } from 'react';
import { context } from '../Context';

/* eslint-disable jsx-a11y/alt-text */
const Home = () => {
    const  {state} = useContext(context)
    return (
        <div className="w-full overflow-hidden h-screen animate-scale absolute flex justify-center items-center">

            <img src={require('../images/2.png')} className='w-full right-0 opacity-50 absolute bottom-0 lg:right-24 lg:w-3/12' />

            <strong className="text-sand-50 w-full text-center text-7xl absolute top-5 z-10
             lg:w-1/2 lg:top-60 lg:left-52"><span className={`${state.text} font-poppins`}>ABBAS</span> BAYAT</strong>

            <p className='text-sand-50 w-full text-center font-raleway top-44 text-3xl absolute lg:left-52 lg:w-1/2'>Front-end <span className={`${state.text}`}>Developer</span></p>
        </div>
    );
}
export default Home;