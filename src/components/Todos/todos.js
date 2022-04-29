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
    const [todoList, setTodoList] = useState(initialTodoList)

    const addTodo = (content)=>{
        let objTodoItem ={
            item:content,
            done:false
        };
        let curTodoList = store.getTodoList();
        console.log("log4",curTodoList);
        let newTodoList = [...curTodoList,objTodoItem]
        setTodoList(newTodoList);
        store.setTodoList(newTodoList);
        console.log("after log4",store.getTodoList());

    };
    const handleItemDelete = (index)=>{
        let curTodoList = store.getTodoList();
        let newTodoList = [...curTodoList];
        newTodoList.splice(index,1);
        setTodoList(newTodoList);
        store.setTodoList(newTodoList);    
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