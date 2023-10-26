import { createContext,useContext, useReducer } from "react" 


export const themeContext=createContext()

const initialState={darkMode:false}

const themeReducer=(state,{type,paylaod})=>{
    switch(type){
        case "toggle": return {darkMode:!state.darkMode}
        default:
            return state;
    }
}

export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,initialState)
     return (
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
     )
}