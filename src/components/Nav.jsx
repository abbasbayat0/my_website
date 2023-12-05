import { useContext } from "react";
import { context } from "../Context";

const Nav = () => {
    const {state, dispatch} = useContext(context)


    return (
        <div className="absolute right-0 h-full w-full overflow-hidden">            
            {/* bars */}
            <div className='lg:w-24 lg:h-24 cursor-pointer z-10 absolute right-7 lg:right-0 text-sand-50 text-3xl top-14'>
			    <i className='fa-solid fa-bars opacity-70' 
                onClick={()=>dispatch({type: "menu"})}
                onMouseEnter={(e)=>{e.target.classList.add("animate-pulse"); 
                    e.target.classList.replace("opacity-70", "opacity-100")}}
                onMouseLeave={(e)=>{e.target.classList.remove("animate-pulse"); 
                    e.target.classList.replace("opacity-100", "opacity-70")}}>
                a</i>
            </div>

            {/* menu */}
            <div className={`absolute z-20 bottom-full ${state.showMenu ? "translate-y-full opacity-100": "opacity-0"} w-full h-full bg-gray-900 flex justify-center items-center transition-all duration-1000 delay-75`}>

                {/* navbar title */}
                <h1 className={`absolute text-gray-500 flex justify-center items-center font-blackOps text-[50px] lg:text-[160px] transition-all duration-1000 ${state.menuTitle ? "opacity-40 tracking-tighter":"opacity-0"}`}>{state.menuTitle}</h1>

                {/* list of pages */}
                <div className="h-80 text-3xl cursor-pointer absolute text-sand-50 opacity-80 font-poppins flex flex-col justify-around items-center">
                    <p onMouseEnter={()=>dispatch({type: "title", data: "H O M E"})}
                        onMouseLeave={()=>dispatch({type: "title", data: ""})}
                        onClick={()=>{dispatch({type: "component", data: "home"}); setTimeout(() => {
                            dispatch({type: "first"})
                            dispatch({type: "menu"});
                        }, 500);}}>HOME
                    </p>

                    <p onMouseEnter={()=>dispatch({type: "title", data: "A B O U T"})}
                        onMouseLeave={()=>dispatch({type: "title", data: ""})}
                        onClick={()=>{dispatch({type: "component", data: "about"}); setTimeout(() => {
                            dispatch({type: "first"})
                            dispatch({type: "menu"});
                        }, 500);}}>ABOUT
                    </p>

                    <p onMouseEnter={()=>dispatch({type: "title", data: "P O R T F O L I O"})}
                        onMouseLeave={()=>dispatch({type: "title", data: ""})}
                        onClick={()=>{dispatch({type: "component", data: "portfolio"}); setTimeout(() => {
                            dispatch({type: "first"})
                            dispatch({type: "menu"});
                        }, 500);}}>PORTFOLIO
                    </p>

                    <p onMouseEnter={()=>dispatch({type: "title", data: "C O N T A C T"})}
                        onMouseLeave={()=>dispatch({type: "title", data: ""})}
                        onClick={()=>{dispatch({type: "component", data: "contact"}); setTimeout(() => {
                            dispatch({type: "first"})
                            dispatch({type: "menu"});
                        }, 500);}}>CONTACT
                    </p>
                </div>

                {/* exit icon */}
                <i className="fa-solid fa-door-closed cursor-pointer transition-all absolute top-24 right-10 lg:right-24 duration-300 text-sand-50 text-3xl" 
                onMouseEnter={(e)=>{
                    e.target.classList.replace("text-3xl", "text-4xl");
                    e.target.classList.replace("fa-door-closed", "fa-door-open")
                }}
                onMouseLeave={(e)=>{
                    e.target.classList.replace("text-4xl", "text-3xl");
                    e.target.classList.replace("fa-door-open", "fa-door-closed")
                }}
                onClick={()=>dispatch({type: "menu"})}>a</i>
            </div>
        </div>
    );
}
export default Nav;