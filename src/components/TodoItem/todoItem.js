//import style.css
export function TodoItem(){
    var todolist = [];
    const listenEnter = (e)=>{
        const content = e.target.value;
        if(e.keyCode === 13){
        addTodo(content);
        };
    };
    const addTodo = (content)=>{
        var objTodoItem ={
        item:"",
        done:"false"
        };
        objTodoItem.item = content;
        todolist.push(objTodoItem);
        console.log(todolist);
    };
    return (
        <input type="text" id="inputTodo" placeholder="添加todo" onKeyDown={listenEnter}/>
    )
}

