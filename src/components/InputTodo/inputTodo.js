import React from "react";
import './inputTodo.css';
import { useState } from "react";
export function InputTodo({addTodo,handleInputChange}){
    const [inputValue,setInputValue] = useState("");
    const  handleKeyDown = (e)=>{
             if(e.keyCode === 13){
                setInputValue(inputValue);
                handleInputChange(e.keyCode.inputValue); 
                addTodo(inputValue);    
            };;
    }
    const addATodo = ()=>{
       setInputValue(inputValue); 
       addTodo(inputValue); 
    }
    return (
        <React.Fragment>
                    <input type="text" className="inputBox" placeholder="添加todo" value={inputValue} onKeyDown={(e)=>handleKeyDown(e)}/>
                    <button className="inputButton" onClick={addATodo}>Add</button>
        </React.Fragment>
    )
}

