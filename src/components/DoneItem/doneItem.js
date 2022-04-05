import React from "react"
import './doneItem.css';
export function DoneItem({todoList}){
    return (
        <React.Fragment>
                {
                    todoList.map((value,index) => {//Q1:为什么这里用filter不好使
                        if(value.done){
                            return <li key={index}>{value.item}</li>
                        }
                    })
                }
        </React.Fragment>
    )
}

