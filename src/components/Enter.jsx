import { useContext } from "react";
import { context } from "../Context";

const Enter = () => {
    const {state} = useContext(context)
    return (
        <div className="h-full w-full overflow-hidden absolute">
            <div className={`w-[150%] h-full bg-${state.color} fixed -left-[150%] z-30 animate-enter`}></div>

        </div>
    );
}
export default Enter;