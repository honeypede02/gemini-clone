import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext(null as any);

const ContextProvider = (props:any) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    
    
    

    const onSent = async (prompt: any) => {
        setLoading(true);
        setRecentPrompt(prompt);
        setResultData(await run(prompt));
        setLoading(false);
        setShowResult(true);
    }

    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult, 
        loading,
        resultData, 
        input, 
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider