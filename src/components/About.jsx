/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { context } from '../Context';

const about = () => {
    const {state, dispatch} = useContext(context)
    return (
        <div className="w-full h-full absolute flex justify-center items-center overflow-x-hidden z-10">
            <p className='text-sand-50 absolute top-20 text-5xl font-raleway font-bold'>About <span className={`${state.text} leading-3`}>Me</span></p>
            <p className='text-sand-50 text-xl font-raleway absolute top-32 opacity-80'>Get to Know <span className={`${state.text}`}>me.</span></p>
            
            {/* image changer */}
            {state.color === "jade-600" && 
                <img src={require("../images/jade-600.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            {state.color === "cardinal-700" && 
                <img src={require("../images/cardinal-700.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            {state.color === "chill-700" && 
                <img src={require("../images/chill-700.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            {state.color === "sienna-500" && 
                <img src={require("../images/sienna-500.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            {state.color === "indigo-900" && 
                <img src={require("../images/indigo-900.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            {state.color === "endeavour-700" && 
                <img src={require("../images/endeavour-700.png")} alt="" className='opacity-70 absolute top-1/4 lg:right-10' />
            }
            
            <div className='lg:w-1/2 w-full h-80 absolute lg:left-24 p-5 lg:p-0 lg:top-56 top-[60%]'>
                <p className='text-sand-50 font-poppins text-4xl'>I'm a Creative <span className={`${state.text}`}>Front-end</span> Developer</p>
                <p className='text-sand-50 w-11/12 ??? font-poppins absolute lg:top-16 top-40 text-justify opacity-80 z-10'>I am a front-end developer with a strong passion for web development. I am constantly seeking out opportunities to expand my knowledge and skills in this ever-evolving field. I am particularly interested in exploring new technologies and incorporating them into my work to create innovative and user-friendly websites. I am also enthusiastic about collaborating with other professionals in the industry and am eager to gain experience working in a team of skilled programmers. While I have primarily worked independently thus far, I am excited about the prospect of contributing to and learning from a collaborative team environment.</p>
            </div>

            {/* skills */}
            <p className='text-sand-50 absolute lg:top-full top-[122%] text-5xl font-raleway font-bold'>My <span className={`${state.text}`}>Skills</span></p>

            <div className='w-full absolute lg:top-[110%] top-[130%] flex items-center justify-center flex-wrap'>

                {/* html */}
                <div title='HTML' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover1"})}
                onMouseLeave={()=> dispatch({type : "hover1"})}
                >
                    <i class="fa-brands fa-html5 text-sand-50 text-7xl absolute z-10"></i>
                    <div className={`${state.hover1 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* css */}
                <div title='CSS' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover2"})}
                onMouseLeave={()=> dispatch({type : "hover2"})}
                >
                    <i class="fa-brands fa-css3-alt text-sand-50 text-7xl absolute z-10"></i>
                    <div className={` ${state.hover2 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* js */}
                <div title='JavaScript' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover3"})}
                onMouseLeave={()=> dispatch({type : "hover3"})}
                >
                    <i class="fa-brands fa-js text-sand-50 text-7xl absolute z-10"></i>
                    <div className={` ${state.hover3 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* react */}
                <div title='React' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover4"})}
                onMouseLeave={()=> dispatch({type : "hover4"})}
                >
                    <i class="fa-brands fa-react text-sand-50 text-7xl absolute z-10"></i>
                    <div className={` ${state.hover4 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* npm */}
                <div title='Node Package Manager' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover5"})}
                onMouseLeave={()=> dispatch({type : "hover5"})}
                >
                    <i class="fa-brands fa-npm text-sand-50 text-7xl absolute z-10"></i>
                    <div className={` ${state.hover5 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* git */}
                <div title='Git & GitHub' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover6"})}
                onMouseLeave={()=> dispatch({type : "hover6"})}
                >
                    <i class="fa-brands fa-git text-sand-50 text-7xl absolute z-10"></i>
                    <div className={` ${state.hover6 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>

                {/* tailwind */}
                <div title='TailwindCSS' className='lg:w-1/4 lg:h-52 h-20 w-1/5 overflow-hidden relative bg-gray-900 opacity-90 m-5 rounded-2xl flex justify-center items-center'
                onMouseEnter={()=>dispatch({type : "hover7"})}
                onMouseLeave={()=> dispatch({type : "hover7"})}
                >
                    <img src={require('../images/tailwindIcon.png')} alt='tailwind' className='w-20 absolute z-10' />
                    <div className={` ${state.hover7 ? "w-full h-96":"w-24"} rounded-3xl h-20 bg-${state.color} absolute opacity-50 transition-all duration-900`}></div>
                </div>
            </div>
        </div>
    );
}
 
export default about;