import { useReducer } from "react";
import ContactIcon from "./components/ContactIcon";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import About from "./components/About"
import Social from "./components/Social";
import { context } from "./Context"
import { Reducer, initialState } from "./Reducer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Enter from "./components/Enter";
import Colors from "./components/Colors";

const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <>
            {/* i dont use react-router-dom because of particles package :| */}
            
            {!state.first && <Intro />}
            <context.Provider value={{state, dispatch}}>
            {state.componentShow === "home" && 
                <>
                    {state.first && <Enter />}
                    <Home />
                    <Social />
                    <ContactIcon />
                    <Nav />
                </>
            }
            {state.componentShow === "about" &&
                <>
                    {state.first && <Enter />}
                    <Colors />
                    <About />
                    <Nav />
                </>
            }
            {state.componentShow === "contact" &&
                <>
                    {state.first && <Enter />}
                    <Colors />
                    <Contact />
                    <Nav />
                </>
            }
            {state.componentShow === "portfolio" &&
                <>
                    {state.first && <Enter />}
                    <Colors />
                    <Portfolio />
                    <Nav />
                </>
            }
            </context.Provider>
        </>
    );
}
export default App;