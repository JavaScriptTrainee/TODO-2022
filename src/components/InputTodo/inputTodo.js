import React from "react";
import './inputTodo.css';
import {useState} from "react";
export function InputTodo({addInputTodo}){
    const [inputValue,setInputValue] = useState("");
    const  handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleEnter = (e)=>{
        if(e.keyCode === 13){
            addInputTodo(inputValue);
            setInputValue("");
        }
    }
    const handleSubmit = ()=>{
        addInputTodo(inputValue); 
        setInputValue("");
    }
    return (
        <React.Fragment>
                    <input type="text" className="inputBox" placeholder="添加todo" value={inputValue} onKeyDown={handleEnter} onChange={handleInputChange}/>
                    <button className="inputButton" onClick={handleSubmit}>Submit</button>
        </React.Fragment>
    )
}

