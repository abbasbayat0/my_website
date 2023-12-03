import { useContext } from "react";
import { context } from "../Context";

/* eslint-disable react/jsx-no-target-blank */
const ListOfWorks = () => {
    const {state} = useContext(context)
    return (
        <div>
            {/* CV */}         
            <div className="w-3/4 h-3/4 absolute top-1/3 left-[170px] overflow-hidden">
                <img src={require("../images/pouria.JPG")} alt="pouriamaleki.com" className="rounded-lg w-3/4 opacity-90 animate-image" />
                <div className="animate-description w-2/5 h-72 bg-gray-700 opacity-80 rounded-xl p-5 absolute right-0 bottom-10">
                    <h2 className={`${state.text} font-poppins text-4xl`}>The First CV</h2>
                    <br />
                    <p className="font-poppins text-md text-justify text-sand-50">As the first web project, it presented me with good challenges and taught me a lot. Additionally, it was my first experience uploading a project to a real server.</p>
                    <br /> <br />
                    <a href="https://pouriamaleki.com/" target="_blank" className={`${state.text} font-raleway font-bold cursor-pointer border ${state.border} p-1 text-xl ml-32`}>View Project</a>
                </div>
            </div>

            {/* todo */}
            <div className="w-3/4 h-3/4 absolute top-[130%] left-[170px] overflow-hidden">
                <img src={require("../images/todo.JPG")} alt="todo list" className="rounded-lg w-3/4 opacity-90 animate-image" />
                <div className="animate-description w-2/5 h-72 bg-gray-700 opacity-80 rounded-xl p-5 absolute right-0 bottom-10">
                    <h2 className={`${state.text} font-poppins text-4xl`}>ToDo List</h2>
                    <br />
                    <p className="font-poppins text-md text-justify text-sand-50">My first experience with React and Tailwind ended in this project, which is mostly considered a basic training project. I still have ideas to improve it and add more features</p>
                    <br />
                    <a href="https://abbasbayat0.github.io/toDo/" target="_blank" className={`${state.text} font-raleway font-bold cursor-pointer border ${state.border} p-1 text-xl ml-32`}>View Project</a>
                </div>
            </div>
        </div>
    );
}
export default ListOfWorks;