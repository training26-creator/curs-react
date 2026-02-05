import { useEffect, useState } from "react";

import "./todos.css";
import axios from "axios";
import { TodoList } from "./todo-list";
import { TodoAdd } from "./todo-add";

// Sa nu ajungeti sa aveti un array, combinat din numere, obiecte
const array = ["De cumparat paine", "De facut temele", "De cumparat lapte"];

// Map -> ne permite sa iteram fiecare element din array si sa il modificam
// 1. NU modifica array-ul initial
// 2. De fiecare data returneaza array nou

async function fetchTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    return response.data;
  } catch {
    console.log("eroare");
  }
}

export function Todos() {
  // Pana la return, tinem tot JS-ul
  // Dupa return unde avem HTML + JS
  const str = "buna ziua".toLowerCase();
  const num = 123;
  const obj = { nume: "test" };

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Promise
  // pending - se face requestul
  // rejected - a fost o eroare
  // fullfilled - a fost totul bine

  // Request
  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    // console.log("todos a fostt modifica", todos);
  }, [todos]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAdd() {
    const newTodo = {
      title: inputValue,
      completed: false,
      id: Date.now(),
    };

    // 1. Varianta incorecta
    // todos.push(newTodo);

    // Varianta corect
    setTodos(todos.concat(newTodo));
    setInputValue("");
  }

  function handleDelete(id) {
    const updated = todos.filter((todo) => todo.id !== id);

    setTodos(updated);
  }

  function handleComplete(id) {
    const updated = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;

      return todo;
    });
    setTodos(updated);
  }

  //   nu va limitati un singgure return de html in componenta
  //   if (todos.length === 0) {
  //     return <p>Hey nu ai de facut nimic</p>;
  //   }

  return (
    <div className="w-xl my-10 mx-auto p-5 border-2 border-black bg-white">
      <h1>Todo List</h1>

      <TodoAdd
        inputValue={inputValue}
        handleAdd={handleAdd}
        handleInputChange={handleInputChange}
      />

      {todos.length === 0 && <p>Hey nu ai de facut nimic</p>}

      {/*  Cand avem un array de mapat in JSX
        1. TodoList
        2. TodoItem
        3. TodoList este folosit gen <TodoList list={} />
        4. TodoItem este folosit gen <TodoItem todo={} />
      */}
      <TodoList
        list={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
}

// 1. Randare conditionata
// 2. Salvare LS
