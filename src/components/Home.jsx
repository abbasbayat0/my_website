import { useContext } from 'react';
import { context } from '../Context';

/* eslint-disable jsx-a11y/alt-text */
const Home = () => {
    const  {state} = useContext(context)
    return (
        <div className="w-full overflow-hidden h-screen animate-scale absolute flex justify-center items-center">

            <img src={require('../images/2.png')} className='w-3/12 right-24 opacity-50 absolute bottom-0 overflow-hidden' />

            <strong className="text-sand-50 w-1/2 text-center text-7xl absolute top-60 left-52 z-10"><span className={`${state.text} font-poppins`}>ABBAS</span> BAYAT</strong>

            <p className='text-sand-50 w-1/2 text-center font-raleway top-80 left-52 text-3xl absolute'>Front-end <span className={`${state.text}`}>Developer</span></p>
        </div>
    );
}
export default Home;