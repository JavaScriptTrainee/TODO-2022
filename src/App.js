import logo from './logo.svg';
import './App.css';
import {Todos} from "./components/Todos";
import {Provider} from "react-redux";
import {store} from "./store/store";
// import {todoList} from "./store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos>
        </Todos>
      </Provider>
    </div>
  );
}

export default App;
