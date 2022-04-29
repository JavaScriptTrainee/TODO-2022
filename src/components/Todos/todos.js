import {InputTodo} from "../InputTodo";
import {TodoItem} from "../TodoItem";
import {DoneItem} from "../DoneItem";
import {Store} from "../../store";
import {useState} from "react"
    // var store = new Store();
    // var initialTodoList = store.getTodoList(); 
    // console.log("log3",initialTodoList);

export function Todos(){
    var doneSum = 0;
    var store = new Store();
    var initialTodoList = store.getTodoList(); 
    console.log("log3",initialTodoList);
    const [todoList, setTodoList] = useState(initialTodoList);

    const addTodo = (content)=>{   //1 it's own state change  ;  2 props'
        let objTodoItem ={
            item:content,
            done:false
        };
        let newTodoList = [...todoList,objTodoItem]
        store.setTodoList(newTodoList);
        let curTodoList = store.getTodoList();
        setTodoList(curTodoList);
        console.log("after log4",curTodoList);
    };
    const handleItemDelete = (index)=>{
        let newTodoList = [...todoList];
        newTodoList.splice(index,1);
        store.setTodoList(newTodoList);    
        let curTodoList = store.getTodoList();
        setTodoList(curTodoList);
    }  
    const handleCheckboxChange = (index)=>{
        let curTodoList = store.getTodoList();
        let newTodoList = [...curTodoList];
        console.log("log5",newTodoList);
        newTodoList[index].done = !newTodoList[index].done;
        console.log("log6",newTodoList);
        setTodoList(newTodoList);
        store.setTodoList(newTodoList);   
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
            <InputTodo addTodo={addTodo} >
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