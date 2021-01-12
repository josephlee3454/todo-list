import React, {useState} from 'react'
import './App.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import NewList from './components/NewList';


function App() {
  
  const [todos, setTodos] = useState([
    {
      body: "Create todo list",
      completed: false
    },
    {
      body: "Laundry",
      completed: true
    },
    {
      body: "Buy more garlic",
      completed: false
    },
  ])
  
const updateTodo = (idx)=> {

  const copyTodos = [...todos];

  copyTodos[idx].completed = !copyTodos[idx].completed;// if its true make it false if its false make it true 
  //basically above lets check and uncheck  ur stuff


  setTodos(copyTodos);

  // setTodos(todos.filter((todo,i)=> i !== deletedIdx ? true : false))
}


const deleteTodo = (deletedIdx) => {
  const copyTodos = todos.filter((todo, idx) => {
    if(idx!== deletedIdx){
      return true; 
    }
      return false;
  });
    setTodos(copyTodos);
}
  
const createTodo = (todo) => {
  setTodos([...todos, todo]);
}

    return (
    <div className="App">

      hello humans !!!!!
      <NewList createTodo={createTodo}/>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      
    </div>
  );
}

export default App;
