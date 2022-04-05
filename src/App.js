import logo from './logo.svg';
import './App.css';
import {Todos} from "./components/Todos";
import {todoList} from "./store"

function App() {
  return (
    <div className="App">
      <Todos initialTodoList={todoList}>
      </Todos>
    </div>
  );
}

export default App;
