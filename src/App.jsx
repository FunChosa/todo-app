import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-[#444643]`,
  container: `bg-[#dadbd3] max-w-[500px] w-full m-auto rounded-xl shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between items-center`,
  input: `rounded-md p-3 w-full text-xl`,
  button: `rounded-[50px] p-2 ml-2 bg-[#91b774] text-slate-100`,
  loading: `text-center p-2 mt-2 text-xl text-gray-400`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  //create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    await addDoc(collection(db, "todos"), {
      text: inputValue.trim(),
      completed: false,
    });
    setInputValue("");
  };

  //read todos
  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
      setTodos(todosArr);
    });
    return () => unsub();
  }, []);

  //update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //delete todo
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To-do List</h3>
        <form className={style.form} onSubmit={createTodo}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {loading ? (
            <p className={style.loading}>{"Loading..."}</p>
          ) : (
            todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
