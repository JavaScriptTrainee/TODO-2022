import {InputTodo} from "../InputTodo";
import {TodoItem} from "../TodoItem";
import {DoneItem} from "../DoneItem";
import {useState} from "react"

export function Todos({initialTodoList}){
        var doneSum = 0;
        const [todoList, setTodoList] = useState(initialTodoList)
    
        const handleInputChange = (keyCode,content)=>{
            console.log("here",keyCode);
            if(keyCode === 13){
                const content = content; 
                addTodo(content);    
                console.log("todos",todoList);//Q2:为什么这里todoList不是最新
            };
        };
        const addTodo = (content)=>{
            let objTodoItem ={
                item:content,
                done:false
            };
            const newTodoList = [...todoList,objTodoItem]
            setTodoList(newTodoList)
        };
    const handleItemDelete = (index)=>{
        let initTodolist = [...todoList];
        initTodolist.splice(index,1);
        setTodoList(initTodolist)
    }  
    const handleCheckboxChange = (index)=>{
        let initTodolist = [...todoList];
        initTodolist[index].done = !initTodolist[index].done;
        setTodoList(initTodolist)
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
    return(
        <div>
            <InputTodo handleInputChange={handleInputChange} addTodo={addTodo} >
            </InputTodo>
            <h2>待办事项
            </h2>
            <ul>
                <TodoItem todoList={todoList} handleCheckboxChange={handleCheckboxChange} handleItemDelete={handleItemDelete} getChildIndex={getChildIndex}>
                </TodoItem>
            </ul>
            <h2>已完成
            </h2>
            <ul>
                <DoneItem todoList={todoList} handleCheckboxChange={handleCheckboxChange} handleItemDelete={handleItemDelete}>
                </DoneItem>
            </ul>
            <h2>
                {doneSum}已完成/{todoList.length}总数
            </h2>
        </div>
    )
}