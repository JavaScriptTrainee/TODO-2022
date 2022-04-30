import {InputTodo} from "../InputTodo";
import {TodoItem} from "../TodoItem";
import {DoneItem} from "../DoneItem";
import {addTodo,delTodo,toggleTodo} from "../../store/action/todoActions";
import {useSelector,useDispatch} from "react-redux";

export function Todos(){
    var doneSum = 0;
    let todoList = useSelector(state=>state);
    console.log("todoList",todoList);
    const disPatch = useDispatch();

    const addInputTodo = (content)=>{ 
        let objTodoItem ={
            item:content,
            done:false
        };
        disPatch(addTodo(objTodoItem));
    };
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
    return(
        <div>
            <InputTodo addInputTodo={addInputTodo} >
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