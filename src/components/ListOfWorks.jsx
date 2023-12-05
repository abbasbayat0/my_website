import { useContext } from "react";
import { context } from "../Context";

/* eslint-disable react/jsx-no-target-blank */
const ListOfWorks = () => {
    const {state} = useContext(context)
    return (
        <div>
            {/* CV */}         
            <div className="lg:w-3/4 lg:h-3/4 w-full h-2/3 top-44 right-2 absolute lg:top-1/3 lg:left-[170px] lg:overflow-hidden">
                <img src={require("../images/pouria.JPG")} alt="pouriamaleki.com" className="rounded-lg w-full lg:w-3/4 opacity-90 animate-image" />
                <div className="animate-description lg:w-2/5 lg:h-72 bg-gray-700 opacity-80 rounded-xl lg:p-5 p-2 absolute top-38 lg:right-0 lg:bottom-10">
                    <h2 className={`${state.text} font-poppins text-xl lg:text-4xl`}>The First CV</h2>
                    <br />
                    <p className="font-poppins lg:text-md text-sm text-justify text-sand-50">As the first web project, it presented me with good challenges and taught me a lot. Additionally, it was my first experience uploading a project to a real server.</p>
                    <br /> <br />
                    <a href="https://pouriamaleki.com/" target="_blank" className={`${state.text} font-raleway font-bold cursor-pointer border ${state.border} p-1 text-xl ml-32`}>View Project</a>
                </div>
            </div>

            {/* todo */}
            <div className="lg:w-3/4 lg:h-3/4 w-full h-1/3 absolute top-[70%] right-2 lg:top-[130%] lg:left-[170px] lg:overflow-hidden">
                <img src={require("../images/todo.JPG")} alt="todo list" className="rounded-lg w-full lg:w-3/4 opacity-90 animate-image" />
                <div className="animate-description lg:w-2/5 lg:h-72 bg-gray-700 opacity-80 rounded-xl lg:p-5 p-2 absolute top-38 lg:right-0 lg:bottom-10">
                    <h2 className={`${state.text} font-poppins text-xl lg:text-4xl`}>ToDo List</h2>
                    <br />
                    <p className="font-poppins lg:text-md text-sm text-justify text-sand-50">My first experience with React and Tailwind ended in this project, which is mostly considered a basic training project. I still have ideas to improve it and add more features</p>
                    <br />
                    <a href="https://abbasbayat0.github.io/toDo/" target="_blank" className={`${state.text} font-raleway font-bold cursor-pointer border ${state.border} p-1 text-xl ml-32`}>View Project</a>
                </div>
            </div>
        </div>
    );
}
export default ListOfWorks;