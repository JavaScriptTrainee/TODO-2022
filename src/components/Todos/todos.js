import {TodoItem} from "../TodoItem";
import {DoneItem} from "../DoneItem";
import {useState} from "react"

export function Todos({initialTodoList}){
        const [todoList, setTodoList] = useState(initialTodoList)
        const listenEnter = (e)=>{
            if(e.keyCode === 13){
                const content = e.target.value; 
                addTodo(content);   
                //const newTodoList = [...todoList,content]
                //setTodoList(newTodoList)    
                console.log("todos",todoList);//Q2:为什么这里todoList不是最新
            };
        };
        const addTodo = (content)=>{
            let objTodoItem ={
                item:"",
                done:false
            };
            objTodoItem.item = content;
            const newTodoList = [...todoList,objTodoItem]
            setTodoList(newTodoList)
            console.log("addTodo",newTodoList);
        };
    const handleItemDelete = (index)=>{
        let initTodolist = [...todoList];
        initTodolist.splice(index,1);
        setTodoList(initTodolist)
    }  
    const getChildIndex = (index)=>{
        console.log("index",index)
        //return index;
    }
    return(
        <div>
            <input type="text" className="inputBox" placeholder="添加todo" onKeyDown={listenEnter}/>
            <h2>待办事项
            </h2>
            <ul>
                <TodoItem todoList={todoList} handleItemDelete={handleItemDelete} getChildIndex={getChildIndex}>
                </TodoItem>
            </ul>
            <h2>已完成
            </h2>
            <ul>
                <DoneItem todoList={todoList}>
                </DoneItem>
            </ul>
        </div>
    )
}