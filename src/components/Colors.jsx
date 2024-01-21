import { useContext } from "react";
import { context } from "../Context";

const Color = () => {
    const {state, dispatch} = useContext(context)
    return (
        <div className="absolute right-1 hidden top-1/3 z-20 lg:flex w-56 h-52 p-2 overflow-hidden">
            <div>
                <i class={`fa-solid fa-gear animate-gear ${state.showColor? "translate-x-0 opacity-90": "translate-x-[185px] opacity-0"} cursor-pointer mr-2 text-sand-50 text-2xl transition-all duration-1000`}
                onClick={()=>dispatch({type: "showColor"})}></i>
            </div>
            <div className={`bg-gray-800 opacity-90 w-full h-full text-center rounded-lg ${state.showColor ? "translate-x-0 opacity-90":"translate-x-48 opacity-10"} transition-all duration-1000`}>
                <p className={`text-sand-50 text-xl ${state.showColor ? "animate-text":""} mt-1`}>Custom Colors</p>

                {/* color box */}
                <div className="w-full h-2/3 mt-4 flex flex-wrap justify-center items-center">
                    <div className={`cursor-pointer ${state.showColor ? "animate-color1":""} w-1/4 m-1 bg-jade-600 h-1/3 rounded-lg`}
                    onClick={()=>dispatch({type: "color", data: "jade-600", text: "text-jade-600", border: "border-jade-600"})}></div>

                    <div className={`cursor-pointer w-1/4 m-1 bg-cardinal-700 h-1/3 ${state.showColor ? "animate-color1":""} rounded-lg`}
                    onClick={()=>dispatch({type: "color", data: "cardinal-700", text: "text-cardinal-700", border: "border-cardinal-700"})}></div>

                    <div className={`cursor-pointer ${state.showColor ? "animate-color1":""} w-1/4 m-1 bg-indigo-900 h-1/3 rounded-lg`}
                    onClick={()=>dispatch({type: "color", data: "indigo-900", text: "text-indigo-900", border: "border-indigo-900"})}></div>

                    <div className={`cursor-pointer w-1/4 m-1 bg-chill-700 h-1/3 ${state.showColor ? "animate-color2":""} rounded-lg`}
                    onClick={()=>dispatch({type: "color", data: "chill-700", text: "text-chill-700", border: "border-chill-700"})}></div>

                    <div className={`cursor-pointer ${state.showColor ? "animate-color2":""} w-1/4 m-1 bg-endeavour-700 h-1/3 rounded-lg`}
                    onClick={()=>dispatch({type: "color", data: "endeavour-700", text: "text-endeavour-700", border: "border-endeavour-700"})}></div>

                    <div className={`cursor-pointer w-1/4 m-1 bg-sienna-500 h-1/3 rounded-lg ${state.showColor ? "animate-color2":""}`}
                    onClick={()=>dispatch({type: "color", data: "sienna-500", text: "text-sienna-500", border: "border-sienna-500"})}></div>
                </div>
            </div>
        </div>
    );
}
export default Color;