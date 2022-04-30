import React from "react"
import './todoItem.css';
export function TodoItem({todoList,handleCheckboxChange,handleItemDelete,getChildIndex}){ 
    return (
        <React.Fragment>
                {
                    todoList.map((value,index) => {//Q1:为什么这里用filter不好使
                        if(!value.done){
                            return <li key={index}>
                            <input type="checkbox" checked={value.done} onChange={()=>handleCheckboxChange(index)}></input>
                            {value.item}
                             <button onClick={()=>{handleItemDelete(index);getChildIndex(index)}}>删除</button>
                            </li>
                        }
                    })
                }
        </React.Fragment>
    )
}

