import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext(null as any);

const ContextProvider = (props:any) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [isError, setIsError] = useState(false);
    
    
    const delayPara = (index:number, nextWord:string) => {
        setTimeout(() => {
            setResultData(prev=>prev+nextWord)
        }, (75*index));

    }

    const onSent = async (prompt:string) => {
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(prompt);
        setResultData("")
        setInput(prompt);
        setIsError(false)
        if(!previousPrompts.includes(prompt))
            setPreviousPrompts((prev) => [...prev, prompt])
        try{
            const response = await run(input);
            let responseArray = response.split("**")
            let newResponse=''
            for(let i=0; i<responseArray.length; i++){
                if(i%2 == 0){
                    newResponse += responseArray[i];
                }
                else{
                    newResponse += "<b>"+responseArray[i]+"</b>";
                }
            }
            let newResponse2 = newResponse.split("*").join("</br>")
            let newResponseArray = newResponse2.split(" ")
            for(let i=0; i<newResponseArray.length; i++){
                delayPara(i, newResponseArray[i]+" ");
            }
        }catch(e){
            setIsError(true);
            console.log("e="+e)
        }
        setInput("");
        setLoading(false);
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
        setInput,
        setShowResult, 
        isError
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider