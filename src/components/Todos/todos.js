import {InputTodo} from "../InputTodo";
import {TodoItem} from "../TodoItem";
import {DoneItem} from "../DoneItem";
import {addTodo,delTodo,toggleTodo} from "../../store/action/todoActions";
import {useSelector,useDispatch} from "react-redux";
import {useState} from "react";

export function Todos(){
    let doneSum = 0;
    let todoList = useSelector(state=>state);
    console.log("todoList",todoList);
    const disPatch = useDispatch();

    const addInputTodo = (content)=>{ 
        let objTodoItem ={
            item:content,
            done:false
        };
        disPatch(addTodo(objTodoItem));
    }
    const handleItemDelete = (index)=>{
        disPatch(delTodo(index));
    }  
    const handleCheckboxChange = (index)=>{
        disPatch(toggleTodo(index));
    }  
    const getChildIndex = (index)=>{
        console.log("index",index)
        //return index;
    }
    todoList.forEach((value)=>{
        if(value.done === true){
            doneSum++;
        }
    })
    let InitVisionOpt={
        showTodoItem:true,
        showDoneItem:true,
    }
    const [visionOpt,setVisionOpt] = useState(InitVisionOpt);
    const handleShowTodoItem = ()=>{
        let newVisionOpt = {
            showTodoItem:true,
            showDoneItem:false,
        }
        setVisionOpt(newVisionOpt);
        console.log("newVisionOpt",newVisionOpt);
    }
    const handleShowDoneItem = ()=>{
        let newVisionOpt = {
            showTodoItem:false,
            showDoneItem:true,
        }
        setVisionOpt(newVisionOpt);
    }
    const handleShowAll = ()=>{
        let newVisionOpt = {
            showTodoItem:true,
            showDoneItem:true,
        }
        setVisionOpt(newVisionOpt);
    }

    return(
        <div>
            <InputTodo addInputTodo={addInputTodo} >
            </InputTodo>
            <h2>待办事项
            </h2>
            {
                visionOpt.showTodoItem ? (           
                    <ul>
                        <TodoItem todoList={todoList} handleCheckboxChange={handleCheckboxChange} handleItemDelete={handleItemDelete} getChildIndex={getChildIndex}>
                        </TodoItem>
                    </ul>
                ):null
            }
            <h2>已完成
            </h2>
            {
                visionOpt.showDoneItem ? (           
                    <ul>
                        <DoneItem todoList={todoList} handleCheckboxChange={handleCheckboxChange} handleItemDelete={handleItemDelete}>
                        </DoneItem>
                    </ul>
                ):null
            }
            <h3>
                {doneSum}已完成/{todoList.length}总数
            </h3>
            <button onClick={handleShowTodoItem}>
                未完成
            </button>
            <button onClick={handleShowDoneItem}>
                已完成
            </button>
            <button onClick={handleShowAll}>
                全部
            </button>
        </div>
    )
}