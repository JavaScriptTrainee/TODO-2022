let InitTodoList = [
    {
    item:'learn js',
    done:false
    },
    {
    item:'learn react',
    done:true
    },
    {
    item:'learn redux',
    done:false
    }
];
export class Store{
  constructor() {
    this.todoList = InitTodoList;
  }
  getTodoList() {
    console.log("log1",this.todoList)
    return this.todoList;
  }
  setTodoList(newTodoList) {
      this.todoList = newTodoList;
      console.log("log2",this.todoList)
  }
}