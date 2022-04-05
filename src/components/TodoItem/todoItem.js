import React,{useRef} from "react"
import './todoItem.css';
//import {Todos} from "../Todos";
export function TodoItem({todoList,handleItemDelete,getChildIndex}){ 
    const ref = useRef();
    console.log("todoItem",todoList)
    return (
        <React.Fragment>
                {
                    todoList.map((value,index) => {//Q1:为什么这里用filter不好使
                        if(!value.done){
                            return <li key={index} ref={ref}>
                            {value.item}
                             <button onClick={()=>{handleItemDelete(index);getChildIndex(index)}}>删除</button>
                            </li>
                        }
                    })
                    // todoList.map((value,index)=>{
                    //     return(
                    //         <li key={index}>
                    //             {value}
                    //         </li>   
                    //     )
                    // })
                }
        </React.Fragment>
    )
}

